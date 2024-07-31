import React from 'react'
import styled from 'styled-components'
const Overlay=styled.div`
display: ${(props)=>(props.isOpen ? 'block' : 'none')};
position: fixed;
top: 0;
background: rgba(0, 0, 0, 0.2); /* 배경을 어둡게 하는 효과 */
z-index: 999;
width: 100%;
height: 100%;
`
const ModalContainer=styled.div`
display: ${(props)=>(props.isOpen ? 'block' : 'none')};
button{
${(props)=>(props.isOpen ? 'block' : 'none')};
}
`
const Modal = ({isOpen, closeModal}) => {
  return (
    <>
    <Overlay isOpen={isOpen} onClick={closeModal} />
    <ModalContainer isOpen={isOpen}>
        <button onClick={closeModal}>닫기</button>
    </ModalContainer>    
    </>
  )
}

export default Modal