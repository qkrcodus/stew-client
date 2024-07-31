import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Modal from '../modal/Modal'
import { sentapplication } from '../../data/sentapplication'
import { tutorData } from '../../data/tutordata'
import { useNavigate } from 'react-router-dom';
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
  div:nth-child(3) {
  color: #A6A6A6;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  left: 28.7rem;
  top: 7rem;
  position: absolute;
  }
  div:nth-child(4) {
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  left: 42.4rem;
  top: 7rem;
  position: absolute;
  }
  div:nth-child(5) {
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  left: 56.8rem;
  top: 7rem;
  position: absolute;
  font-weight: 700;
  }
  div:nth-child(6) {
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  border-radius: 3rem;
  border: 0.2rem solid #606575;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  left: 102.6rem;
  top: 6.5rem;
  position: absolute;
  width: 14.1rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  div:nth-child(7) {
  flex-shrink: 0;
  color: var(--Sub-Color, #333E5E);
  width: 12.9rem;
  font-family: var(--font-family-pretendard);
  font-size: 28px;
  color: #A6A6A6;
  text-align: right;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  left: 121.4rem;
  top: 7rem;
  position: absolute;
  }
  
`
const SentApplicationsList = () => {
  const [isModalOpen,setModalOpen]=useState(false);
  const closeModal= () => setModalOpen(false);
  return (
    <SentApplicationsContainer>
      {sentapplication.map((data,index)=>(
         <SentApplication key={index} onClick={()=>{setModalOpen(true)}}>
         <div></div>
         <div></div>
         <div>튜터명</div>
         <div>{data.nickname}</div>
         <div>{data.messageToTutor}</div>
         <div>수락대기</div>
         <div>{data.date}</div>
         </SentApplication>
      ))}
    <Modal data={tutorData} isOpen={isModalOpen} closeModal={closeModal}/>
    </SentApplicationsContainer>
  )
}

export default SentApplicationsList