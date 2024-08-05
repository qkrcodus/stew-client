import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const StyledBox = styled.div`
  height: 52.8rem;
  width: 46.3rem;

  & .group {
    height: 52.8rem;
  
    width: 47.1rem;
  }

  & .overlap {
    height: 52.8rem;
    position: relative;
    width: 46.3rem;
  }

  & .rectangle {
    background-color: #6ba6ffcc;
    border-radius: 5rem;
    box-shadow: 0px 0px 2rem #333e5e4c;
    height: 46.3rem;
    left: -3.2rem;
    position: absolute;
    top: 3.2rem;
    transform: rotate(-90deg);
    width: 52.8rem;
  }

  & .image {
    background-color: #d9d9d9;
    border-radius: 3rem;
    height: 15.3rem;
    left: 17.5rem;
    position: absolute;
    top: 2.2rem;
    width: 11.3rem;
    background-size: cover;
    background-position: center;
  }

  & .overlap-group-wrapper {
    height: 4.6rem;
    left: 25.6rem;
    position: absolute;
    top: 19.6rem;
  
  }

  & .overlap-group {
    background-color: #ffffff;
    border-radius: 3rem;
    height: 4.6rem;
    position: relative;
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .text-wrapper {
    color: #333e5e;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
  }

  & .div {
    color: #ffffff;
    font-family:  var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: 700;
    height: 3rem;
    left: 18rem;
    transform: translateX(-50%);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 20.4rem;
    white-space: nowrap;
    width: 12.8rem;
  }

  & .text-wrapper-2 {
    color: #ffffff;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: 700;
    height: 3rem;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 46.3rem;
    white-space: nowrap;
    width: 26.6rem;
  }

  & .element {
    color: #0d2d4b;
    font-family:  var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: 500;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 26.1rem;
    width: 35.7rem;
  }

  & .p {
    color: #0d2d4b;
    font-family:  var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: 500;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 37.8rem;
    width: 35.7rem;
  }

  & .line {
    height: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    object-fit: cover;
    position: absolute;
    top: 36.8rem;
    width: 37.9rem;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

.swiper-scrollbar {
    display: none; 
  }
.swiper-slide-shadow-right {
  background-color: #6ba6ffcc;
}

.swiper-slide-shadow-left {
  background-color: #6ba6ffcc;
}

`;



const Box = ({ tutor }) => {
  const formattedCareer = tutor.career.split(',').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
  const introText = tutor.intro.length > 28 ? `${tutor.intro.substring(0, 28)}...` : tutor.intro;

  return (
    <StyledBox>
      <div className="group">
        <div className="overlap">
          <div className="rectangle" />
          <div className="image" style={{ backgroundImage: `url(${tutor.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">{tutor.sportName}</div>
            </div>
          </div>
          <div className="div">{tutor.name} 튜터</div>
          <div className="text-wrapper-2">시간당 {tutor.price}원~</div>
          <p className="element">
            {tutor.location}
            <br />
            {formattedCareer}
          </p>
          <p className="p">{introText}</p>
          <img className="line" alt="Line" src="https://c.animaapp.com/fhGGeiFx/img/line-9.svg" />
        </div>
      </div>
    </StyledBox>
  );
};

const Carousel = () => {


    const [todayTutors, setTodayTutors] = useState([]);
  
    useEffect(() => {
      const fetchTodayTutors = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/tutors/today-tutor`);
          setTodayTutors(response.data.data);
        } catch (error) {
          console.error('오늘의 튜터 데이터를 불러오지 못했습니다.', error);
        }
      };
      fetchTodayTutors();
    }, []);
  
    return (
      <CarouselContainer>
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
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
          style={{ width: '70%', paddingTop: '2rem', paddingBottom: '4rem' }}
        >
          {todayTutors.map((tutor) => (
            <SwiperSlide 
            style={{display: 'flex', justifyContent: 'center'}}key={tutor.tutorId}>
              <Box tutor={tutor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    )
  }
  
  export default Carousel;
