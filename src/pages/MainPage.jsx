import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import RecommendedSport from '../components/RecommendedSport'
import TodayTutor from '../components/TodayTutor'
import Advertisement from '../components/Advertisement'
import Reviews from '../components/Reviews'
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