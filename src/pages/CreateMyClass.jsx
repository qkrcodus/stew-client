import React, { useState } from 'react';
import styled from 'styled-components';
import LeftForm from '../components/createmyclass/LeftForm';
import RightForm from '../components/createmyclass/RightForm';
import HeaderForPages from '../components/HeaderForPages';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const CreateMyClassContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 216rem;
`;

const SignupBtn = styled.button`
  width: 18.7rem;
  height: 5.9453rem;
  border: 0.3rem solid #333e5e;
  border-radius: 4rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Sub-Color, #333e5e);
  font-family: Pretendard;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  top: 166rem;
  right: 26.8rem;
  background: none;
  cursor: pointer;
`;

const CreateMyClass = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    sportsid: '',
    price: '',
    career: '',
    intro: '',
    selfintro: '',
    sportsintro: '',
    profile: null,
    portfolio: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile' || name === 'portfolio') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? Array.from(files) : value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    const requestDto = {
      gender: formData.gender,
      price: Number(formData.price),
      name: formData.name,
      sportsintro: formData.sportsintro,
      intro: formData.intro,
      location: formData.location,
      selfintro: formData.selfintro,
      sportsid: Number(formData.sportsid),
      career: formData.career,
      age: Number(formData.age),
    };
    //formdata객체 생성후 json 문자열로 변환해서 객체에 추가
    const requestData = new FormData();
    requestData.append('requestDto', JSON.stringify(requestDto));

    console.log('Request DTO 잘 출력되나', requestDto); // 잘됨 
    if (formData.profile) {
      requestData.append('profile', formData.profile[0]);
    }

    if (formData.portfolio.length > 0) {
      formData.portfolio.forEach((file) => {
        requestData.append('portfolio', file);
      });
    }
    console.log('이미지 포함된 Request DTO 잘 출력되나', requestDto); 
    

    try {
      
      const userId = 1; // 임의로 설정
      console.log('Sending request to:', `${BASE_URL}/tutors/${userId}`);//출력됨
      const response = await axios.post(
        `${BASE_URL}/tutors/${userId}`,
        requestData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
             accept: 'application/json'
          },
         
        }
      );
   
      console.log('try문 출력:', response.data);
      alert('게시글 등록에 성공하였습니다.')
  
    } catch (error) {
      if (error.response) {
        console.log('튜터 등록하는데 실패했습니다 (서버 응답):', error.response.data);
        alert(`서버 응답 에러: ${error.response.data.message}`);
      } else {
        console.log('튜터 등록하는데 실패했습니다:', error.message);
        alert(`에러 메시지: ${error.message}`);
      }
    }
  };

  return (
    <CreateMyClassContainer>
      <HeaderForPages forPostManagement={true} />
      <form onSubmit={handleSubmit}>
        <LeftForm formData={formData} handleChange={handleChange} />
        <RightForm formData={formData} handleChange={handleChange} />
        <SignupBtn type="submit">등록하기</SignupBtn>
      </form>
    </CreateMyClassContainer>
  );
};

export default CreateMyClass;
