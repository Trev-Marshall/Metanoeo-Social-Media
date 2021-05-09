import React from 'react'
import styled from 'styled-components'

function PostBlock() {
  return (
    <Container>
      <BlockImg src="https://imgur.com/k6gQm6y.png" />
    </Container>
  )
}

export default PostBlock

const Container = styled.div`

`

const BlockImg = styled.img`
  height: 200px;
  width: 100%;
`