import React from 'react'
import styled from 'styled-components'

function NotifDropdown({ notifModal, setNotifModal }) {
  return (
    <>
      {notifModal &&
        <Container>
          <Paragraph>
            You have no new notifications
          </Paragraph>
          <Button onClick={() => {
            setNotifModal(false)
            console.log(notifModal)
          }}>Dismiss</Button>
        </Container>
      }
    </>
  )
}

export default NotifDropdown

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 9px;
  margin-top: 23px;
  left: -77px;
  font-size: 12px;
  width: 200px;
  height: 200px;
`
const Paragraph = styled.p`
`

const Button = styled.button`
  border: 1px solid lightgray;
`