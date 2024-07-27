import React from 'react'
import Navbar from '../components/findTutor/Navbar'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components'
import PostContainer from '../components/postManagement/PostContainer'
import { tutorData } from '../data/tutordata';
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
const FindTutor = () => {
  return (
    <FindTutorContainer>
    <HeaderForPages/>
    <Navbar/>
    <ShowTutor>
    <PostContainer data={tutorData} />
    </ShowTutor>
    </FindTutorContainer>
  )
}
export default FindTutor