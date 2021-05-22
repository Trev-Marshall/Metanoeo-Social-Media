import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { updateUser } from '../Features/signInSlice';
import { db, provider, auth } from '../firebase'
import { useHistory } from 'react-router-dom'

function SignIn({ setDefaultPosts }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const userRef = db.collection('users').doc(result.user.uid);
        const postsRef = db.collection('defaultPosts').doc('posts');
        postsRef.get().then((doc) => {
          setDefaultPosts(doc.data());
        }).catch((error) => {
          console.log(error);
        })

        userRef.get().then((doc) => {
          const data = doc.data();
          if (!doc.exists) {
            userRef.set({
              userPhoto: result.user.photoURL,
              userName: result.user.displayName,
              userBio: '',
              posts: [],
            });
            dispatch(
              updateUser({
                userPhoto: result.user.photoURL,
                userName: result.user.displayName,
                userBio: '',
                posts: [],
              })
            )
            localStorage.setItem('userMetanoeo', JSON.stringify({
              userPhoto: result.user.photoURL,
              userName: result.user.displayName,
              userBio: '',
              posts: [],
            }));
          } else {
            dispatch(
              updateUser({
                userPhoto: result.user.photoURL,
                userName: result.user.displayName,
                userBio: data.bio,
                posts: data.posts,
              })
            )
            localStorage.setItem('userMetanoeo', JSON.stringify({
              userPhoto: result.user.photoURL,
              userName: result.user.displayName,
              userBio: '',
              posts: data.posts,
            }));
          }

        })
        history.push("/");
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <SignInDiv>
        <Logo src="https://imgur.com/WGXVyuA.png" />
        <Text>Have an accout? Sign up/Sign in with your Google account! </Text>
        <SignInBtn onClick={signIn}>Sign-up/Sign-in</SignInBtn>
      </SignInDiv>
    </Container>
  )
}

export default SignIn

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: hsla(18, 76%, 85%, 1);
  background: linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F6CFBE", endColorstr="#B9DCF2", GradientType=1 );
`

const SignInDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  max-width: 400px;
  border-radius: 15px;
`
const Logo = styled.img`
  background-color: black;
`
const Text = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-weight: 400;
`
const SignInBtn = styled.button`
  background-color: black;
  color: white;
  padding: 12px 0;
  border: 1px solid black;
  border-radius: 30px;
  font-size: 20px;
`