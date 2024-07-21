import React from 'react'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import Categories from '../components/main/Categories'
import RecommendedSport from '../components/main/RecommendedSport'
import TodayTutor from '../components/main/TodayTutor'
import Advertisement from '../components/main/Advertisement'
import Reviews from '../components/main/Reviews'
import styled from 'styled-components'

const MainPageContainer=styled.div`
  width: 100vw;
  height: 508.6rem;
  box-sizing: border-box;
  position: relative;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
    <Header/>
    <Categories/>
    <TodayTutor/>
    <Advertisement/>
    <Reviews/>
    <RecommendedSport/>
    <Footer/>
    </MainPageContainer>
  )
}

export default MainPage