import React, { useState } from 'react';
import styled from 'styled-components';

const LeftFormContainer = styled.div`
  position: absolute;
  top: 45.4rem;
  left: 26.1rem;
`;

const TutorDetailContainerLeft = styled.div`
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

const TutorThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TutorFirstLine = styled.div`
  display: flex;
  position: absolute;
  top: 9.2rem;
  left: 6.8rem;
  gap: 6.4rem;
  align-items: center;
`;

const TutorSecondLine = styled.div`
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  align-items: center;
  font-weight: 500;
  line-height: normal;
  display: flex;
  gap: 1.7rem;
  position: absolute;
  top: 32rem;
  left: 4.4rem;
  & > div {
    display: flex;
    width: 28rem;
    align-items: center;
    gap: 1.7rem;
  }
  div > div {
  }
  input, select {
    width: 20.4rem;
    height: 5rem;
    background: none;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 3rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
  }
`;

const TutorImg = styled.div`
  width: 19.1rem;  
  height: 19.1rem;
  flex-shrink: 0;
  fill: #F2F3F5;
  box-sizing: border-box;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 44.2rem;
  left: 3.9rem;
  width: 58.9rem;
  height: 24.1rem;
  flex-shrink: 0;
  border: 0.2rem solid #D9D9D9;
  padding: 1rem;
  box-sizing: border-box;
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
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
  & > div:first-child {
    color: #A6A6A6;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & > div:nth-child(2) {
    width: 0.2rem;
    height: 2.5rem;
    background: #A6A6A6;
  }
  & > input, & > select {
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 9.3rem;
    height: 2.5rem;
    border-radius: 1rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
    
    display: flex;
    justify-content: center;

    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 9.3rem;
    height: 2.5rem;
    border-radius: 1rem;
    border: 0.1rem solid

  }
`;

const Intro1 = styled.div`
  & > div:first-child {
    color: var(--Main-Color, #6BA6FF);
    font-family: var(--font-family-pretendard);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    left: 3.9rem;
    top: 2.4rem;
  }
  & > input {
    width: 51.8rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 3rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
    display: flex;
    align-items: center;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 2rem;
    box-sizing: border-box;
    position: absolute;
    top: 6.2rem;
    left: 3.9rem;
  }
`;

const Intro2 = styled.div`
  & > div:first-child {
    color: var(--Main-Color, #6BA6FF);
    font-family: var(--font-family-pretendard);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    left: 3.9rem;
    top: 12.3rem;
  }
  & > input {
    width: 51.8rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 3rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
    display: flex;
    align-items: center;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 2rem;
    box-sizing: border-box;
    position: absolute;
    top: 16.1rem;
    left: 3.9rem;
  }
`;

const BioContainer = styled.div`
  position: absolute;
  top: 74.9rem;
  left: 3.9rem;
  width: 58.9rem;
  height: 31.7rem;
  border: 0.2rem solid #D9D9D9;
  padding: 1rem;
  box-sizing: border-box;
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
    width: 100%;
    height: 30rem;
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
    outline: none;
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
  top: 27.8rem;
  left: 48.6rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 5rem;
  background: var(--Main-Color, #6BA6FF);
  border: none;
  color: white;
  font-family: var(--font-family-pretendard);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const genderOptions = [
  '남자', '여자'
];

const locationOptions = [
  '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
];

const sportsOptions = [
  { value: 1, label: '축구' },
  { value: 3, label: '농구' },
  { value: 4, label: '배구' },
  { value: 5, label: '배드민턴' },
  { value: 6, label: '테니스' },
  { value: 7, label: '수영' },
  { value: 8, label: '서핑' },
  { value: 9, label: '헬스' },
  { value: 10, label: '요가' },
  { value: 11, label: '필라테스' },
  { value: 12, label: '러닝' },
  { value: 13, label: '하이킹' },
  { value: 14, label: '사이클' },
  { value: 15, label: '댄스' },
  { value: 16, label: '클라이밍' },
  // { value: 17, label: '태권도' },
  // { value: 18, label: '펜싱' },
  // { value: 19, label: '양궁' },
  // { value: 20, label: '사격' },
  // { value: 21, label: '피겨' }
];

const LeftForm = ({ formData, handleChange }) => {
  const [charCount, setCharCount] = useState(0);

  const handleBioChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    if (name === 'bio') {
      setCharCount(value.length);
    }
  };

  return (
    <LeftFormContainer>
      <TutorDetailContainerLeft>
        <TutorThumbnail>
          <TutorFirstLine>
            <TutorImg>
              <svg xmlns="http://www.w3.org/2000/svg" width="191" height="191" viewBox="0 0 191 191" fill="none">
                <circle cx="95.5" cy="95.5" r="95.5" fill="#F2F3F5" />
                <g transform="translate(39 39)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
                    <path d="M9.9375 112.375C9.9375 112.375 0.625 112.375 0.625 103.062C0.625 93.75 9.9375 65.8125 56.5 65.8125C103.062 65.8125 112.375 93.75 112.375 103.062C112.375 112.375 103.062 112.375 103.062 112.375H9.9375Z" fill="#A6A6A6"/>
                    <path d="M56.5 56.5C71.9295 56.5 84.4375 43.992 84.4375 28.5625C84.4375 13.133 71.9295 0.625 56.5 0.625C41.0705 0.625 28.5625 13.133 28.5625 28.5625C28.5625 43.992 41.0705 56.5 56.5 56.5Z" fill="#A6A6A6"/>
                  </svg>
                </g>
              </svg>
            </TutorImg>
            <div>
              <InfoRow>
                <div>닉네임</div>
                <div></div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </InfoRow>
              <InfoRow>
                <div>성별</div>
                <div></div>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  {genderOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </InfoRow>
              <InfoRow>
                <div>나이</div>
                <div></div>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </InfoRow>
              <InfoRow>
                <div>지역</div>
                <div></div>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                >
                  {locationOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </InfoRow>
            </div>
          </TutorFirstLine>
          <TutorSecondLine>
            <div>
              <div>종목</div>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                {sportsOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <div>가격</div>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </TutorSecondLine>
        </TutorThumbnail>
        <InfoContainer>
          <h3>한줄소개</h3>
          <Intro1>
            <div>경력사항</div>
            <div></div>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="ex. 헬스 5년차"
            />
          </Intro1>
          <Intro2>
            <div>소개</div>
            <div></div>
            <input
              type="text"
              name="introduction"
              value={formData.introduction}
              onChange={handleChange}
              placeholder="ex. 스트레스 없이 운동 시작해봐요~"
            />
          </Intro2>
        </InfoContainer>
        <BioContainer>
          <h3>자기소개</h3>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleBioChange}
            maxLength={140}
            placeholder="자기소개 글을 입력해주세요"
          />
          <CharCount>{charCount}/140</CharCount>
        </BioContainer>
      </TutorDetailContainerLeft>
    </LeftFormContainer>
  );
};

export default LeftForm;
