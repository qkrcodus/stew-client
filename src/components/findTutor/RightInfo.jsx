import React, { useState } from 'react'
import styled from 'styled-components';
import person from '../../assets/images/person-fill.png';
import graystars from '../../assets/images/graystars.png';
import graystar from '../../assets/images/graystar.png';
import yellowstars from '../../assets/images/yellowstars.png';
import yellowstar from '../../assets/images/yellow.png';
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
    height: 32.1rem;
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
       overflow: hidden;
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
    top: 40.5rem;
    left: 3.8rem;
    width: 58.9rem;
    height: 35.2rem;
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
    height: 30.8rem;
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
    top: 28.7rem;
    left: 46.6rem;
`;
const Reviewwrapper=styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
top: 1.5rem;
position: absolute;}
`
const Container=styled.div`
width: 52.6rem;
height: 19.4rem;
flex-shrink: 0;
border: 0.1rem solid var(--Main-Color, #6BA6FF);
color: var(--Main-Color, #6BA6FF);
text-align: center;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 10.1rem;

`
const Profile = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #F2F3F5;
  position: absolute;
  left: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
`
const ReviewContent=styled.div`
color: #333E5E;
font-family: var(--font-family-pretendard);
font-size: 1.7rem;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 27.1rem;
position: absolute;
right: 1rem;
`
const ProfileDetail=styled.div`
position: absolute;
left: 12.4rem;
top: 6rem;
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: normal;
img{
position: absolute;
left: 0rem;
top: 4rem;
}
display: flex;
    flex-direction: column;
    align-items: flex-start;

`
const RightInfo = ({data}) => {
  const tutor = data;
  const hasReview = tutor.reviewDto && tutor.reviewDto.review_content;
  console.log("rightinfo",tutor);
  const [gyminfo, setGyminfo] = useState(tutor.sports_intro);
  const [charCount, setCharCount] = useState(tutor.sports_intro.length);

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
            maxLength={300}
        />
        <CharCount>({charCount}/300)</CharCount>
    </GymIntro>
    <Portfolio>
    <h3>포트폴리오</h3>
    {tutor.portfolio && tutor.portfolio.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Portfolio ${index}`} style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
    </Portfolio>
    <Review>
    <h3>리뷰</h3>
    <Reviewwrapper>
    {hasReview ? (
        <>
          <img src={yellowstars} alt='찬 별' />
          <Container>
            <Profile>
              <ProfileImage src={person} alt="Profile" />
            </Profile>
            <ProfileDetail>
              <div>{tutor.reviewDto.reviewer_name}</div>
              <div>{tutor.reviewDto.reviewer_location},{tutor.reviewDto.reviewer_age}세</div>
              <img src={yellowstar}/>
            </ProfileDetail>
            <ReviewContent>
            {tutor.reviewDto.review_content}
            </ReviewContent>
          </Container>
        </>
      ) : (
        <>
          <img src={graystars} alt='빈 별' />
          <Container>
            리뷰가 아직 없어요.
          </Container>
        </>
      )}
     </Reviewwrapper>
    </Review>


    </TutorDetailContainerRight>
    </RightInfoContainer>
  )
}

export default RightInfo