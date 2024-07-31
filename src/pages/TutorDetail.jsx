import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { tutorData } from '../data/tutordata'
import stars from '../assets/images/star-fill.png';
import LeftInfo from '../components/findTutor/LeftInfo'
import RightInfo from '../components/findTutor/RightInfo'
import ModalForm from '../components/modal/ModalForm'
import { useState } from 'react'
const TutorDetailContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 216rem;
`
const TutorThumbnail=styled.div`
    position: absolute;
    top: 35.5rem;
    display: flex;
    gap: 3.9rem;
    width: 92.7rem;
    height: 15.8rem;
    flex-shrink: 0;
    border-top: 0.3rem solid var(--Main-Color, #6BA6FF);
    border-bottom: 0.3rem solid var(--Main-Color, #6BA6FF);
    justify-content: center;
    align-items: center;
    div{
    color: var(--Sub-Color, #333E5E);
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    }
`
const TutorImg=styled.div`
    width: 9.7rem;
    height: 10.7rem;
    flex-shrink: 0;
    background: #D9D9D9;
`
const RatingImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const Space = styled.span`
    margin-left: 2rem; 
`;
const SignupBtn=styled.div`
width: 18.7rem;
height: 5.9453rem;
border: 0.3rem solid #333E5E;
border-radius: 4rem;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
color: var(--Sub-Color, #333E5E);
font-family: Pretendard;
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 177.4rem;
right: 26.8rem;
`

const TutorDetail = () => {
  const {id}=useParams();
  const tutor=tutorData.find(t=>t.id===parseInt(id));
  const [isModalOpen,setModalOpen]=useState(false);
  const closeModal= () => setModalOpen(false);
  return (
    <TutorDetailContainer>
    <HeaderForPages/>
    <TutorThumbnail>
        <TutorImg/>
        <div>
            <div>{tutor.name} / {tutor.type}
            <Space />
                {Array.from({ length: tutor.rating }, (_, index) => (
                <RatingImage key={index} src={stars} alt="stars" />
                ))} ({tutor.reviewNum})
            </div>
            <div>{tutor.introduction}</div>
            <div>{tutor.price}</div>
        </div>
    </TutorThumbnail>
    <LeftInfo data={tutorData}/>
    <RightInfo data={tutorData}/>
    <SignupBtn onClick={()=>{setModalOpen(true)}}>
        신청하기
    </SignupBtn>
    <ModalForm data={tutorData} isOpen={isModalOpen} closeModal={closeModal}/>
    </TutorDetailContainer>
  )
}

export default TutorDetail