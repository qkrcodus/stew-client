import React, { useState , useEffect} from 'react'
import styled from 'styled-components';

const LeftInfoContainer = styled.div`
  position: absolute;
  top: 59.2rem;
  left: 26.8rem;
`;

const TutorDetailContainerLeft = styled.div`
    position: relative;
    border-radius: 1rem;
    border: 0.1rem solid #6BA6FF;
    background: #FFF;
    box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.3);
    width: 66.7rem;
    height: 116.3rem;
    box-sizing: border-box;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
`;

const TutorThumbnail = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const TutorFirstLine=styled.div`
    display: flex;
    position: absolute;
    top: 9.2rem;
    left: 6.8rem;
    gap: 6.4rem;
    align-items: center;
`
const TutorSecondLine=styled.div`
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    align-items: center;
    font-weight: 500;
    line-height: normal;
    display: flex;
    gap: 1.7rem;
    position: absolute;
    top: 32rem;
    left: 4.4rem;
    & > div:nth-child(2){
    width: 20.4rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 3rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
    padding-left: 2.6rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    }
    & > div:nth-child(4){
    width: 20.4rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 3rem;
    border: 0.1rem solid var(--Sub-Color, #333E5E);
    padding-left: 2.6rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    }

`

const TutorImg = styled.div`
   width: 19.1rem;  
   height: 19.1rem;
   flex-shrink: 0;
   fill: #F2F3F5;
   box-sizing: border-box;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 44.2rem;
    left:3.9rem;
    width: 58.9rem;
    height: 29.1rem;
    flex-shrink: 0;
    border: 0.2rem solid #D9D9D9;
    h3{
    position: absolute;
    top: -1.6rem;
    left: 2.7rem;
    background: white;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 12.1rem;
    height: 3.1rem;
    padding: 0px 0.7rem;
    justify-content: center;
    align-items: center;
    }
`;

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

const Intro1=styled.div`
    & > div:first-child {
   color: var(--Main-Color, #6BA6FF);
   font-family: var(--font-family-pretendard);
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   left: 3.9rem;
   top: 2.4rem;
   }
   & > div:nth-child(2){
   width: 51.8rem;
   height: 8rem;
   flex-shrink: 0;
   border-radius: 3rem;
   border: 0.1rem solid var(--Sub-Color, #333E5E);
   display: flex;
   align-items: center;
   color: var(--Sub-Color, #333E5E);
   font-family: var(--font-family-pretendard);
   font-size: 2.4rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   left: 3.9rem;
   top: 6.2rem;
   padding-left: 2rem;
   box-sizing: border-box;
   }

`
const Intro2=styled.div`
    & > div:first-child {
   color: var(--Main-Color, #6BA6FF);
   font-family: var(--font-family-pretendard);
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   left: 3.9rem;
   top: 15.3rem;
   }
    & > div:nth-child(2){
   width: 51.8rem;
   height: 8rem;
   flex-shrink: 0;
   border-radius: 3rem;
   border: 0.1rem solid var(--Sub-Color, #333E5E);
   display: flex;
   align-items: center;
   color: var(--Sub-Color, #333E5E);
   font-family: var(--font-family-pretendard);
   font-size: 2.4rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   position: absolute;
   left: 3.9rem;
   top: 19.2rem;
   padding-left: 2rem;
   box-sizing: border-box;
    }

`

const BioContainer = styled.div`
    position: absolute;
  
    top: 78.9rem;
    left: 3.9rem;
    width: 58.9rem;
    height: 31.7rem;
    border: 0.2rem solid #D9D9D9;
    textarea {
        width: 100%;
        height: 30rem;
        padding: 3.7rem;
        box-sizing: border-box;
        resize: none;
        border: none;
        color: var(--Sub-Color, #333E5E);
        font-family: var(--font-family-pretendard);
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        pointer-events: none; 
          overflow: hidden;
    }
    textarea:focus {
    outline: none; 
    }
    h3{
    position: absolute;
    top: -1.6rem;
    left: 2.7rem;
    background: white;
    color: var(--Sub-Color, #333E5E);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 12.1rem;
    height: 3.1rem;
    padding: 0px 0.7rem;
    justify-content: center;
    align-items: center;
    }
`;

const CharCount = styled.div`
    color: #A6A6A6;
    text-align: right;
    font-family: var(--font-family-pretendard);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 28.2rem;
    left: 47.6rem;
`;

const LeftInfo = ({data}) => {
    const tutor = data;
    console.log("leftinfo",tutor);
    const [self_intro, setSelfIntro] = useState(tutor.self_intro);
    const [charCount, setCharCount] = useState(tutor.intro.length);
    useEffect(() => {
        if (tutor) {
          setSelfIntro(tutor.self_intro);
          setCharCount(tutor.intro.length);
        }
      }, [tutor]);
    
    const handleSelfIntroChange = (e) => {
        setSelfIntro(e.target.value);
        setCharCount(e.target.value.length);
    };
  return (
    <LeftInfoContainer>
    <TutorDetailContainerLeft>
    <TutorThumbnail>
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
            <div>
                <InfoRow>
                    <div>닉네임</div>
                    <div></div>
                    <div>{tutor.name}</div>
                </InfoRow>
                <InfoRow>
                    <div>성별</div>
                    <div></div>
                    <div>{tutor.gender}</div>
                </InfoRow>
                <InfoRow>
                    <div>나이</div>
                    <div></div>
                    <div>{tutor.age}</div>
                </InfoRow>
                <InfoRow>
                    <div>지역</div>
                    <div></div>
                    <div>{tutor.location}</div>
                </InfoRow>
            </div>
        </TutorFirstLine>
        <TutorSecondLine>
            <div>종목</div>
            <div>{tutor.sportName}</div>
            <div>가격</div>
            <div>{tutor.price}</div>
        </TutorSecondLine>
    </TutorThumbnail>
    <InfoContainer>
    <h3>한줄소개</h3>
        <Intro1>
            <div>경력사항</div>
            <div>{tutor.career}</div>
        </Intro1>
        <Intro2>
            <div>소개</div>
            <div>{tutor.intro}</div>
        </Intro2>
    </InfoContainer>
    <BioContainer>
    <h3>자기소개</h3>
        <textarea
            value={self_intro}
            onChange={handleSelfIntroChange}
            maxLength={140}
        />
        <CharCount>({charCount}/140)</CharCount>
    </BioContainer>
    </TutorDetailContainerLeft>
    </LeftInfoContainer>
  )
}

export default LeftInfo