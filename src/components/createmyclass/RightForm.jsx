import React, { useState } from 'react';
import styled from 'styled-components';

const RightFormContainer = styled.div`
  position: absolute;
  top: 45.4rem;
  right: 26.8rem;
`;

const TutorDetailContainerRight = styled.div`
  position: relative;
  border-radius: 1rem;
  border: 0.1rem solid #6BA6FF;
  background: #FFF;
  box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.3);
  width: 66.7rem;
  height: 116.3rem;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const GymIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 10.2rem;
  left: 3.8rem;
  width: 58.9rem;
  height: 35.1rem;
  flex-shrink: 0;
  border: 0.2rem solid #D9D9D9;
  h3 {
    position: absolute;
    top: -1.6rem;
    left: 2.7rem;
    background: white;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 12.1rem;
    height: 3.1rem;
    padding: 0px 0.7rem;
    justify-content: center;
    align-items: center;
  }
  textarea {
    height: 40rem;
    padding: 3.7rem;
    box-sizing: border-box;
    resize: none;
    border: none;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  textarea:focus {
    outline: none;
  }
`;

const Portfolio = styled.div`
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  top: 58.2rem;
  left: 3.8rem;
  width: 58.9rem;
  height: 40.2rem;
  flex-shrink: 0;
  border: 0.2rem solid #D9D9D9;
  h3 {
    position: absolute;
    top: -1.6rem;
    left: 2.7rem;
    background: white;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 15rem;
    height: 3.1rem;
    padding: 0px 0.7rem;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 14.4rem;
    height: 14.4rem;
    flex-shrink: 0;
    background: #D9D9D9;
     position: relative;
    overflow: hidden;
    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const CharCount = styled.div`
  color: #A6A6A6;
  text-align: right;
  font-family: var(--font-family-pretendard);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 31.5rem;
  left: 48.6rem;
`;

const RightForm = ({ formData, handleChange }) => {
  return (
    <RightFormContainer>
      <TutorDetailContainerRight>
        <GymIntro>
          <h3>운동소개</h3>
          <textarea
            name="sports_intro"
            value={formData.sports_intro}
            onChange={handleChange}
            maxLength={140}
            placeholder="운동소개 글을 입력해주세요"
          />
          <CharCount>{formData.sports_intro.length}/300</CharCount>
        </GymIntro>
        <Portfolio>
        <h3>포트폴리오</h3>
        {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <input
                type="file"
                name="portfolio"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.portfolio && formData.portfolio[index] && (
                <img
                  src={URL.createObjectURL(formData.portfolio[index])}
                  alt={`포트폴리오 ${index + 1}`}
                />
              )}
            </div>
          ))}
        </Portfolio>
      </TutorDetailContainerRight>
    </RightFormContainer>
  );
};

export default RightForm;
