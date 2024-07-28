import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  height: 14.9rem;
  width: 135.8rem;
  position: relative;
`;

const Group = styled.div`
  position: absolute;
  height: 14.9rem;
  top: 13.9rem;
  width: 136.4rem;
  left: 9.9rem;
  display: flex;
  align-items: center;
`;

const Rectangle = styled.div`
  border-top: 0.2rem solid #a5a5a5;
  border-bottom: 0.2rem solid #a5a5a5;
  height: 7.5rem;
  width: 135.8rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextWrapper = styled.div`
  color: #a5a5a5;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-weight: 500;
  height: 3.3rem;
  position: absolute;
  text-align: center;
  top: 2.2rem;
  width: 7rem;
  left: 17.5rem;
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  color: #a5a5a5;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-weight: 500;
  height: 3.3rem;
  position: absolute;
  text-align: center;
  top: 2.2rem;
  width: 5.3rem;
  left: 30.9rem;
`;

const TextWrapper2 = styled.div`
  display: flex;
  align-items: center;
  color: #a5a5a5;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-weight: 500;
  height: 3.3rem;
  position: absolute;
  text-align: center;
  top: 2.2rem;
  left: 43rem;
`;

const Rectangle2 = styled.div`
  border: 0.3rem solid #606574;
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 2.5rem;
  left: 1.8rem;
`;

const FilterInstance = styled.div`
  height: 3.6rem;
  width: 3.6rem;
  position: absolute;
  top: 2.1rem;
  left: 54.1rem;
`;

const OverlapGroupWrapper = styled.div`
  height: 3.6rem;
  position: absolute;
  top: 2.1rem;
  left: 120.6rem;
`;


const TextWrapper3 = styled.div`
  color: #606575;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-weight: 500;
  height: 3.3rem;
  position: absolute;
  text-align: center;
  top: 0;
  width: 11rem;
  left: 0;
  display: flex;
  align-items: center;
  
`;

const Rectangle3 = styled.div`
  border: 0.2rem solid #606575;
  border-radius: 3rem;
  height: 4.2rem;
  width: 11.8rem;
  position: absolute;
  top: 1.7rem;
  left: 105.5rem;
`;

const SearchInstance = styled.div`
  height: 2.3rem;
  width: 2.3rem;
  position: absolute;
  top: 2.6rem;
  left: 113.0rem;
`;

const SvgIcon=styled.div`
  width: 1.5rem;
  height: 1.2rem;
  position: absolute;
  top: 3.5rem; 
  left: 6rem; 
`
const SvgSearch=styled.div`
 width: 2.3rem;
 height: 2.3rem;
 left: 7.5rem;
 top: 0.9rem;
 position: absolute;
`
const Title=styled.div`
color: var(--Sub-Color, #333E5E);
font-family: var(--font-family-pretendard);
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 4.9rem;
left: 11.4rem;
`


