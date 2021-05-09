import React from 'react'
import styled from 'styled-components'

function Post() {
  return (
    <Container>
      <TopDiv>
        <UserInfo>
          <UserPhoto src="https://imgur.com/oWr9MTw.png" />
          <UserName>Not Your Dev</UserName>
        </UserInfo>
        <OptionThingy>&gt;</OptionThingy>
      </TopDiv>
      <PostImg src="https://imgur.com/k6gQm6y.png" />
      <BottomDiv>
        <Like>Like</Like>
        <Comment>Comment</Comment>
        <Share>Share</Share>
      </BottomDiv>
      <Description>
        <DescUser>Not Your Dev</DescUser>
        This is the description for the awesome picture above.
      </Description>
    </Container>
  )
}

export default Post

const Container = styled.div`
  width: 100%;
`

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px;
`

const UserInfo = styled.div`
  display: flex;
`

const UserPhoto = styled.img`
  height: 50px;
  border-radius: 50%;
`

const UserName = styled.p`
  padding-left: 10px;
`
const OptionThingy = styled.p`
  margin-right: 17px;
`

const PostImg = styled.img`
  width: 100%;
  object-fit: cover;
`

const BottomDiv = styled.div`
  display: flex;
  margin: -10px 0 -10px 0;
`

const Like = styled.p`
  padding: 10px;
`
const Comment = styled.p`
  padding: 10px;
`
const Share = styled.p`
  padding: 10px;
`

const Description = styled.p`
  padding-bottom: 25px;
  border-bottom: 1px solid gray;
  margin: 0;
`

const DescUser = styled.span`
  font-weight: bold;
  font-size: 1.05em;
  padding: 0 9px 0 10px;
`