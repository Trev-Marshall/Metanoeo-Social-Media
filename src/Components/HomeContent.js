import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import Updates from './Updates'
import NewResources from './NewResources'

function HomeContent() {
  return (
    <Container>
      <PostSection>
        <Post />
        <Post />
      </PostSection>
      <SideBar>
        <Updates />
        <NewResources />
      </SideBar>
    </Container>
  )
}

export default HomeContent

const Container = styled.div`
  padding: 10px;
  display: flex;
  position: relative;
`

const PostSection = styled.div`
  background-color: #f0f4f5;
  margin: 0 20px 0 100px;
  width: 50%;
  border-radius: 10px;
`

const SideBar = styled.div`
  background-color: #f0f4f5;
  margin: 0 0 0 auto;
  width: 20%;
`