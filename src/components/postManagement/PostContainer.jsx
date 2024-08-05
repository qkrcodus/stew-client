import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import stars from '../../assets/images/star-fill.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL;
const PostBox = styled.div`
  position: absolute;
  top: 30rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6.4rem;
  justify-items: center;
`;
const BoxContent = styled.div`
  position: relative;
`;

const Rectangle = styled.div`
  border: 0.3rem solid;
  border-color: #6ba6ff;
  border-radius: 3.731rem;
  box-shadow: 0px 0px 1.492rem #333e5e4c;
  height: 32.9rem;
  left: 0;
  top: 0;
  width: 37.9rem;
`;

const Thumbnail = styled.div`
  position: absolute;
  top: 3.4rem;
  left: 3.77rem;
  width: 10.2rem; 
  height: 14.4rem; 
  flex-shrink: 0;
  border-radius: 3rem; 
  background-image: url(${(props) => props.$imgurl});
  background-size: cover;
    background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.div`
  position: absolute;
  top: 3.7rem;
  left: 15.67rem;
  border-radius: 3rem;
  color: var(--Sub-Color, #333e5e);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5.7rem;
`;

const Type = styled.span`
  width: 8.1rem;
  height: 3.4323rem; 
  flex-shrink: 0;
  border-radius: 2.2384rem; 
  background: var(--Main-Color, #6ba6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Sub-Color, #333E5E);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Info = styled.div`
  position: absolute;
  top: 6.9rem;
  left: 15.87rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Sub-Color, #333e5e);
  font-family: Pretendard;
  font-size: 2rem; 
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 15.4rem;
  left: 15.57rem;
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  div {
    color: var(--Sub-Color, #333E5E);
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;    
  }
`;

const RatingImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const Line = styled.div`
  width: 31.0611rem; 
  height: 0.2rem;
  background: #A6A6A6;
  position: absolute;
  top: 19.8rem;
  left: 50%; 
  transform: translateX(-50%);
`;

const Comment = styled.div`
  position: absolute;
  top: 21.4rem;
  display: flex;
  div { 
    width: 29.258rem;
    height: 4.9246rem; 
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--Sub-Color, #333E5E);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Price = styled.div`
  position: absolute;
  top: 27.9rem;
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const PlusButton = styled(Rectangle)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6ba6ff;
  cursor: pointer;
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  background-color: ${({ isActive }) => (isActive ? '#6BA6FF' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DisabledButton = styled(PageButton)`
  cursor: not-allowed;
  background-color: #ddd;
  color: #666;
`;

const PostContainer = ({ data, isMyData, onPageChange, currentPage, totalPages, userId }) => {
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMyData) {
      const fetchTutors = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/users/${userId}/tutors`, {
            params: { page: currentPage }
          });
          setTutors(response.data.data.tutorList);
        } catch (error) {
          setError('Failed to load tutors');
        }
      };

      fetchTutors();
    } else {
      console.log("setTutors에 전달된 data:", data);
      setTutors(data);
    }
  }, [data, isMyData, userId, currentPage]);

  const handleBoxClick = (tutorId) => {
    if (isMyData) {
      navigate(`/mydetail/${tutorId}`);
    } else {
      navigate(`/tutordetail/${tutorId}`);
    }
  };

  const handlePlusButtonClick = () => {
    navigate(`/createmyclass/${userId}`);
  };

  const dataWithPlus = isMyData ? [...tutors, { name: 'plus', id: 'plus' }] : tutors;

  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageButtons = () => {
      const buttons = [];
      const maxButtons = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
      let endPage = startPage + maxButtons - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxButtons + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <PageButton
            key={i}
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PageButton>
        );
      }

      return buttons;
    };

    return (
      <PaginationContainer>
        <DisabledButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </DisabledButton>
        {getPageButtons()}
        <DisabledButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </DisabledButton>
      </PaginationContainer>
    );
  };

  return (
    <>
      <PostBox>
      {dataWithPlus.map((box) => {
          if (box.name === 'plus') {
            return (
              <PlusButton key={box.tutorId} onClick={handlePlusButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="4.1rem" height="4.1rem" viewBox="0 0 41 41" fill="none">
                  <path d="M20.5 0.5C21.8807 0.5 23 1.61929 23 3V18H38C39.3807 18 40.5 19.1193 40.5 20.5C40.5 21.8807 39.3807 23 38 23H23V38C23 39.3807 21.8807 40.5 20.5 40.5C19.1193 40.5 18 39.3807 18 38V23H3C1.61929 23 0.5 21.8807 0.5 20.5C0.5 19.1193 1.61929 18 3 18H18V3C18 1.61929 19.1193 0.5 20.5 0.5Z" fill="#6BA6FF"/>
                </svg>
              </PlusButton>
            );
          } else {
            // +버튼 아닐때 , 기준 carrer필드 분리
            const [careerBeforeComma, careerAfterComma] = box.career.split(',');

            return (
              <Rectangle key={box.tutorId} onClick={() => handleBoxClick(box.tutorId)}>
                <BoxContent>
                  <Thumbnail $imgurl={box.imgUrl}/>
                  <Name>{box.name}<Type>{box.sportName}</Type></Name>
                  <Info>
                    <div>{box.location}</div>
                    <div>{careerBeforeComma}</div>
                    <div>{careerAfterComma}</div>
                  </Info>
                  <RatingContainer>
                    {Array.from({ length: box.score }, (_, index) => (
                      <RatingImage key={index} src={stars} alt="stars" />
                    ))}
                    <div>({box.reviewCount})</div>
                  </RatingContainer>
                  <Line />
                  <Comment>
                    {/* 30자까지만 표시 나머진 ...으로  */}
                  <div>
                  {box.intro.length > 32 ? `${box.intro.substring(0, 30)} ...` : box.intro}
                  </div>
                  </Comment>
                  <Price><div>{box.price}~</div></Price>
                </BoxContent>
              </Rectangle>
            );
          }
        })}
      </PostBox>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default PostContainer;
