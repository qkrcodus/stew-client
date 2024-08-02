import React, { useEffect, useState } from 'react'
import HeaderForPages from '../components/HeaderForPages'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import stars from '../assets/images/star-fill.png';
import LeftInfo from '../components/findTutor/LeftInfo'
import RightInfo from '../components/findTutor/RightInfo'
import axios from 'axios'
const BASE_URL=import.meta.env.VITE_BASE_URL;
const TutorDetailContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 216rem;
`
const TutorThumbnail=styled.div`
    position: absolute;
    top: 35.5rem;
    display: flex;
    gap: 3.9rem;
    width: 92.7rem;
    height: 15.8rem;
    flex-shrink: 0;
    border-top: 0.3rem solid var(--Main-Color, #6BA6FF);
    border-bottom: 0.3rem solid var(--Main-Color, #6BA6FF);
    justify-content: center;
    align-items: center;
    div{
    color: var(--Sub-Color, #333E5E);
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    }
        padding: 0px 5rem;
    box-sizing: border-box;
`
const TutorImg=styled.div`
    width: 9.7rem;
    height: 10.7rem;
    flex-shrink: 0;
   background-image: url(${(props) => props.$imgurl});
  background-size: cover;
    background-position: center;
  background-repeat: no-repeat;
`
const RatingImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const Space = styled.span`
    margin-left: 2rem; 
`;
const UpdateBtn=styled.div`
width: 12.2086rem;
height: 5.9453rem;
border: 0.3rem solid #333E5E;
border-radius: 4rem;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
color: var(--Sub-Color, #333E5E);
font-family: Pretendard;
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 177.4rem;
right: 41.491rem;
`
const DeleteBtn=styled.div`
width: 12.2086rem;
height: 5.9453rem;
border: 0.3rem solid #333E5E;
border-radius: 4rem;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
color: var(--Sub-Color, #333E5E);
font-family: Pretendard;
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
top: 177.4rem;
right: 26.798rem;
`
const MyDetail = () => {
    const { tutorid } = useParams();
    const [tutor, setTutor] = useState(null);
    const [error, setError] = useState(null);
  
    console.log('컴포넌트 렌더링됨');  // 컴포넌트 렌더링 여부 확인
    console.log('useParams에서 가져온 id:', tutorid);
  
    useEffect(() => {
      console.log('useEffect 호출됨');  // useEffect 호출 여부 확인
      const fetchTutorDetail = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/tutors/${tutorid}`);
          console.log('API 응답:', response.data.data);  // API 응답 로그
          setTutor(response.data.data);
        } catch (error) {
          setError('튜터 디테일 불러오는데 실패했습니다');
          console.error(error);
        }
      };
  
      fetchTutorDetail();
    },[tutorid]);
  
    console.log('튜터 상태:', tutor);  // 상태 업데이트 후 로그 확인
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!tutor) {
      return <div>Loading...</div>;
    }
  
    return (
      <TutorDetailContainer>
        <HeaderForPages />
        <TutorThumbnail>
          <TutorImg $imgurl={tutor.imgUrl}/>
          <div>
            <div>
              {tutor.name} / {tutor.sportName}
              <Space />
              {Array.from({ length: tutor.total_review_score }, (_, index) => (
                <RatingImage key={index} src={stars} alt="stars" />
              ))} ({tutor.total_review_count})
            </div>
            <div>{tutor.intro}</div>
            <div>{tutor.price}</div>
          </div>
        </TutorThumbnail>
        <LeftInfo data={tutor} />
        <RightInfo data={tutor} />
        <UpdateBtn>수정</UpdateBtn>
        <DeleteBtn>삭제</DeleteBtn>
      </TutorDetailContainer>
    );
  };
  
  export default MyDetail;