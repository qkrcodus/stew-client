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
  & > div{
  display: flex;
  width: 28rem;
  align-items: center;
  gap: 1.7rem;
  }
  div> div{

  }
    input {
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
  }
`;

const TutorImg = styled.div`
  width: 19.1rem;  
  height: 19.1rem;
  flex-shrink: 0;
  fill: #F2F3F5;
  box-sizing: border-box;
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
 & >input {
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 9.3rem;
    height: 2rem;
    border-radius: 1rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
    padding-left: 2rem;
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
  & > input{
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
  text-align: right;
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem;
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

const LeftForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    type: '',
    price: '',
    experience: '',
    introduction: '',
    bio: '',
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'bio') {
      setCharCount(value.length);
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit(formData); 
//     }
//   };

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
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
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
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </InfoRow>
            </div>
          </TutorFirstLine>
          <TutorSecondLine>
            <div>
              <div>종목</div>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
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
            onChange={handleChange}
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
