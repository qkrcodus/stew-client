import React from 'react'
import styled from 'styled-components'
import { sentapplication } from '../../data/sentapplication'
const SentApplicationsContainer=styled.div`
  top: 27.7rem;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`
const SentApplication=styled.div`
position: relative;
width: 139.5rem;
height: 17.4rem;
flex-shrink: 0;
border-radius: 1rem;
border: 0.1rem solid #6BA6FF;
background: #FFF;
box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.30);
  div:nth-child(1) {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 0.3rem solid #606575;
    left: 4rem;
    top: 7.4rem;
    position: absolute;
  }
  div:nth-child(2) {
   width: 13rem;
   height: 14.4rem;
   flex-shrink: 0;
   background: #D9D9D9;
   left: 11.2rem;
   top: 1.5rem;
   position: absolute;
  }
`
const SentApplicationsList = () => {
  return (
    <SentApplicationsContainer>
      {sentapplication.map((data,index)=>(
         <SentApplication key={index}>
         <div></div>
         <div></div>
         <div>튜터명</div>
         <div>{data.title}</div>
         <div>{data.messageToTutor}</div>
         <div>수락대기</div>
         <div>{data.date}</div>
         </SentApplication>
      ))}
       
    </SentApplicationsContainer>
  )
}

export default SentApplicationsList