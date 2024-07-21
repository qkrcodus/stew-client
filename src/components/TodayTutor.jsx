import React from 'react'
import styled from 'styled-components';
import Carousel from './Carousel';

const Container=styled.div`
  position: absolute;
  top: 146rem;
`
const Title=styled.h2`
  font-size: 5.4rem;
  font-family: var(--font-family-pretendard);
  font-weight: var(--font-weight-semibold);
  color: var(--font-color-sub);
  margin-bottom: 2.9rem;
  margin-left: 39.7rem;
`
const Subtitle=styled.p`
  font-size: 2.8rem;
  font-family: var(--font-family-pretendard);
  font-weight: var(--font-weight-medium);
  color: var(--font-color-sub);
  margin-bottom: 8.3rem;
  margin-left: 39.7rem;
`
const reviews = [
  {
    src: 'image1.png',
    title: '김승실 튜터',
    location: '서울시 성북구',
    experience: '헬스 5년차',
    description: '2개월 동안 10kg 감량\n강박 없이! 스트레스 없이!\n재미있게 운동 시작해봐요~'
  },
  {
    src: 'image1.png',
    title: '박승실 튜터',
    location: '서울시 성북구',
    experience: '헬스 5년차',
    description: '2개월 동안 10kg 감량\n강박 없이! 스트레스 없이!\n재미있게 운동 시작해봐요~'
  },
  {
    src: 'image1.png',
    title: '최승실 튜터',
    location: '서울시 성북구',
    experience: '헬스 5년차',
    description: '2개월 동안 10kg 감량\n강박 없이! 스트레스 없이!\n재미있게 운동 시작해봐요~'
  },
];
const TodayTutor = () => {
  return (
  <Container>
    <Title>유저들의 픽! 오늘의 튜터</Title>
    <Subtitle>8월 7일 오늘 가장 인기가 많은 튜터들이에요</Subtitle>
    <Carousel/>
  </Container>
   
  )
}

export default TodayTutor