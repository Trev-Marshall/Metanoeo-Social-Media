import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectUserName } from '../Features/signInSlice'

function Post({ item }) {
  const username = useSelector(selectUserName);

  return (
    <Container>
      <TopDiv>
        <UserInfo>
          <UserPhoto src="https://imgur.com/oWr9MTw.png" />
          <UserName>{username}</UserName>
        </UserInfo>
        <OptionThingy>&gt;</OptionThingy>
      </TopDiv>
      <PostImg src={item?.photo} />
      <BottomDiv>
        <Like>Like</Like>
        <Comment>Comment</Comment>
        <Share>Share</Share>
      </BottomDiv>
      <Description>
        <DescUser>{username}</DescUser>
        {item?.caption}
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
  align-items: center;
`

const UserInfo = styled.div`
  display: flex;
`

const UserPhoto = styled.img`
  height: 50px;
  border-radius: 50%;
  width: 50px;
`

const UserName = styled.p`
  padding-left: 10px;
`
const OptionThingy = styled.p`
  margin: 0 17px 0 0;
  font-size: 20px;
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
  cursor: pointer;
`
const Comment = styled.p`
  padding: 10px;
  cursor: pointer;
`
const Share = styled.p`
  padding: 10px;
  cursor: pointer;
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
  color: black;
`