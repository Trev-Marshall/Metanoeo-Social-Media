import React from 'react'
import styled from 'styled-components'

function UpdateTitle() {
  return (
    <Title>
      This is a new story from your...
    </Title>
  )
}

export default UpdateTitle

const Title = styled.h2`
  font-size: 14px;
  color: gray;
`