export const Navbar2 = () => {
  return (
    <BoxContainer>
      <Title>받은 신청서 목록</Title>
      <Group>
          <Rectangle />
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" fill="none">
            <path d="M7.5 12L14.8612 0H0.138784L7.5 12Z" fill="#606575"/>
            </svg>
          </SvgIcon>
          <TextWrapper>삭제</TextWrapper>
          <Div>수락</Div>
          <TextWrapper2>날짜 필터
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M13.5 23.625C13.5 23.0037 14.0037 22.5 14.625 22.5H21.375C21.9963 22.5 22.5 23.0037 22.5 23.625C22.5 24.2463 21.9963 24.75 21.375 24.75H14.625C14.0037 24.75 13.5 24.2463 13.5 23.625Z" fill="#A6A6A6"/>
          <path d="M9 16.875C9 16.2537 9.50368 15.75 10.125 15.75H25.875C26.4963 15.75 27 16.2537 27 16.875C27 17.4963 26.4963 18 25.875 18H10.125C9.50368 18 9 17.4963 9 16.875Z" fill="#A6A6A6"/>
          <path d="M4.5 10.125C4.5 9.50368 5.00368 9 5.625 9H30.375C30.9963 9 31.5 9.50368 31.5 10.125C31.5 10.7463 30.9963 11.25 30.375 11.25H5.625C5.00368 11.25 4.5 10.7463 4.5 10.125Z" fill="#A6A6A6"/>
          </svg>
          </TextWrapper2>
          <Rectangle2 />
          <FilterInstance color="#A6A6A6" />
          <OverlapGroupWrapper>
              <TextWrapper3>최신순
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M7.875 5.625C7.875 5.00368 7.37132 4.5 6.75 4.5C6.12868 4.5 5.625 5.00368 5.625 5.625L5.625 25.409L3.0455 22.8295C2.60616 22.3902 1.89384 22.3902 1.45451 22.8295C1.01516 23.2688 1.01516 23.9812 1.45451 24.4205L5.9526 28.9186L5.96932 28.935C6.07369 29.0357 6.19271 29.1122 6.31937 29.1646C6.45201 29.2196 6.59746 29.25 6.75 29.25C6.90254 29.25 7.04798 29.2196 7.18063 29.1646C7.31332 29.1097 7.43763 29.0284 7.5455 28.9205L12.0455 24.4205C12.4848 23.9812 12.4848 23.2688 12.0455 22.8295C11.6062 22.3902 10.8938 22.3902 10.4545 22.8295L7.875 25.409L7.875 5.625Z" fill="#606575"/>
              <path d="M15.75 7.875C15.75 7.25368 16.2537 6.75 16.875 6.75H32.625C33.2463 6.75 33.75 7.25368 33.75 7.875C33.75 8.49632 33.2463 9 32.625 9H16.875C16.2537 9 15.75 8.49632 15.75 7.875Z" fill="#606575"/>
              <path d="M16.875 13.5C16.2537 13.5 15.75 14.0037 15.75 14.625C15.75 15.2463 16.2537 15.75 16.875 15.75H28.125C28.7463 15.75 29.25 15.2463 29.25 14.625C29.25 14.0037 28.7463 13.5 28.125 13.5H16.875Z" fill="#606575"/>
              <path d="M16.875 20.25C16.2537 20.25 15.75 20.7537 15.75 21.375C15.75 21.9963 16.2537 22.5 16.875 22.5H23.625C24.2463 22.5 24.75 21.9963 24.75 21.375C24.75 20.7537 24.2463 20.25 23.625 20.25H16.875Z" fill="#606575"/>
              <path d="M16.875 27C16.2537 27 15.75 27.5037 15.75 28.125C15.75 28.7463 16.2537 29.25 16.875 29.25H19.125C19.7463 29.25 20.25 28.7463 20.25 28.125C20.25 27.5037 19.7463 27 19.125 27H16.875Z" fill="#606575"/>
              </svg>
              </TextWrapper3>
          </OverlapGroupWrapper>
          <Rectangle3>
          <SvgSearch>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="none">
            <path d="M16.8794 14.8693C18.0161 13.3217 18.6875 11.4112 18.6875 9.34375C18.6875 4.18334 14.5042 0 9.34375 0C4.18334 0 0 4.18334 0 9.34375C0 14.5042 4.18334 18.6875 9.34375 18.6875C11.4117 18.6875 13.3228 18.0157 14.8706 16.8784L14.8693 16.8794C14.9117 16.9368 14.959 16.9919 15.011 17.0439L20.546 22.579C21.1074 23.1403 22.0176 23.1403 22.579 22.579C23.1403 22.0176 23.1403 21.1074 22.579 20.546L17.0439 15.011C16.9919 14.959 16.9368 14.9117 16.8794 14.8693ZM17.25 9.34375C17.25 13.7103 13.7103 17.25 9.34375 17.25C4.97725 17.25 1.4375 13.7103 1.4375 9.34375C1.4375 4.97725 4.97725 1.4375 9.34375 1.4375C13.7103 1.4375 17.25 4.97725 17.25 9.34375Z" fill="#606575"/>
            </svg>
          </SvgSearch>
          </Rectangle3>
          <SearchInstance />
      </Group>
    </BoxContainer>
  );
};

export default Navbar2;