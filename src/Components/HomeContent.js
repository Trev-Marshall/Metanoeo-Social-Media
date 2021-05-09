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
        <SideBarDiv>
          <Updates />
          <NewResources />
        </SideBarDiv>
      </SideBar>
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
`

const SideBarDiv = styled.div`
  position: sticky;
  top: 70px;
  background-color: #f0f4f5;
`