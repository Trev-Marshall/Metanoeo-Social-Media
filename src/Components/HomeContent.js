import React, { useState } from 'react'
import styled from 'styled-components'
import Post from './Post'
import Updates from './Updates'
import NewResources from './NewResources'
import admin from 'firebase'
import { db, auth } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUserPosts } from '../Features/signInSlice'
import DefaultPost from './DefaultPost'

function HomeContent({ postModal, setPostModal, defaultPosts }) {
  const posts = useSelector(selectUserPosts);

  const [formState, setForm] = useState({
    caption: '',
    photo: ''
  });

  const photoChange = (event) => {
    setForm({
      ...formState,
      photo: event.target.value,
    });
  };

  const captionChange = (event) => {
    setForm({
      ...formState,
      caption: event.target.value,
    });
  };

  const createPost = (e) => {
    const authUser = auth.currentUser;
    e.preventDefault();

    var valid = /^(ftp|http|https):\/\/imgur.com/.test(formState.photo);
    const userRef = db.collection('users').doc(authUser.uid);
    if (formState.caption === '' || formState.photo === '') {
      alert("Please fill out all forms");
    } else if (!valid) {
      alert("Make sure your url for photo is in the format: https://imgur.com/<rest of link goes here>.jpg");
    } else {
      userRef.update({
        posts: admin.firestore.FieldValue.arrayUnion(formState)
      })
      setForm({
        caption: '',
        photo: ''
      })
    }
  }


  return (
    <Container>
      <PostSection>
        {
          posts.map((item, i) =>
          (
            <Post
              key={i}
              item={item}
            />
          )
          )
        }
        {
          defaultPosts.postsArray.map((item, i) =>
          (
            <DefaultPost
              key={i}
              item={item}
            />
          )
          )
        }
      </PostSection>
      <SideBar>
        <SideBarDiv>
          <Updates />
          <NewResources />
        </SideBarDiv>
      </SideBar>
      {postModal &&
        <NewPostModal>
          <Xbtn onClick={() => { setPostModal(false) }}>x</Xbtn>
          <Form>
            <Label>Image (from imgur)</Label>
            <Input type='text' value={formState.photo} onChange={photoChange}></Input>
            <Label>Caption</Label>
            <Input type='text' value={formState.caption} onChange={captionChange}></Input>
            <Button type='submit' onClick={createPost}>Create Post</Button>
          </Form>
        </NewPostModal>
      }
    </Container>
  )
}

export default HomeContent

const Container = styled.div`
  padding: 70px 10px 10px 10px;
  display: flex;
  position: relative;
`

const PostSection = styled.div`
  background-color: #f0f4f5;
  margin: 0 20px 0 150px;
  width: 50%;
  border-radius: 10px;
`

const SideBar = styled.div`
  margin: 0 10px 0 auto;
  width: 30%;
  padding: 5px;
`

const SideBarDiv = styled.div`
  position: sticky;
  border-radius: 10px;
  top: 70px;
  background-color: #f0f4f5;
`

const NewPostModal = styled.div`
  position: fixed;
  height: 240px;
  left: 30%;
  top: 20%;
  width: 40%;
  text-align: center;
  background-color: #fff0f1;
  box-shadow: 5px 5px 5px grey;
  border-radius: 15px;

`

const Xbtn = styled.p`
  text-align: right;
  padding-right: 10px;
  font-size: 20px;
  cursor: pointer;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`

const Label = styled.label`

`
const Input = styled.input`

`

const Button = styled.button`
  margin-top: 10px;
  border: none;
  background: rgb(255,0,213);
  background: linear-gradient(141deg, rgba(255,0,213,1) 0%, rgba(180,120,221,1) 48%, rgba(33,123,203,1) 100%);
  border-radius: 13px;
`