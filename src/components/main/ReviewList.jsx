import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import stars from '../../assets/images/star-fill.png';
import person from '../../assets/images/person-fill.png';
const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: max-content;
  column-gap: 2.7rem;
  margin-top: 7.7rem;
  row-gap: 2.9rem;
`;

const ReviewBox = styled.div`
  width: 32.2rem;
  height: 34.1rem;
  flex-shrink: 0;
  border-radius: 3rem;
  border: 0.5rem solid var(--font-color-main);
  box-shadow: 0 0 2rem 0 rgba(51, 62, 94, 0.30);
  position: relative;
  &:nth-child(even) {
    margin-top: -7.7rem;
  }
  cursor: pointer;
`;

const Profile = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #F2F3F5;
  position: absolute;
  top: 3.9rem;
  left: 4rem;
   display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewerName = styled.div`
  position: absolute;
  left: 13.6rem;
  top: 4.8rem;
  color: #333E5E;
  font-size: 1.6rem;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
`;

const ReviewerLocation = styled.div`
  position: absolute;
  left: 13.6rem;
  top: 7.1rem;
  color: #333E5E;
  font-size: 1.6rem;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
`;

const RatingStars = styled.div`
  display: flex;
  position: absolute;
  left: 13.6rem;
  top: 9.3rem;
  & > div {
    width: 2rem;
    height: 2rem;
    background: #FFE500;
    margin-right: 0.2rem;
  }
`;

const ReviewTitle = styled.div`
  position: absolute;
  left: 4rem;
  top: 14rem;
  color: #333E5E;
  font-size: 2rem;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word;
  & > span:nth-child(2) {
    font-weight: 400;
  }
  & > span:nth-child(4) {
    font-weight: 400;
  }
`;

const ReviewContent = styled.div`
  width: 24.1rem;
  position: absolute;
  left: 4rem;
  top: 17.8rem;
  color: #333E5E;
  font-size: 1.8rem;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
  & > span:nth-child(2) {
    color: rgba(51, 62, 94, 0.50);
  }
  & > span:nth-child(3) {
    color: rgba(51, 62, 94, 0.50);
    text-decoration: underline;
  }
  line-height: 1.2;
  
`;
const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
`

const ReviewList = () => {
  const navigate = useNavigate();
  const Reviews = [
    {
      reviewer: "신유정",
      location: "동작구",
      name: "박지민",
      class: "런닝",
      age: 23,
      rating: 5,
      review: "처음에는 다이어트 목적으로 박지민 튜터님의 런닝 클래스를 신청했습니다. 3달간 튜터님과 달리면서 건강한 체중감량은 이루었고 무엇보다 런닝이라는 걱정",
      link: "/tutordetail/19"
    },
    {
      reviewer: "고영명",
      location: "동작구",
      name: "김숭실",
      class: "수영",
      age: 23,
      rating: 5,
      review: "원래 물을 무서워했는데, 숭실님에게 수영을 배우고 수영에 입문하게 되었어요! 앞으로 꾸준히 수업 받고 이번 여름에 바다에서 수영하고 싶어요. 게다가 제",
      link: "/tutordetail/21"
    },
    {
      reviewer: "유태연",
      location: "동작구",
      name: "박준호",
      class: "테니스",
      age: 21,
      rating: 5,
      review: "테니스에 예전부터 관심을 가지고 있었는데, 남자 회원들과 즐겁게 테니스를 배우면서 친구도 만나게 되었습니다. 특히 사자가 튜터님을 만나게 되어 정말 행복",
      link: "/tutordetail/16"
    },
    {
      reviewer: "이상은",
      location: "동작구",
      name: "윤재혁",
      class: "요가",
      age: 22,
      rating: 5,
      review: "처음에는 단순히 취미 운동을 만들고 싶어서 도전하게 된 튜터링이었는데, 재혁쌤이 지금 제 몸 상태에 필요한 요가 자세를 알맞게 가르쳐주셔서 건강까지 ",
      link: "/tutordetail/14"
    }
  ];

  return (
    <ReviewContainer>
      {Reviews.map((review, index) => (
        <ReviewBox key={index}  onClick={() => navigate(review.link)}>
             <Profile>
             <ProfileImage src={person} alt="Profile" />
             </Profile>
          <ReviewerName>{review.reviewer}</ReviewerName>
          <ReviewerLocation>{review.location},{review.age}세</ReviewerLocation>
          <RatingStars>
          {[...Array(review.rating)].map((_, i) => (
            <img key={i} src={stars} alt="star" />
          ))}
          </RatingStars>
          <ReviewTitle>
            <span>{review.name}</span>
            <span>님의 </span>
            <span>{review.class}</span>
            <span>클래스</span>
          </ReviewTitle>
          <ReviewContent>
            <span>{review.review}</span>
            <span> ... </span>
            <span>더보기</span>
          </ReviewContent>
        </ReviewBox>
      ))}
    </ReviewContainer>
  );
};

export default ReviewList;
