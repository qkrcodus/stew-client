import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import HeaderForPages from './HeaderForPages';

const StyledHeader=styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--font-color-main);
  border-bottom-left-radius: 50vh;
  box-sizing: border-box;
  position: relative;
`;

const IntroSection = styled.div`
  h1 {
    font-family: var(--font-family-pretendard);
    font-size: 5.4rem;
    font-weight: var(--font-weight-extrabold);
    color: var(--font-color-white);
    position: absolute;
    top: 29.6rem;
    left: 39.6rem;
  }

  .buttons {
    position: absolute;
    top: 47.4rem;
    display: flex;
    gap: 4rem;
    left: 39.6rem;
  }

  .btn {
    background: white;
    color: var(--font-color-main);
    border: none;
    width: 20rem;
    height: 6rem;   
    border-radius: 3rem;
    cursor: pointer;
    font-size: 2rem;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SearchSection = styled.div`
  position: absolute;
  top: 70.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  h2 {
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-bold);
    font-size: 3.6rem;
    color: var(--font-color-sub);
    margin-bottom: 4rem;
  }
  .search-bar {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  input {
    border-radius: 4rem;
    border: none;
    width: 86.9rem;
    height: 7.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    text-align: center;
    &::placeholder {
    font-size: 2.8rem;
    color: #A6A6A6;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-bold);
    line-height: normal;
    font-style: normal;
    text-align: center;
    cursor: pointer;
  }
  }
  
  .search-button {
    background: white;
    color: #6BA6FF;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
`;
const Header = () => {
  return (
<StyledHeader>
    <HeaderForPages/>
    <IntroSection>
        <h1>AI 맞춤형 운동추천부터<br /> 스포츠 튜터 매칭까지 한 번에</h1>
        <div className="buttons">
        <button className="btn">테스트 하러가기</button>
        <button className="btn">튜터 둘러보기</button>
        </div>
    </IntroSection>
    <SearchSection>
          <h2>어떤 운동을 찾고 계세요?</h2>
          <div className="search-bar">
            <input type="text" placeholder="원하시는 운동명을 입력하세요" />
          </div>
    </SearchSection>
</StyledHeader>
  )
}


export default Header