import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const Logo = styled.div`
  color: white;
  font-size: var(--font-size-80px);
  font-family: var(--font-family-bmjua);
  font-weight: var(----font-weight-400);
  cursor: pointer;
`;
const Nav = styled.div`
  display: flex;
  gap: 6.9rem;
  cursor: pointer;
  div{
  font-family: var(--font-family-pretendard);
  color: var(--font-color-white);
  font-size: var(--font-size-28px);
  font-weight: var(--font-weight-bold);
  }
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
  const navigate = useNavigate();
  const handleTestClick = () => {
    navigate('/');
  };
    return(
      <HeaderContainer>
      <Headerwrapper>
      <Logo onClick={handleTestClick}>스튜</Logo>
      <Nav>
        <div>게시글 관리</div>
        <div>보낸 신청서</div>
        <div>받은 신청서</div>
      </Nav>
      </Headerwrapper>
      </HeaderContainer>
    )
  }

export default HeaderForPages