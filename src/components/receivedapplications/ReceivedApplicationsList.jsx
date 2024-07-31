import React from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { mydata } from '../../data/mydata'
import Modal from '../modal/Modal'

const ReceivedApplicationsContainer = styled.div`
  top: 27.2rem;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.7rem;
`;

const MyClassContainer = styled.div`
  position: relative;
  width: 139.5rem;
  height: 50.8rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid #6BA6FF;
  background: #FFF;
  box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.30);
`;

const IconContainer = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 0.3rem solid #606575;
  left: 3.6rem;
  top: 9.4rem;
`;

const GrayBox = styled.div`
  position: absolute;
  width: 13rem;
  height: 14.4rem;
  background: #D9D9D9;
  left: 11.1rem;
  top: 3.5rem;
`;

const ContentContainer = styled.div`
  position: absolute;
  left: 28.5rem;
  top: 7.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  align-items: center;
`;

const TitleText = styled.p`
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DateLabel = styled.p`
  color: #A6A6A6;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DateText = styled.p`
  color:  var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 0 0 3rem;
`;
const SubmittedApplicationsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  
  div:nth-child(1) {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 0.3rem solid #606575;
    margin-left: 11.3rem;
  }

  div:nth-child(2) {
    margin-left: 3rem;
    width: 9.8rem;
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
  }

  div:nth-child(3) {
    margin-left: 8.7rem;
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 43.2rem;
  }

  div:nth-child(4) {
    margin-left: 25.2rem;
    color: #606575;
    text-align: center;
    width: 14.1rem;
    height: 4.2rem;
    flex-shrink: 0;
    border-radius: 3rem;
    border: 0.2rem solid #606575;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(5) {
    margin-left: 4.4rem;
    color: #A6A6A6;
    text-align: right;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`;

const ApplicationsListContainer = styled.div`
  position: absolute;
  top: 20.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ReceivedApplicationsList = () => {
  const [isModalOpen,setModalOpen]=useState(false);
  const closeModal= () => setModalOpen(false);
  return (
    <ReceivedApplicationsContainer>
    {mydata.map((tutor) => (
      <MyClassContainer key={tutor.id}>
        <IconContainer></IconContainer>
        <GrayBox></GrayBox>
        <ContentContainer>
          <TitleText>
          {tutor.introduction}
          </TitleText>
          <InfoContainer>
            <DateLabel>등록 날짜</DateLabel>
            <DateText>{tutor.registereddate}</DateText>
          </InfoContainer>
        </ContentContainer>
        <ApplicationsListContainer>
        {tutor.submittedApplications.map((tuti, index) => (
        <SubmittedApplicationsContainer key={index} onClick={()=>{setModalOpen(true)}}>
            <div></div>
            <div>{tuti.nickname}</div>
            <div>{tuti.title}</div>
            <div>수락대기</div>
            <div>{tuti.date}</div>
        </SubmittedApplicationsContainer>
        ))}
         </ApplicationsListContainer>
      </MyClassContainer>
     ))}
     <Modal data={mydata} isOpen={isModalOpen} closeModal={closeModal}/>
    </ReceivedApplicationsContainer>
  );
};

export default ReceivedApplicationsList;
