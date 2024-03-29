import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, selectUserBio, selectUserPosts } from '../Features/signInSlice'
import { useHistory } from 'react-router-dom'
import { db, auth } from '../firebase'
import { useDispatch } from 'react-redux';

function Settings() {
  const selectName = useSelector(selectUserName);
  const selectPhoto = useSelector(selectUserPhoto);
  const selectBio = useSelector(selectUserBio);
  const posts = useSelector(selectUserPosts);
  const history = useHistory();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    nameValue: selectName,
    photoValue: selectPhoto,
    bioValue: selectBio,
  });

  const changeName = (event) => {
    setUser({
      ...user,
      nameValue: event.target.value
    });
  }
  const changePicture = (event) => {
    setUser({
      ...user,
      photoValue: event.target.value
    });
  }
  const changeBio = (event) => {
    setUser({
      ...user,
      bioValue: event.target.value
    });
  }

  const onSubmit = (event) => {
    const authUser = auth.currentUser;

    var valid = /^(ftp|http|https):\/\/imgur.com/.test(user.photoValue);

    event.preventDefault();
    const userRef = db.collection('users').doc(authUser.uid);
    if (selectBio === user.bioValue && selectPhoto === user.photoValue && selectName === user.nameValue) {
      alert("Change at least one thing before submitting");
      return;
    } else if (valid === false) {
      alert("Photo url is not in the correct format: https://imgur.com<rest of photo link goes here>")
    } else {
      userRef.set({
        userPhoto: user.photoValue,
        userName: user.nameValue,
        userBio: user.bioValue,
        posts: posts,
      }).then(() => {
        dispatch({
          type: "updateUser",
          userPhoto: user.photoValue,
          userName: user.nameValue,
          userBio: user.bioValue,
        });
        localStorage.setItem('userMetanoeo', JSON.stringify({
          userPhoto: user.photoValue,
          userName: user.nameValue,
          userBio: user.bioValue,
          posts: posts,
        }));
        window.location.reload();
      })
        .catch(err => {
          alert(`There has been an error processing your request: ${err}`);
        })
    }
  }

  return (
    <Container>
      <ProfileButton onClick={() => history.push("/user")} > Back To Profile</ProfileButton>
      <Form>
        <Label>Change name:</Label>
        <Input type='text' value={user.nameValue} onChange={changeName}></Input>
        <Hr />
        <Label>Change picture (Format: https://imgur.com/~insert-your-link~.jpg):</Label>
        <Input type='text' value={user.photoValue} onChange={changePicture}></Input>
        <Hr />
        <Label>Change Bio:</Label>
        <Input type='text' value={user.bioValue} onChange={changeBio}></Input>
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </Container>
  )
}

export default Settings

const Container = styled.div`
  padding-top: 100px;
  position: relative;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 10px;
`

const Hr = styled.hr`
  background-color: gray;
  width: 80%;
`

const Label = styled.label`
  padding: 5px 0 10px 0;
`

const Button = styled.button`
  margin: 15px 0 0 0;
  background: linear-gradient(141deg, rgba(255,0,213,.6) 0%, rgba(180,120,221,.6) 48%, rgba(33,123,203,.6) 100%);
`

const ProfileButton = styled.button`
  position: fixed;
  top: 80px;
  left: 40px;
  border: 1px solid black;
`