import React from 'react'
import styled from 'styled-components';
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.png';
import img6 from '../../assets/images/6.png';
import img7 from '../../assets/images/7.png';
import { useState } from 'react';
const IconListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconImage = styled.img`
  padding: 3.4rem 0;
  width: 11rem;
  height: 11rem;
`;

const IconLabel = styled.p`
  font-family: var(----font-family-pretendard);
  font-size: 2.8rem;
  font-weight: var(--font-weight-bold);
  line-height: normal;
  color: var(--font-color-sub);
`;

const Categories = ({ onSportSelect }) => {
  const icons = [
    { src: img1, label: '헬스', id: 9 },
    { src: img2, label: '요가', id: 10 },
    { src: img3, label: '필라테스', id: 11 },
    { src: img4, label: '클라이밍', id: 16 },
    { src: img5, label: '사이클', id: 14 },
    { src: img6, label: '테니스', id: 6 },
    { src: img7, label: '더보기' },
  ];

  return (
    <IconListContainer>
      {icons.map((icon, index) => (
        <IconItem key={index} onClick={() => onSportSelect(icon.id)}>
          <IconImage src={icon.src} alt={icon.label} />
          <IconLabel>{icon.label}</IconLabel>
        </IconItem>
      ))}
    </IconListContainer>
  );
};

export default Categories;
