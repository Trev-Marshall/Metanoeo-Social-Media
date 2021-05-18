import React from 'react'
import styled from 'styled-components'

function NewResources() {
  return (
    <Container>
      <Heading>Newest Resources</Heading>
      <Title>
        Tutorial: Intro to React
      </Title>
      <Title>
        Learn JavaScript | CodeAcademy
      </Title>
      <Title>

        HTML & CSS Courses & Tutorials | Codecademy
      </Title>
      <Title>
        Tutorials - Flutter
      </Title>
      <Title>
        Learn the Basics · React Native
      </Title>
    </Container>
  )
}

export default NewResources

const Container = styled.div`
  margin: 10px;
  padding-bottom: 10px;
`

const Heading = styled.h2`
  font-size: 23px;
  text-decoration: underline;
`

const Title = styled.h3`
  font-size: 14px;
  color: gray;
  cursor: pointer;
`