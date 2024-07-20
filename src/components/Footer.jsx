import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #d3e1ff;
  padding: 20px;
  font-family:'Pretendard-Regular';
  font-size: 14px;
  color: #333;
  padding:0 28rem;
  margin-top: 24.8rem;
  height: 45.2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;
  h2{
  font-size: 3rem;
  font-family: 'BMJUA', sans-serif;
  font-weight: 400;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  margin: 0 5px;
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>스튜</h2>
        </FooterSection>
        <FooterSection>
          <SectionTitle>고객센터</SectionTitle>
          <p>8574-6839 09:00~18:00</p>
          <p>평일, 토요일: 전체 문의 상담</p>
          <p>일요일: 휴무</p>
          <p>카톡상담(평일 09:00~18:00)</p>
          <p>이메일 문의</p>
        </FooterSection>
        <FooterSection>
          <SectionTitle>회사소개</SectionTitle>
          <p>채용정보</p>
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
          <p>공지사항</p>
        </FooterSection>
        <FooterSection>
          <SectionTitle>제휴/광고 문의</SectionTitle>
          <p>고객의 소리</p>
        </FooterSection>
        <FooterSection>
          <p>(주)스튜디오 | 대표이사 고영명 | 서울특별시 동작구 상도로 369 학생회관 229호</p>
          <p>studio0714@studio.net | 사업자 등록 번호 264-88-01106</p>
          <p>통신판매업 신고번호: 2024-서울중로-1534</p>
        </FooterSection>
        <FooterSocial>
          <SocialLink href="#"><img src="youtube_icon.png" alt="YouTube" /></SocialLink>
          <SocialLink href="#"><img src="instagram_icon.png" alt="Instagram" /></SocialLink>
          <SocialLink href="#"><img src="facebook_icon.png" alt="Facebook" /></SocialLink>
        </FooterSocial>
      </FooterContent>
      <FooterBottom>
        <p>COPYRIGHT© 2024 TEAM STUDIO. ALL RIGHT RESERVED.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
