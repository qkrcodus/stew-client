import React, { useState } from 'react'
import styled from 'styled-components'
import LeftForm from '../components/createmyclass/LeftForm'
import RightForm from '../components/createmyclass/RightForm'
import HeaderForPages from '../components/HeaderForPages'
import axios from 'axios';

// 제출하는 폼은 lEFTFORM RIGHTFORM 으로 분리해둠
// const BASE_URL=import.meta.env.VITE_BASE_URL;
const CreateMyClassContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 216rem;
`
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
top: 166rem;
right: 26.8rem;
`

const CreateMyClass = () => {
  const [error,setError]=useState(null);
  // const handleSubmit= async(e)=>{
  //   e.preventDefault();
  //   setError(null);
  //   try{
  //     const response=await axios.post(`${BASE_URL}/tutors/{user_id}`)
  //   }
  // }
  return (
    <CreateMyClassContainer>
        <HeaderForPages  forPostManagement={true}/>
        <form onSubmit={handleSubmit}>
          <LeftForm/>
          <RightForm/>
        </form>
    <SignupBtn>
        등록하기
    </SignupBtn>
    </CreateMyClassContainer>
  )
}

export default CreateMyClass