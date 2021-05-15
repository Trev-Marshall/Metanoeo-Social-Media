import React from 'react'
import styled from 'styled-components'
import PostBlock from './PostBlock'
import { selectFollowers, selectFollowing, selectUserBio, selectUserName, selectUserPhoto, updateUser } from '../Features/signInSlice'
import { useSelector } from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings'
import { useHistory } from 'react-router'

function User() {
  let userPhoto = useSelector(selectUserPhoto);
  let followers = useSelector(selectFollowers);
  let following = useSelector(selectFollowing);
  let userName = useSelector(selectUserName);
  let bio = useSelector(selectUserBio);

  const history = useHistory();

  return (
    <Container>
      <TopContainer>
        <UserPhoto src={userPhoto} />
        <UserName>{userName}</UserName>
        <SettingsIcon onClick={() => history.push('/settings')} />
      </TopContainer>
      <MidContainer>
        <FollowStats>Followers: {followers} || Following: {following}</FollowStats>
      </MidContainer>
      <Bio>{bio}</Bio>
      <PostContainer>
        <PostBlock />
        <PostBlock />
        <PostBlock />
        <PostBlock />
        <PostBlock />
        <PostBlock />
      </PostContainer>
    </Container>
  )
}

export default User

const Container = styled.div`
  padding-top: 80px; 
  width: 60%;
  margin: 0 auto;
`

const UserPhoto = styled.img`
  height: 100px;
  border-radius: 50%;
  width: 100px;
`

const UserName = styled.h1`
  font-size: 26px;
  font-weight: bold;
  flex: 1;
  align-self: flex-end;
  text-align: right;
  margin-bottom: 0;
`

const FollowStats = styled.h2`
  font-size: 17px;
  flex: 1;
  opacity: .5;
`

const Bio = styled.p`
  text-align: right;
  margin-bottom: 27px;
`

const PostContainer = styled.div`
  display: grid;
  height: 500px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px;
  border-top: 1px solid gray;
`

const TopContainer = styled.div`
  display: flex;
`

const MidContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
`