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

const MainPageContainer=styled.div`
  width: 100vw;
  height: 508.6rem;
  box-sizing: border-box;
  position: relative;
`;

const MainPage = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const handleSportSelect = (id) => {
    setSelectedSport(id);
    // 필요한 경우 추가 작업 수행
  };
  return (
    <MainPageContainer>
    <Header/>
    <Categories onSportSelect={handleSportSelect}/>
    <TodayTutor/>
    <Advertisement/>
    <Reviews/>
    <RecommendedSport/>
    <Footer/>
    </MainPageContainer>
  )
}

export default MainPage