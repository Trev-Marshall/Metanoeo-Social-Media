import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, selectUserBio, selectFollowers, selectFollowing } from '../Features/signInSlice'
import { db, auth } from '../firebase'
import { useDispatch } from 'react-redux';
import { updateUser } from '../Features/signInSlice'
import { useEffect } from 'react'

function Settings() {
  const selectName = useSelector(selectUserName);
  const selectPhoto = useSelector(selectUserPhoto);
  const selectBio = useSelector(selectUserBio);
  const followers = useSelector(selectFollowers);
  const following = useSelector(selectFollowing);

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

    var valid = /^(ftp|http|https):\/\/imgur.com+/.test(user.photoValue);

    event.preventDefault();
    const userRef = db.collection('users').doc(authUser.uid);
    if (selectBio === user.bioValue && selectPhoto === user.photoValue && selectName === user.nameValue) {
      alert("Change at least one thing before submitting");
      return;
    } else if (valid === false) {
      alert("Photo url is not in the correct format: https://imgur.com<rest of photo link goes here>")
    } else {
      userRef.set({
        followers: followers,
        following: following,
        userPhoto: user.photoValue,
        userName: user.nameValue,
        userBio: user.bioValue,
      });
      dispatch({
        type: "updateUser",
        followers: followers,
        following: following,
        userPhoto: user.photoValue,
        userName: user.nameValue,
        userBio: user.bioValue,
      });
      alert("Refresh page to see changes");
    }
  }

  return (
    <Container>
      <Form>
        <Label>Change name:</Label>
        <Input type='text' value={user.nameValue} onChange={changeName}></Input>
        <Label>Change picture:</Label>
        <Input type='text' value={user.photoValue} onChange={changePicture}></Input>
        <Label>Change Bio:</Label>
        <Input type='text' value={user.bioValue} onChange={changeBio}></Input>
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </Container>
  )
}

export default Settings

const Container = styled.div`
  padding-top: 60px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Input = styled.input`

`

const Label = styled.label`

`

const Button = styled.button`

`