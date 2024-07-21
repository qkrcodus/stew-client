import React from 'react';
import styled from 'styled-components';
import "./footerstyle.css";
import youtube from '../../assets/images/youtube.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';

const Logo = styled.div`
  color: white;
  font-size: var(--font-size-80px);
  font-family: var(--font-family-bmjua);
  font-weight: var(----font-weight-400);
  margin-left: 28rem;
  margin-top: 4.1rem;
`;

const FooterContainer = styled.div`
  height: 45.2rem;
  position: absolute;
  top: 463.4rem;
  width: 100vw;
  background: #6ba6ff80;

`;

const Footer = () => {
  return (
    <FooterContainer>
    <Logo>스튜</Logo>
    <div className="frame">
    <p className="element">
      <span className="text-wrapper">
        고객센터
        <br />
      </span>
      <span className="span">
        <br />
        8574-6839&nbsp;&nbsp;&nbsp;&nbsp;09:00~18:00
        <br />
        평일, 토요일: 전체 문의 상담
        <br />
        일요일: 휴무
        <br />
        <br />
        카톡상담(평일 09:00~18:00)
        <br />
        <br />
      </span>
      <span className="text-wrapper">이메일 문의 </span>
    </p>
    <div className="div">
      회사소개
      <br />
      <br />
      채용정보
      <br />
      <br />
      이용약관
      <br />
      <br />
      개인정보 처리방침
      <br />
      <br />
      공지사항
    </div>
    <div className="text-wrapper-2">
      제휴/광고 문의
      <br />
      <br />
      고객의 소리
    </div>
    <p className="element-studio">
      <div>
        (주)스튜디오 | 대표이사 고영명 | 서울특별시 동작구 상도로 369 학생회관 229호
        <br />
        studio0714@studio.net | 사업자 등록 번호 264-88-01106
        <br />
        통신판매업 신고번호: 2024-서울종로-1534
      </div>
      <div className='footer-logos'>
        <img src={youtube}/>
        <img src={instagram}/>
        <img src={facebook}/>
      </div>
      <div>COPYRIGHT© 2024 TEAM STUDIO. ALL RIGHT RESERVED.</div>
    </p>
  </div>
  </FooterContainer>
  );
};

export default Footer;
