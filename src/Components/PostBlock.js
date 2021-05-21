import React from 'react'
import styled from 'styled-components'

function PostBlock({ item }) {
  return (
    <Container>
      <BlockImg src={item.photo} />
    </Container>
  )
}

export default PostBlock

const Container = styled.div`

`

const BlockImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`