import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import styled from 'styled-components'
import PostContainer from '../components/postManagement/PostContainer'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PostManagementContainer=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 216rem;
`
const PostManagement = () => {
    //상태관리
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const userId = 1; // 임의 설정
    const BASE_URL = 'https://api.likelion-stew.shop/api';

    const fetchData = async (page) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${userId}/tutors`, {
                params: { page }
            });
            setData(response.data.data.tutorList); // 데이터 설정
            setTotalPages(response.data.data.totalPage); // 총 페이지 수 설정
        } catch (error) {
            setError('Failed to load data');
            console.error("데이터 불러오기 실패: ", error);
        }
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return(
        <>
         <PostManagementContainer>
         <HeaderForPages forPostManagement={true}  userId={userId}/>
         <PostContainer userId={userId} data={data} isMyData={true} onPageChange={handlePageChange} currentPage={page} totalPages={totalPages} />
         </PostManagementContainer>
        </>
    )
}

export default PostManagement