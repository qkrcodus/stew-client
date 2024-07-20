import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components';

const TestFinishContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button=styled.div`
    cursor: pointer;
    width: 28rem;
    height: 8rem;
    border-radius: 3rem;
    background: var(--font-color-main);
    position: absolute;
    top: 90.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--font-color-white);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: var(--font-weight-bold);
`
const CenteredContainer = styled.div`
  position: absolute;
  top: 58.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2{
    font-family: var(--font-family-pretendard);
    font-size: 3.6rem;
    font-weight: var(--font-weight-bold);
    text-align: center;
    color: var(--font-color-sub);
  }
`;

const TestFinish = () => {
  return (
    <TestFinishContainer>
    <HeaderForPages/>
    <CenteredContainer>
    <h2>당신의 운동 유형을 분석하고 있어요</h2>
    </CenteredContainer>
    <Button>
        <div className='test-next-btn'>결과 확인하기</div>
    </Button>
    </TestFinishContainer>
  )
}

export default TestFinish