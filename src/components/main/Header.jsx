import React from 'react';
import styled from 'styled-components';
import HeaderForPages from '../HeaderForPages';
import introImage from '../../assets/images/jogging.png';
import searchbtn from '../../assets/images/search.png';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.div`
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
    line-height: 1.1;
  }

  .buttons {
    position: absolute;
    top: 47.4rem;
    display: flex;
    gap: 4rem;
    left: 39.6rem;
  }

  img {
    position: absolute;
    top: 21rem;
    right: 30.4rem;
    width: 42.9rem;
    height: 42.9rem;
  }

  .btn-left {
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
    line-height: normal;
  }
  .btn-right {
    border-radius: 3rem;
    border: 0.3rem solid #FFF;
    color: var(--font-color-white);
    width: 20rem;
    height: 6rem;
    cursor: pointer;
    font-size: 2rem;
    font-family: var(--font-family-pretendard);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--font-color-main);
    line-height: normal;
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
    position: relative; 
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 86.9rem;
  }

  input {
    border-radius: 4rem;
    border: none;
    width: 100%;
    height: 7.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    text-align: center;
    line-height: 7.5rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8rem;
    color: #000000;
    font-family: var(--font-family-pretendard);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &::placeholder {
      font-size: 2.5rem;
      color: #a5a5a5;
      font-family: var(--font-family-pretendard);
      font-weight: var(--font-weight-bold);
      font-style: normal;
      text-align: center;
      cursor: pointer;
    }
  }

  .search-button {
    position: absolute; 
    right: 2.1rem; 
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleTestClick = () => {
    navigate('/test');
  };
  const handleTutorClick=()=>{
    navigate('/findtutor');
  }
  return (
    <StyledHeader>
      <HeaderForPages />
      <IntroSection>
        <h1>AI 맞춤형 운동추천부터<br />스포츠 튜터 매칭까지 한 번에</h1>
        <div className="buttons">
          <button className="btn-left" onClick={handleTestClick}>테스트 하러가기</button>
          <button className="btn-right" onClick={handleTutorClick}>튜터 둘러보기</button>
        </div>
        <img src={introImage} alt="Intro" />
      </IntroSection>
      <SearchSection>
        <h2>어떤 운동을 찾고 계세요?</h2>
        <div className="search-bar">
          <input type="text" placeholder="원하시는 운동명을 입력하세요" />
          <img src={searchbtn} className="search-button" alt="search"/>
        </div>
      </SearchSection>
    </StyledHeader>
  );
}

export default Header;
