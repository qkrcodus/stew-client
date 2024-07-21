import React from 'react';
import styled from 'styled-components';
import taekwondo from '../assets/images/taekwondo.png';
import archery from '../assets/images/archery.png';
import surfing from '../assets/images/surfing.png';
import fencing from '../assets/images/fencing.png';
import figureSkating from '../assets/images/figureSkating.png';
import weightlifting from '../assets/images/weightlifting.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 390.9rem;
`

const Title = styled.h2`
  font-size: 5.4rem;
  font-family: var(--font-family-pretendard);
  font-weight: var(--font-weight-semibold);
  color: var(--font-color-sub);
  margin-bottom: 2.9rem;
  margin-left: 39.7rem;
`;

const Subtitle = styled.p`
  font-size: 2.8rem;
  margin-left: 39.7rem;
  font-family: var(--font-family-pretendard);
  font-weight: var(--font-weight-medium);
  color: var(--font-color-sub);
  margin-bottom: 8.3rem;
`;
const IconListWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center; /* 중앙 정렬 */
`;

const IconListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.3rem; 
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconImage = styled.img`
  width: 9.5rem;
  height: 10em;
  width: 19.1rem;
  height: 19.1rem;
`;

const IconLabel = styled.p`
  font-size: 2.8rem;
  color: var(--font-color-sub);
  font-family: var(--font-family-pretendard);
  margin-top: 4.3rem;
  font-weight: var(--font-weight-bold);
`;
const RecommendedSport = () => {
  const icons=[
    { src: taekwondo, label: '태권도' },
    { src: archery, label: '양궁' },
    { src: surfing, label: '서핑' },
    { src: fencing, label: '펜싱' },
    { src: figureSkating, label: '피겨' },
    { src: weightlifting, label: '역도' },
  ];
  return (
    <Container>
    <Title>2024 파리 올림픽을 맞이하여</Title>
    <Subtitle>이런 특색있는 운동은 어때요?</Subtitle>
    <IconListWrapper>
    <IconListContainer>
      {icons.map((icon, index) => (
        <IconItem key={index}>
          <IconImage src={icon.src} alt={icon.label} />
          <IconLabel>{icon.label}</IconLabel>
        </IconItem>
      ))}
    </IconListContainer>
    </IconListWrapper>
  </Container>
  )
}

export default RecommendedSport