import React from 'react'
import styled from 'styled-components'
import stars from '../../assets/images/star-fill.png';
import { useNavigate } from 'react-router-dom';

const PostBox=styled.div`
    position: absolute;
    top: 30rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6.4rem;
    justify-items: center;
`
const BoxContent = styled.div`
  position: relative;
`
const Rectangle = styled.div`
  border: 0.3rem solid;
  border-color: #6ba6ff;
  border-radius: 3.731rem;
  box-shadow: 0px 0px 1.492rem #333e5e4c;
  height: 32.9rem;
  left: 0;
  top: 0;
  width: 37.9rem;
`
const Thumbnail = styled.div`
  position: absolute;
  top: 3.4rem;
  left: 3.77rem;
  width: 10.2rem; 
  height: 14.4rem; 
  flex-shrink: 0;
  border-radius: 3rem; 
  background: #d9d9d9;
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
  gap: 1.5rem;
`;

const Type = styled.span`
  width: 7.0482rem;
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
  div{
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

const Line =styled.div`
  width: 31.0611rem; 
  height: 0.2rem;
  background: #A6A6A6;
  position: absolute;
  top: 19.8rem;
  left: 50%; 
  transform: translateX(-50%);

`
const Comment=styled.div`
  position: absolute;
  top: 21.4rem;
  display: flex;
  div{ 
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
`
const Price = styled.div`
  position: absolute;
  top: 27.9rem;
  display: flex;
  justify-content: center;
  width: 100%;
  div{
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: Pretendard;
    font-size: 2rem;
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
  svg{
    width: 3.5rem;
    height: 3.5rem;
  }
`
const PostContainer = () => {
    const navigate=useNavigate();
    const boxes = [
        { id: 1, name: '김숭실 튜터', type: '헬스', location: '서울시 성북구', activity: '헬스 5년차', weight: '2개월 동안 10kg 감량', rating: 3, reviewNum: 4, comment: '강박 없이! 스트레스 없이! 재미있게 운동 시작해봐요~' ,price: '10,000원'},
        { id: 2, name: '박숭실 튜터', type: '수영', location: '서울시 성북구', activity: '헬스 5년차', weight: '2개월 동안 10kg 감량', rating: 4, reviewNum: 42, comment: '강박 없이! 스트레스 없이! 재미있게 운동 시작해봐요~' ,price: '10,000원' },
        { id: 3, name: '최숭실 튜터', type: '수영', location: '서울시 성북구', activity: '헬스 5년차', weight: '2개월 동안 10kg 감량', rating: 2, reviewNum: 420, comment: '강박 없이! 스트레스 없이! 재미있게 운동 시작해봐요~' ,price: '10,000원' },
        { id: 4, name: 'plus', location: '', activity: '', weight: '', rating: 0, price: '' },
    ]
    const handleBoxClick=(id)=>{
        navigate(`/tutordetail/${id}`);
    }
  return (
    <PostBox>
    {boxes.map((box)=>
     box.name === 'plus' ? (
        <PlusButton key={box.id}>
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
        <path d="M20.5 0.5C21.8807 0.5 23 1.61929 23 3V18H38C39.3807 18 40.5 19.1193 40.5 20.5C40.5 21.8807 39.3807 23 38 23H23V38C23 39.3807 21.8807 40.5 20.5 40.5C19.1193 40.5 18 39.3807 18 38V23H3C1.61929 23 0.5 21.8807 0.5 20.5C0.5 19.1193 1.61929 18 3 18H18V3C18 1.61929 19.1193 0.5 20.5 0.5Z" fill="#6BA6FF"/>
        </svg>
        </PlusButton>
      ) : 
      ( <Rectangle key={box.id} onClick={()=>handleBoxClick(box.id)}>
        <BoxContent>
            <Thumbnail />
            <Name>{box.name}<Type>{box.type}</Type></Name>
            <Info>
                <div>{box.location}</div>
                <div>{box.activity}</div>
                <div>{box.weight}</div>
            </Info>
            <RatingContainer>
                {Array.from({ length: box.rating }, (_, index) => (
                    <RatingImage key={index} src={stars} alt="stars" />
                ))}
                <div>({box.reviewNum})</div>
            </RatingContainer>
            <Line></Line>
            <Comment>
                <div>{box.comment}</div>
            </Comment>
            <Price><div>{box.price}~</div></Price>
        </BoxContent>
        </Rectangle>
    ))}
</PostBox>
  )
}

export default PostContainer