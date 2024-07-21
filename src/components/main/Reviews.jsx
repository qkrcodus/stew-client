import React from 'react'
import styled from 'styled-components';
import ReviewList from './ReviewList';

const ReviewContainer=styled.div`
    position: absolute;
    top: 294.8rem;
    h1{
    font-size: 5.4rem;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-semibold);
    color: var(--font-color-sub);
    margin-left: 39.7rem;
    margin-bottom: 5.3rem;
    line-height: 1.2;
    }
    p{
    font-size: 2.8rem;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-medium);
    color: var(--font-color-sub);
    margin-left: 39.7rem;
    line-height: 1.2;
    }
`
const Reviewwrapper=styled.div`
    display: flex;
    gap: 13.8rem;
    .review-title-subtitle
    {
    margin-top:28.6rem;
    }
  `
const Reviews = () => {
  return (
    <ReviewContainer>
    <Reviewwrapper>
    <div className='review-title-subtitle'>
      <h1>스튜와 함께한<br/>유저들의 이야기</h1>
      <p>스튜와 열심히 운동하고 있는<br/>유저들의 생생한 후기를<br/>만나보세요</p>
    </div>
    <ReviewList/>
    </Reviewwrapper>
    </ReviewContainer>
  )
}

export default Reviews