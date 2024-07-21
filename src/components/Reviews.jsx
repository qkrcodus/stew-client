import React from 'react'
import styled from 'styled-components';
import ReviewList from './ReviewList';
const ReviewContainer=styled.div`
    position: absolute;
    top: 323.4rem;
    h1{
    font-size: 5.4rem;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-semibold);
    color: var(--font-color-sub);
    margin-left: 39.7rem;
    margin-bottom: 5.3rem;
    }
    p{
    font-size: 2.8rem;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-medium);
    color: var(--font-color-sub);
    margin-left: 39.7rem;
    }
`
const Reviews = () => {
    // const reviews = [
    //     {
    //       id: 1,
    //       name: '신동우',
    //       age: '25세',
    //       rating: 5,
    //       comment: '박재민님의 런닝 클래스 좋아요! 트레이너분의 전문적인 지도가 큰 도움이 되었습니다.',
    //     },
    //     {
    //       id: 2,
    //       name: '고경운',
    //       age: '23세',
    //       rating: 5,
    //       comment: '김슬하님의 요가 클래스에서 많은 도움을 받았습니다. 스트레스도 풀리고 유연성도 좋아졌어요.',
    //     },
    //     {
    //       id: 3,
    //       name: '이지윤',
    //       age: '27세',
    //       rating: 5,
    //       comment: '최재원님의 필라테스 클래스에서 자세 교정을 많이 배웠어요. 강력 추천합니다!',
    //     },
    //     {
    //       id: 4,
    //       name: '오하은',
    //       age: '24세',
    //       rating: 5,
    //       comment: '이사자비님의 테니스 클래스가 아주 유익했어요. 운동 실력도 늘고 재미도 있었어요.',
    //     }
    //   ];
      
  return (
    <ReviewContainer>
    <h1>스튜와 함께한<br/>유저들의 이야기</h1>
    <p>스튜와 열심히 운동하고 있는<br/>유저들의 생생한 후기를<br/>만나보세요</p>
    {/* <div className="testimonials">
      {reviews.map(reviews => (
        <ReviewCard key={reviews.id} {...reviews} />
      ))}
    </div> */}
    <ReviewList/>
    </ReviewContainer>
  )
}

export default Reviews