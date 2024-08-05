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
const Rectangle2 = styled.div`
  border: 0.3rem solid #606574;
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 2.5rem;
  left: 1.8rem;
  cursor: pointer;
`;
const FilterInstance = styled.div`
  height: 3.6rem;
  width: 3.6rem;
  position: absolute;
  top: 2.1rem;
  left: 54.1rem;
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


export const Navbar1 = () => {
  return (
    <BoxContainer>
      <Title>보낸 신청서 목록</Title>
      <Group>
          <Rectangle />
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" fill="none">
            <path d="M7.5 12L14.8612 0H0.138784L7.5 12Z" fill="#606575"/>
            </svg>
          </SvgIcon>
          <TextWrapper>삭제</TextWrapper> 
          <Rectangle2 />
          <FilterInstance color="#A6A6A6" />
          <SearchInstance />
      </Group>
    </BoxContainer>
  );
};

export default Navbar1;