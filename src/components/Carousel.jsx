import React from 'react'
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    const reviews=[
        {
            id: 1,
            name: '김재식',
            age: '31세',
            rating: 5,
            comment: '코치님의 전문적인 지도 덕분에 운동에 대한 자신감이 생겼어요. 정말 감사합니다!',
          },
          {
            id: 2,
            name: '박소영',
            age: '29세',
            rating: 4,
            comment: '운동을 시작하고 나서 체력이 많이 좋아졌어요. 좋은 경험이었어요!',
          },
          {
            id: 3,
            name: '이준혁',
            age: '27세',
            rating: 5,
            comment: '트레이너님 덕분에 운동에 재미를 붙이게 되었어요. 너무 좋아요!',
          },
          {
            id: 4,
            name: '최민지',
            age: '26세',
            rating: 5,
            comment: '운동 프로그램이 체계적이고 효과적이에요. 정말 추천합니다!',
          },
    ]
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div style={{ padding: '20px', background: '#d0e5ff', borderRadius: '10px', textAlign: 'left' }}>
            <h3>{review.name}, {review.age}</h3>
            <div>{'★'.repeat(review.rating)}</div>
            <p>{review.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel