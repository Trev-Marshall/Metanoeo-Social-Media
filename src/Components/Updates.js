import React from 'react'
import styled from 'styled-components'

function Updates() {
  return (
    <Container>
      <Heading>Updates</Heading>
      <Title>
        eLearning Brothers releases Lectora Desktop 21
      </Title>
      <Title>
        Login VSI launches new elearning platform
      </Title>
      <Title>
        Elearning market $370 Bn plus by 2026
      </Title>
      <Title>
        eLearning Courses From Open LMS Support Staff Well-Being and Celebrate Mental Health Month
      </Title>
      <Title>
        Applying VR-Delivered Learning to the Energy Decommissioning Sector
      </Title>
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

const Title = styled.h3`
  font-size: 14px;
  color: gray;
  cursor: pointer;
  $:hover {
    opacity: .5;
  }
`