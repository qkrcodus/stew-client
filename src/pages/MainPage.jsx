import React from 'react'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import Categories from '../components/main/Categories'
import RecommendedSport from '../components/main/RecommendedSport'
import TodayTutor from '../components/main/TodayTutor'
import Advertisement from '../components/main/Advertisement'
import Reviews from '../components/main/Reviews'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MainPageContainer=styled.div`
  width: 100vw;
  height: 508.6rem;
  box-sizing: border-box;
  position: relative;
`;

const MainPage = () => {
  const navigate = useNavigate();

  const handleSportSelect = (id) => {
    navigate('/findtutor', { state: { sportsId: id } });
    console.log(id); // 운동 id 잘 출력됨
  };

  return (
    <MainPageContainer>
    <Header/>
    <Categories onSportSelect={handleSportSelect}/>
    <TodayTutor/>
    <Advertisement/>
    <Reviews/>
    <RecommendedSport onSportSelect={handleSportSelect}/>
    <Footer/>
    </MainPageContainer>
  )
}

export default MainPage