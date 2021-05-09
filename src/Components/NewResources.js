import React from 'react'
import styled from 'styled-components'
import UpdateTitle from './UpdateTitle'

function NewResources() {
  return (
    <Container>
      <Heading>New Resources</Heading>
      <UpdateTitle />
      <UpdateTitle />
      <UpdateTitle />
      <UpdateTitle />
    </Container>
  )
}

export default NewResources

const Container = styled.div`
  margin: 10px;
`

const Heading = styled.h2`
  font-size: 23px;
  text-decoration: underline;
`