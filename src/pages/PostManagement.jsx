import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components'
import PostContainer from '../components/postManagement/PostContainer'
import { mydata } from '../data/mydata';
const PostManagementContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 216rem;
`
const PostManagement = () => {
    return(
        <>
         <PostManagementContainer>
         <HeaderForPages forPostManagement={true}/>
         <PostContainer data={mydata} isMyData={true} />
         </PostManagementContainer>
        </>
    )
}

export default PostManagement