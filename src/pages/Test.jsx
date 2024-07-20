import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components';
import TestContent from '../components/TestContent';

const TestContainer=styled.div`
    background-color: var(--font-color-white);
    height: 100vh;
    box-sizing: border-box
`

const Test = () => {
  return (
    <>
    <TestContainer>
    <HeaderForPages/>
    <TestContent/>
    </TestContainer>
    </>
  )
}

export default Test