import React from 'react'
import styled from 'styled-components'
import stars from '../../assets/images/star-fill.png';
import { mydata } from '../../data/mydata'
const Overlay=styled.div`
display: ${(props)=>(props.isOpen ? 'block' : 'none')};
position: fixed;
top: 0;
background: rgba(0, 0, 0, 0.2);
z-index: 999;
width: 192rem;
height: 216rem;
`
const ModalContainer=styled.div`
display: ${(props)=>(props.isOpen ? 'flex' : 'none')};
align-items: center;
justify-content: center;
width: 192rem;
button{
${(props)=>(props.isOpen ? 'block' : 'none')};
background: white;
border: none;
    top: 6.9rem;
    left: 7.1rem;
    position: relative;
}
`
const ModalContent=styled.div`
    width: 118.9rem;
    height: 150.5rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: #FFF;
    position: absolute;
    z-index: 1000000000;
    top: -20rem;
`
const TutorThumbnail=styled.div`
    position: absolute;
    top: 19.3rem;
    display: flex;
    left: 13.1rem;
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
`
const RatingImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const Space = styled.span`
    margin-left: 2rem; 
`;
const TutorFirstLine=styled.div`
    display: flex;
    position: absolute;
    top: 50.5rem;
    left: 20.4rem;
    gap: 6.4rem;
    align-items: center;
    .infos{
        display: flex;
    flex-direction: column;
    gap: 1.2rem;}
`
const InfoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1.7rem;
    & > div:first-child {
    color: #A6A6A6;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    }
    & > div:nth-child(2){
    width: 0.2rem;
    height: 2.5rem;
    background: #A6A6A6;
    }
    & > div:nth-child(3) {
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    }
`;

const Modal = ({isOpen, closeModal,data}) => {
  
  return (
    <>
    <Overlay isOpen={isOpen} onClick={closeModal} />
    <ModalContainer isOpen={isOpen}>
        <ModalContent>
        <button onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M1.46447 1.46447C3.41709 -0.488155 6.58291 -0.488155 8.53553 1.46447L20 12.9289L31.4645 1.46447C33.4171 -0.488155 36.5829 -0.488155 38.5355 1.46447C40.4882 3.41709 40.4882 6.58291 38.5355 8.53553L27.0711 20L38.5355 31.4645C40.4882 33.4171 40.4882 36.5829 38.5355 38.5355C36.5829 40.4882 33.4171 40.4882 31.4645 38.5355L20 27.0711L8.53553 38.5355C6.58291 40.4882 3.41709 40.4882 1.46447 38.5355C-0.488155 36.5829 -0.488155 33.4171 1.46447 31.4645L12.9289 20L1.46447 8.53553C-0.488155 6.58291 -0.488155 3.41709 1.46447 1.46447Z" fill="#D9D9D9"/>
        </svg>
        </button>
        <TutorThumbnail>
        <TutorImg/>
        <div>
            <div>{data.name} / {data.type}
            <Space />
                {Array.from({ length: data.rating }, (_, index) => (
                <RatingImage key={index} src={stars} alt="stars" />
                ))} ({data.reviewNum})
            </div>
            <div>{data.experience}</div>
            <div>{data.price}</div>
        </div>
        </TutorThumbnail>
        <TutorFirstLine>
            <TutorImg>
            <svg xmlns="http://www.w3.org/2000/svg" width="191" height="191" viewBox="0 0 191 191" fill="none">
                <circle cx="95.5" cy="95.5" r="95.5" fill="#F2F3F5" />
                <g transform="translate(39 39)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
                    <path d="M9.9375 112.375C9.9375 112.375 0.625 112.375 0.625 103.062C0.625 93.75 9.9375 65.8125 56.5 65.8125C103.062 65.8125 112.375 93.75 112.375 103.062C112.375 112.375 103.062 112.375 103.062 112.375H9.9375Z" fill="#A6A6A6"/>
                    <path d="M56.5 56.5C71.9295 56.5 84.4375 43.992 84.4375 28.5625C84.4375 13.133 71.9295 0.625 56.5 0.625C41.0705 0.625 28.5625 13.133 28.5625 28.5625C28.5625 43.992 41.0705 56.5 56.5 56.5Z" fill="#A6A6A6"/>
                  </svg>
                </g>
              </svg>
            </TutorImg>
            <div className='infos'>
                <InfoRow>
                    <div>닉네임</div>
                    <div></div>
                    <div>{data.name}</div>
                </InfoRow>
                <InfoRow>
                    <div>성별</div>
                    <div></div>
                    <div>{data.gender}</div>
                </InfoRow>
                <InfoRow>
                    <div>나이</div>
                    <div></div>
                    <div>{data.age}</div>
                </InfoRow>
                <InfoRow>
                    <div>지역</div>
                    <div></div>
                    <div>{data.location}</div>
                </InfoRow>
            </div>
        </TutorFirstLine>
  
        </ModalContent>
    </ModalContainer>    
    </>
  )
}

export default Modal