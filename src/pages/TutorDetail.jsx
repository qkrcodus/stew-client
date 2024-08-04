import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import stars from '../assets/images/star-fill.png';
import LeftInfo from '../components/findTutor/LeftInfo'
import RightInfo from '../components/findTutor/RightInfo'
import ModalForm from '../components/modal/ModalForm'
import { useState , useEffect} from 'react'
import axios from 'axios';
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
const SignupBtn=styled.div`
width: 18.7rem;
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
right: 26.8rem;
`
const BASE_URL=import.meta.env.VITE_BASE_URL;

const TutorDetail = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);
    const { tutorId } = useParams();
    const [tutordetail, setTutorDetail] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log("useEffect 호출됨");
      console.log("tutorId:", tutorId);
  
      const fetchTutorDetails = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/tutors/${tutorId}`);
          setTutorDetail(response.data.data);
          console.log(response.data.data); // 응답 데이터를 로그로 출력
        } catch (error) {
          setError("튜터 데이터 디테일 불러오는데 실패하였습니다.");
          console.error(error);
        }
      };
  
      fetchTutorDetails();
    }, [tutorId]);
  
    useEffect(() => {
      console.log("TutorDetail 상태 업데이트:", tutordetail);
    }, [tutordetail]);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!tutordetail) {
      return <div>로딩 중...</div>;
    }
  
    console.log("TutorDetail 컴포넌트 렌더링됨");
  return (
    <TutorDetailContainer>
            <HeaderForPages />
            <TutorThumbnail>
                <TutorImg $imgurl={tutordetail.imgUrl} />
                <div>
                    <div>{tutordetail.name} / {tutordetail.sportName}
                        <Space />
                        {Array.from({ length: tutordetail.total_review_score }, (_, index) => (
                            <RatingImage key={index} src={stars} alt="stars" />
                        ))} ({tutordetail.total_review_count})
                    </div>
                    <div>{tutordetail.intro}</div>
                    <div>{tutordetail.price}</div>
                </div>
            </TutorThumbnail>
            <LeftInfo data={tutordetail} />
            <RightInfo data={tutordetail} />
            <SignupBtn onClick={() => { setModalOpen(true) }}>
                신청하기
            </SignupBtn>
            <ModalForm  data={tutordetail} isOpen={isModalOpen} onClose={closeModal} />
        </TutorDetailContainer>
    );
}

export default TutorDetail;