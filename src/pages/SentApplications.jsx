import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import Navbar1 from '../components/sentapplications/Navbar1'
import styled from 'styled-components'
import SentApplicationsList from '../components/sentapplications/SentApplicationsList.jsx'
const SentApplicationsContainer=styled.div`
    width: 155.4rem;
    height: 153.9rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.1rem solid var(--Main-Color, #6BA6FF);
    background: #FFF;
    box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.30);
    position: absolute;
    top: 34rem;
    right: 18.3rem;
`
const SentApplications = () => {
  return (
    <>
    <HeaderForPages forSentApplications={true}/>
    <SentApplicationsContainer>
    <Navbar1/>
    <SentApplicationsList/>
    </SentApplicationsContainer>
    </>
  )
}

export default SentApplications