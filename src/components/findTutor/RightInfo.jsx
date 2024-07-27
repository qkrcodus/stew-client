import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { tutorData } from '../../data/tutordata';

const RightInfoContainer=styled.div`
  position: absolute;
  top: 59.2rem;
  right: 26.8rem;
`
const TutorDetailContainerRight=styled.div`
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
`
const GymIntro=styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 3.9rem;
    left: 3.8rem;
    width: 58.9rem;
    height: 26.1rem;
    flex-shrink: 0;
    border: 0.2rem solid #D9D9D9;
    h3{
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
        padding: 2.9rem;
        box-sizing: border-box;
        resize: none;
        border: none;
        color: var(--Sub-Color, #333E5E);
        font-family: var(--font-family-pretendard);
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        pointer-events: none; 
    }
    textarea:focus {
    outline: none; 
    }

`
const Portfolio=styled.div`
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
    top: 34.5rem;
    left: 3.8rem;
    width: 58.9rem;
    height: 42.2rem;
    flex-shrink: 0;
    border: 0.2rem solid #D9D9D9;
    h3{
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
    div{
    width: 14.4rem;
    height: 14.4rem;
    flex-shrink: 0;
    background: #D9D9D9;
    }

`
const Review=styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 81.7rem;
    left: 3.8rem;
    width: 58.9rem;
    height: 28.8rem;
    flex-shrink: 0;
    border: 0.2rem solid #D9D9D9;
    h3{
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
`
const CharCount = styled.div`
    color: #A6A6A6;
    text-align: right;
    font-family: var(--font-family-pretendard);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 22.7rem;
    left: 48.6rem;
`;
const RightInfo = () => {
  const { id } = useParams();
  const tutor = tutorData.find(t => t.id === parseInt(id));

  const [gyminfo, setGyminfo] = useState(tutor.gyminfo);
  const [charCount, setCharCount] = useState(tutor.gyminfo.length);

  const handleGyminfoChange = (e) => {
      setGyminfo(e.target.value);
      setCharCount(e.target.value.length);
  };
  return (
    <RightInfoContainer>
    <TutorDetailContainerRight>
    <GymIntro>
    <h3>운동소개</h3>
        <textarea
            value={gyminfo}
            onChange={handleGyminfoChange}
            maxLength={140}
        />
        <CharCount>({charCount}/140)</CharCount>
    </GymIntro>
    <Portfolio>
    <h3>포트폴리오</h3>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
    </Portfolio>
    <Review>
    <h3>리뷰</h3>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
    </Review>


    </TutorDetailContainerRight>
    </RightInfoContainer>
  )
}

export default RightInfo