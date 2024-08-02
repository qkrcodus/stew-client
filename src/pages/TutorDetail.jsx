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
`
const TutorImg=styled.div`
    width: 9.7rem;
    height: 10.7rem;
    flex-shrink: 0;
    background: #D9D9D9;
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

const TutorDetail = () => {
  //modal 
  const [isModalOpen,setModalOpen]=useState(false);
  const closeModal= () => setModalOpen(false);
  //api 연동
  const [tutordetail,setTutorDetail]=useState([]);
  const [error,setError]=useState(null);
  const {tutorId}=useParams();
  const fetchTutorDetails= async()=>{
    setError(null);
    try{
        const response =await axios.get(`${BASE_URL}/tutors/${tutorId}`)
        if( response.status===200){
            setTutorDetail(Array.isArray(response.data) ? response.data :[]);
        }
        }catch(error){
            if( error.response && error.response.status === 404){
                setError('튜터를 찾을 수 없습니다');
            }else{
                setError('튜터 디테일을 불러오는데 실패했습니다');
            }
        }
    }

    useEffect(()=>{
        fetchTutorDetails();
    },[tutorId]);
  
  return (
    <TutorDetailContainer>
    <HeaderForPages/>
    <TutorThumbnail>
        <TutorImg/>
        <div>
            <div>{tutordetail.name} / {tutordetail.sports_id}
            <Space />
                {Array.from({ length: tutordetail.review_score }, (_, index) => (
                <RatingImage key={index} src={stars} alt="stars" />
                ))} ({tutordetail.total_review_count})
            </div>
            <div>{tutordetail.self_intro}</div>
            <div>{tutordetail.price}</div>
        </div>
    </TutorThumbnail>
    <LeftInfo data={tutordetail}/>
    <RightInfo data={tutordetail}/>
    <SignupBtn onClick={()=>{setModalOpen(true)}}>
        신청하기
    </SignupBtn>
    <ModalForm data={tutordetail} isOpen={isModalOpen} closeModal={closeModal}/>
    </TutorDetailContainer>
  )
}

export default TutorDetail