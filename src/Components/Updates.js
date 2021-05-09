import React from 'react'
import UpdateTitle from './UpdateTitle'
import styled from 'styled-components'

function Updates() {
  return (
    <Container>
      <Heading>Updates</Heading>
      <UpdateTitle />
      <UpdateTitle />
      <UpdateTitle />
      <UpdateTitle />
      <UpdateTitle />
    </Container>
  )
}

export default Updates

const Container = styled.div`
  margin: 10px;
`
const Heading = styled.h2`
  font-size: 23px;
  text-decoration: underline;
`