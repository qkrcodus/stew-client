import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import resultdata from '../data/resultdata';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
const TestFinishContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 245.5rem;
`
const BoxContent = styled.div`
  position: relative;
`;

const Rectangle = styled.div`
  border: 0.3rem solid;
  border-color: #6ba6ff;
  border-radius: 3.731rem;
  box-shadow: 0px 0px 1.492rem #333e5e4c;
  height: 32.9rem;
  left: 0;
  top: 0;
  width: 37.9rem;
`;

const Thumbnail = styled.div`
  position: absolute;
  top: 3.4rem;
  left: 3.77rem;
  width: 10.2rem; 
  height: 14.4rem; 
  flex-shrink: 0;
  border-radius: 3rem; 
  background-image: url(${(props) => props.$imgurl});
  background-size: cover;
    background-position: center;
  background-repeat: no-repeat;
`;

const Name1 = styled.div`
  position: absolute;
  top: 3.7rem;
  left: 15.67rem;
  border-radius: 3rem;
  color: var(--Sub-Color, #333e5e);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5.7rem;
`;

const Type = styled.span`
  width: 8.1rem;
  height: 3.4323rem; 
  flex-shrink: 0;
  border-radius: 2.2384rem; 
  background: var(--Main-Color, #6ba6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Sub-Color, #333E5E);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Info = styled.div`
  position: absolute;
  top: 6.9rem;
  left: 15.87rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Sub-Color, #333e5e);
  font-family: Pretendard;
  font-size: 2rem; 
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 15.4rem;
  left: 15.57rem;
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  div {
    color: var(--Sub-Color, #333E5E);
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;    
  }
`;

const RatingImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const Line = styled.div`
  width: 31.0611rem; 
  height: 0.2rem;
  background: #A6A6A6;
  position: absolute;
  top: 19.8rem;
  left: 50%; 
  transform: translateX(-50%);
`;

const Comment = styled.div`
  position: absolute;
  top: 21.4rem;
  display: flex;
  div { 
    width: 29.258rem;
    height: 4.9246rem; 
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--Sub-Color, #333E5E);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Price = styled.div`
  position: absolute;
  top: 27.9rem;
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const TypeResult=styled.div`
position: absolute;
top: 25rem;
display: flex;
justify-content: center;
gap: 5.074rem;
`
const TypeIcon=styled.div`
width: 29.5256rem;
height: 29.7173rem;
flex-shrink: 0;
background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
`
const TypeContent=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 3rem;
}
`
const Content1=styled.div`
width: 77.4rem;
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Content2=styled.div`
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
width: 77.5rem;
`
const HashTag=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
`
const FirstTag=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 22.6rem;
height: 5.7rem;
border-radius: 2rem;
border: 0.2909rem solid var(--Main-Color, #6BA6FF);
background: rgba(107, 166, 255, 0.40);
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const SecondTag=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 22.6rem;
height: 5.7rem;
border-radius: 2rem;
border: 0.2909rem solid var(--Main-Color, #6BA6FF);
background: rgba(107, 166, 255, 0.40);
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Tips=styled.div`
svg{
    position: absolute;
    top: -6rem;
}
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top: 71.215rem;
width: 51.7rem;
height: 47.5rem;
flex-shrink: 0;
background: #FFE500;
box-shadow: 0px 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.25);s
`
const TipTitle=styled.div`
position: absolute;
top: 8rem;
color: var(--Main-Color, #6BA6FF);
font-family: var(--font-family-pretendard);
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const TipContainer=styled.div`
position: absolute;
    top: 18rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
`
const Tip=styled.div`
    position: relative;
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const ThreeSports=styled.div`
position: absolute;
top: 126.8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;

`
const Title=styled.div`
color: var(--Main-Color, #6BA6FF);
font-family: var(--font-family-pretendard);
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 3rem;
`
const Sport1=styled.div`
display: flex;
gap: 8.2rem;
`
const Sport2=styled.div`
display: flex;
gap: 8.2rem;
`
const Sport3=styled.div`
display: flex;
gap: 8.2rem;
`
const Img = styled.div`
  height: 15.5rem;
  width: 15.5rem;
  align-self: stretch;
  border-radius: 15.5rem;
  background: url(${props => props.imgUrl}) no-repeat center/cover;
`

const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 80.5rem;
gap: 1.5rem;
`
const Name=styled.div`
color: var(--Main-Color, #6BA6FF);
font-family: var(--font-family-pretendard);
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Content=styled.div`
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const TwoTutor=styled.div`
position: absolute;
top: 196.2rem;
display: flex;
justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
`
const TwoTutorTitle=styled.div`
color: var(--Main-Color, #6BA6FF);
font-family: var(--font-family-pretendard);
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const TwoTutorContainer=styled.div`
display: flex;
gap: 6rem;
cursor: pointer;
`
const BASE_URL = import.meta.env.VITE_BASE_URL;
const TestFinish = () => {
  // TestContent로 받아온 쿼리파라미터 속 정보 찾아주는 훅
  const location = useLocation();
  const { answers } = location.state || {};
  // [1,1,1,1] 배열을 id로 변환
  console.log(Array.isArray(resultdata)); // true여야
  console.log(resultdata);
  const resultId = answers.join('');
  const result = resultdata.find(data => data.id === parseInt(resultId, 10));
  console.log(result);
  // 2개의 sport id 받아옴
  const [sportsId1, sportsId2] = result.sportId
  //라우팅
  const navigate = useNavigate();

 
  const [tutorData, setTutorData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/test/tutors`, {
          params: {
            sportsId1,
            sportsId2
          }
        });
        setTutorData(response.data.data);
      } catch (error) {
        setError('Failed to load tutors');
      }
    };

    fetchTutors();
  }, [sportsId1, sportsId2]);

  const handleBoxClick = (tutorId) => {
    navigate(`/tutordetail/${tutorId}`);
  };
  return (
    <TestFinishContainer>
    <HeaderForPages />
    <TypeResult>
      <TypeIcon imgUrl={result.imgUrl} />
      <TypeContent>
      <Content1>
        당신은 <span style={{ color: 'var(--Main-Color, #6BA6FF)' }}>{result.type}</span> 유형입니다
      </Content1>
        <Content2>
          {result.description}
        </Content2>
        <HashTag>
          <FirstTag>
            # {result.tag[0]}
          </FirstTag>
          <SecondTag>
            # {result.tag[1]}
          </SecondTag>
        </HashTag>
      </TypeContent>
    </TypeResult>
    <Tips>
    <svg xmlns="http://www.w3.org/2000/svg" width="7.1rem" height="12.6rem" viewBox="0 0 71 126" fill="none">
          <path d="M24.3387 0.44828L28.4989 3.94828L33.9989 2.94828L38.4989 5.94828L43.9989 4.94828L47.9989 7.94828L53.0002 6.4483L56.5001 9.44831L62 7.94828L65.5 10.9483L70.6824 10.2536L46.3439 125.286L0.000228345 115.481L24.3387 0.44828Z" fill="#D9D9D9"/>
        </svg>
      <TipTitle>당신을 위한 운동꿀팁!</TipTitle>
      <TipContainer>
        <Tip>1. {result.tips[0]}</Tip>
        <Tip>2. {result.tips[1]}</Tip>
        <Tip>3. {result.tips[2]}</Tip>
        <Tip>4. {result.tips[3]}</Tip>
      </TipContainer>
    </Tips>
    <ThreeSports>
      <Title>이런 운동은 어때요?</Title>
      <Sport1>
        <Img imgUrl={result.exercises[0].imgUrl} />
        <Container>
          <Name>{result.exercises[0].name}</Name>
          <Content>{result.exercises[0].description}</Content>
        </Container>
      </Sport1>
      <Sport2>
        <Img imgUrl={result.exercises[1].imgUrl} />
        <Container>
          <Name>{result.exercises[1].name}</Name>
          <Content>{result.exercises[1].description}</Content>
        </Container>
      </Sport2>
      <Sport3>
        <Img imgUrl={result.exercises[2].imgUrl} />
        <Container>
          <Name>{result.exercises[2].name}</Name>
          <Content>{result.exercises[2].description}</Content>
        </Container>
      </Sport3>
    </ThreeSports>
    <TwoTutor>
      <TwoTutorTitle>당신에게 추천하는 스포츠 튜터!</TwoTutorTitle>
      <TwoTutorContainer>
        {tutorData.map((box) => {
          const [careerBeforeComma, careerAfterComma] = box.career.split(',');
          return (
            <Rectangle key={box.tutorId} onClick={() => handleBoxClick(box.tutorId)}>
              <BoxContent>
                <Thumbnail $imgurl={box.imgUrl} />
                <Name1>{box.name}<Type>{box.sportName}</Type></Name1>
                <Info>
                  <div>{box.location}</div>
                  <div>{careerBeforeComma}</div>
                  <div>{careerAfterComma}</div>
                </Info>
                <RatingContainer>
                  {Array.from({ length: box.score }, (_, index) => (
                    <RatingImage key={index} src={stars} alt="stars" />
                  ))}
                  <div>({box.reviewCount})</div>
                </RatingContainer>
                <Line />
                <Comment>
                  <div>
                    {box.intro.length > 32 ? `${box.intro.substring(0, 30)} ...` : box.intro}
                  </div>
                </Comment>
                <Price><div>{box.price}~</div></Price>
              </BoxContent>
            </Rectangle>
          );
        })}
      </TwoTutorContainer>
      {error && <div>{error}</div>}
    </TwoTutor>
  </TestFinishContainer>
);
};

export default TestFinish;