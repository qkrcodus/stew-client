import React, { useState, useEffect } from 'react';
import Navbar from '../components/findTutor/Navbar'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components'
import PostContainer from '../components/postManagement/PostContainer'
import axios from 'axios';
const FindTutorContainer=styled.div`
    position: relative;
`
const ShowTutor=styled.div`
    position: absolute;
    top: 47.1rem;
    display: flex;
    width: 100%;
    justify-content: center;
`
const PageButton = styled.button`
  margin: 0 0.5rem;
  border: none;
  color: ${({ $isActive }) => ($isActive ? '#333E5E' : '#A6A6A6')};
  cursor: pointer;
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
font-family: var(--font-family-pretendard);
background: none;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
    position: absolute;
width:100%;
    top: 200rem;
`;

const DisabledButton = styled(PageButton)`
cursor: not-allowed;
background-color: none;
color: #666;
`;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const FindTutor = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [tutorData, setTutorData] = useState([]);
  const [sportsId, setSportsId] = useState(null);
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  const handleSportSelect = (id) => {
    setSportsId(id);
    setPage(1); 
  };
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tutors`, {
          params: { page, sportsId  }
        });
        setTutorData(response.data.data.tutorList);
        setTotalPages(response.data.data.totalPage);
      } catch (error) {
        console.error("튜터 데이터를 불러오지 못했습니다.", error);
      }
    };
    fetchTutors();
  }, [page, sportsId]);
  return (
    <>
    <FindTutorContainer>
    <HeaderForPages/>
    <Navbar onSportSelect={handleSportSelect} />
    <ShowTutor>
    <PostContainer data={tutorData}  isMyData={false}  />
    </ShowTutor>
    </FindTutorContainer>
       <PaginationContainer>
       <DisabledButton onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
         이전
       </DisabledButton>
       {Array.from({ length: totalPages }, (_, index) => (
         <PageButton
           key={index + 1}
           $isActive={index + 1 === page}
           onClick={() => handlePageChange(index + 1)}
         >
           {index + 1}
         </PageButton>
       ))}
       <DisabledButton onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
         다음
       </DisabledButton>
     </PaginationContainer>
     </>
  )
}
export default FindTutor