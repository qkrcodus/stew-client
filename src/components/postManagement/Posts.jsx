import React from 'react'
import HeaderForPages from '../HeaderForPages'
import styled from 'styled-components'
import PostContainer from './PostContainer'

const PostManagementContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Posts = () => {
  return (
    <PostManagementContainer>
    <HeaderForPages forPostManagement={true}/>
    <PostContainer/>
    </PostManagementContainer>
  )
}

export default Posts