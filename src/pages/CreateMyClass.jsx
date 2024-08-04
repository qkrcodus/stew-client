// CreateMyClass.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftForm from '../components/createmyclass/LeftForm';
import RightForm from '../components/createmyclass/RightForm';
import HeaderForPages from '../components/HeaderForPages';
import axios from 'axios';

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
    type: '',
    price: '',
    experience: '',
    introduction: '',
    bio: '',
    sports_intro: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      gender: formData.gender,
      price: Number(formData.price),
      name: formData.name,
      sports_intro: formData.sports_intro,
      intro: formData.introduction,
      location: formData.location,
      self_intro: formData.bio,
      sports_id: Number(formData.type),
      career: formData.experience,
      age: Number(formData.age),
    };

    try {
      const userId = 1; // 임의로 설정
      const response = await axios.post(
        `${BASE_URL}/tutors/${userId}`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json', // Content-Type을 설정
          },
        }
      );
      console.log('보낼 데이터:', response.data);
    } catch (error) {
      console.error('튜터 등록하는데 실패했습니다:', error);
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
