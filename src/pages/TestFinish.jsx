import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import resultdata from '../data/resultdata';
const TestFinishContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 245.5rem;
`
// const CenteredContainer = styled.div`
//   position: absolute;
//   top: 58.6rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   h2{
//     font-family: var(--font-family-pretendard);
//     font-size: 3.6rem;
//     font-weight: var(--font-weight-bold);
//     text-align: center;
//     color: var(--font-color-sub);
//   }
// `;
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
`

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

  return (
    <TestFinishContainer>
      <HeaderForPages />
      {/* 2초 로딩후 
      <CenteredContainer>
      <h2>당신의 운동 유형을 분석하고 있어요</h2>
      </CenteredContainer> */}
      <TypeResult>
        <TypeIcon imgUrl={result.imgUrl} />
        <TypeContent>
          <Content1>
            당신은 {result.type} 유형입니다
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
        </TwoTutorContainer>
      </TwoTutor>
    </TestFinishContainer>
  )
}

export default TestFinish