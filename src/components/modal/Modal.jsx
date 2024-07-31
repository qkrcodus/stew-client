import React from 'react'
import styled from 'styled-components'
const Overlay=styled.div`
display: ${(props)=>(props.isOpen ? 'block' : 'none')};
position: fixed;
top: 0;
background: rgba(0, 0, 0, 0.2); /* 배경을 어둡게 하는 효과 */
z-index: 999;
width: 192rem;
height: 216rem;
`
const ModalContainer=styled.div`
display: ${(props)=>(props.isOpen ? 'flex' : 'none')};
align-items: center;
justify-content: center;
width: 192rem;
height: 100%;
button{
${(props)=>(props.isOpen ? 'block' : 'none')};
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
const Modal = ({isOpen, closeModal}) => {
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
        </ModalContent>
    </ModalContainer>    
    </>
  )
}

export default Modal