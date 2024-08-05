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
    font-size: var(--font-size-28px);
    font-weight: var(--font-weight-bold);
    color: var(--font-color-white);
     &:nth-child(1) {
      color: ${(props) => (props.$forPostManagement ? 'var(--font-color-sub)' : 'var(--font-color-white)')};
    }

    &:nth-child(2) {
      color: ${(props) => (props.$forSentApplications ? 'var(--font-color-sub)' : 'var(--font-color-white)')};
    }

    &:nth-child(3) {
      color: ${(props) => (props.$forReceivedApplications ? 'var(--font-color-sub)' : 'var(--font-color-white)')};
    }
  }
`;
const Headerwrapper=styled.div`
  margin:0rem 28rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16.1rem;
`
const HeaderContainer=styled.div`
  background: var(--font-color-main);
  width: 100vw;

`

const HeaderForPages=({ forPostManagement, forSentApplications, forReceivedApplications, userId })=>{
  const navigate = useNavigate();
  console.log("userId: ", userId);
  const handleTestClick = () => {
    navigate('/');
  };
  const handlePostManagementClick=()=>{
      const userId = 1;
      navigate(`/postmanagement/${userId}`);
  }
  const handleSentApplicationsClick=()=>{
      const userId = 1;
      navigate(`/sentapplications/${userId}`)
  }
  const handleReceivedApplicationsClick=()=>{
      const userId = 1;
      navigate(`/receivedapplications/${userId}`)
  }
    return(
      <HeaderContainer>
      <Headerwrapper>
      <Logo onClick={handleTestClick}>스튜</Logo>
      <Nav $forPostManagement={forPostManagement}
           $forSentApplications={forSentApplications}
           $forReceivedApplications={forReceivedApplications}>
        <div onClick={handlePostManagementClick}>게시글 관리</div>
        <div onClick={handleSentApplicationsClick}>보낸 신청서</div>
        <div onClick={handleReceivedApplicationsClick}>받은 신청서</div>
        <div style={{ fontSize: '2.5rem' }}>
      🐯 <span style={{ borderBottom: '0.2rem solid white' }}>이사자님</span>이 로그인 중입니다
    </div>
      </Nav>
      </Headerwrapper>
      </HeaderContainer>
    )
  }

export default HeaderForPages