import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import Navbar2 from '../components/receivedapplications/Navbar2'
import styled from 'styled-components'
import ReceivedApplicationsList from '../components/receivedapplications/ReceivedApplicationsList'
const ReceivedApplicationsContainer=styled.div`
    width: 155.4rem;
    height: 153.9rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.1rem solid var(--Main-Color, #6BA6FF);
    background: #FFF;
    box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.30);
    position: absolute;
    top: 18.9rem;
    right: 18.3rem;
`
const ReceivedApplications = () => {
  return (
    <>
      <HeaderForPages forReceivedApplications={true} />
      <ReceivedApplicationsContainer>
      <Navbar2/>
      <ReceivedApplicationsList/>
      </ReceivedApplicationsContainer>
    </>
  )
}

export default ReceivedApplications
