import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const TestItem=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        position: absolute;
        top: 19.4rem;
        font-family: var(--font-family-pretendard);
        font-size: 3.6rem;
        font-weight: var(--font-weight-bold);
        text-align: center;
        color: var(--font-color-sub);
    }
`
const Buttonwrapper=styled.div`
    display:flex;
    gap: 5.5rem;
    position: absolute;
    top: 29.3rem;
`
const ButtonAnswer=styled.div`
    cursor: pointer;
    background: ${(props) => (props.$isSelected ? '#BED6F9' : '#D9D9D9')};
    border-radius: 3rem;
    border:  ${(props) => (props.$isSelected ? '0.3rem solid var(--Main-Color, #6BA6FF)' : 'none')};
    color: rgba(51, 62, 94, 0.80);
    text-align: center;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: var(--font-weight-bold);
    width: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
    line-height: 1.2;
    top: ${(props)=>{if(props.$isSpecialStep){ return '34.9rem';} else if(props.$isFinalStep){return '20rem';}else{return '14.7rem';}}};
    height: ${(props)=>(props.$isSpecialStep ? '34.9rem' :'14.7rem')};
`
const Button=styled.div`
    cursor: pointer;
    width: 28rem;
    height: 8rem;
    border-radius: 3rem;
    background: ${(props) => (props.$isAnswerSelected ? 'var(--Main-Color, #6BA6FF)' : '#D9D9D9')};
    position: absolute;
    top: 74.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--font-color-white);
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-weight: var(--font-weight-bold);

    
`
const TestContent = () => {
    const qnas=[
        {question:'나는 주로', answer1:'혼자 운동하는\n것을 선호한다',answer2:'친구 또는\n파트너와\n운동하는 것을\n선호한다'},
        {question:'종종 운동을 통해 변화된 나의 이상적인 모습을 상상하곤 한다', answer1:'YES',answer2:'NO'},
        {question:'운동은 결과보다 과정에 의미가 있다고 생각한다', answer1:'YES',answer2:'NO'},
        {question:'내가 추구하는 운동 루틴은', answer1:'체계적으로\n일정 계획',answer2:'원할때마다\n자유롭게'},  
    ];
    const [currentStep,setCurrentStep]=useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const navigate=useNavigate();
    const handleNext=()=>{
        if( currentStep <qnas.length -1){
            setCurrentStep(currentStep+1);
            setSelectedAnswer(null);
        }else{
            navigate('/testfinish');
        }
    }
    const handleAnswerClick = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };
    const isSpecialStep= currentStep===0 || currentStep===3;
   
  return (
    <>
    <TestItem key={currentStep}>
        <h1 className="question">{qnas[currentStep].question}</h1>
        <Buttonwrapper>
        <ButtonAnswer $isSpecialStep={isSpecialStep}
          $isSelected={selectedAnswer === 1}
          onClick={() => handleAnswerClick(1)}>
            {qnas[currentStep].answer1.split('\n').map((line,index)=>(
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </ButtonAnswer>
        <ButtonAnswer $isSpecialStep={isSpecialStep}
          $isSelected={selectedAnswer === 2}
          onClick={() => handleAnswerClick(2)}>
            {qnas[currentStep].answer2.split('\n').map((line,index)=>(
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </ButtonAnswer>
        </Buttonwrapper>
        <Button  $isAnswerSelected={selectedAnswer !== null} onClick={handleNext}>
        <div className='test-next-btn' >다음</div>
        </Button>
       
        
    </TestItem>

    </>
  )
}

export default TestContent