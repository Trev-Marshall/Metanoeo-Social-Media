import React from 'react'
import styled from 'styled-components'
import PostBlock from './PostBlock'

function User() {
  return (
    <Container>
      <TopContainer>
        <UserPhoto src="https://imgur.com/oWr9MTw.png" />
        <UserName>Not Your Dev</UserName>
      </TopContainer>
      <MidContainer>
        <FollowStats>Followers: 103 || Following: 15</FollowStats>
      </MidContainer>
      <Bio>I make web applications that are better than everyone else's</Bio>
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