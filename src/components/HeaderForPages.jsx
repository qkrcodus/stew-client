import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  color: white;
  font-size: var(--font-size-80px);
  font-family: var(--font-family-bmjua);
  font-weight: var(----font-weight-400);
  cursor: pointer;
`;
const Nav = styled.div`
  font-family: var(--font-family-pretendard);
  color: var(--font-color-white);
  font-size: var(--font-size-28px);
  display: flex;
  gap:5rem;
  cursor: pointer;
`;
const Headerwrapper=styled.div`
  margin:0rem 28rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:16.1rem;
`
const HeaderContainer=styled.div`
  background: var(--font-color-main);
  width: 100vw;
`

const HeaderForPages=()=>{
    return(
      <HeaderContainer>
      <Headerwrapper>
      <Logo>스튜</Logo>
      <Nav>
        <div>튜터링 관리</div>
        <div>마이페이지</div>
      </Nav>
      </Headerwrapper>
      </HeaderContainer>
    )
  }

export default HeaderForPages