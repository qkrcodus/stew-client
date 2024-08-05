import React from 'react'
import HeaderForPages from '../components/HeaderForPages'
import Navbar1 from '../components/sentapplications/Navbar1'
import styled from 'styled-components'
import axios from 'axios';
import { useEffect, useState } from 'react';
import SentApplicationsList from '../components/sentapplications/SentApplicationsList.jsx'
const SentApplicationsContainer=styled.div`
    width: 155.4rem;
    height: 153.9rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.1rem solid var(--Main-Color, #6BA6FF);
    background: #FFF;
    box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.30);
    position: absolute;
    top: 34rem;
    right: 18.3rem;
`
const BottomofHeader=styled.div`
background: #ECF1F9;
height: 199.9rem;
`
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SentApplications = () => {
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const userId = 1;

  const closeModal = () => setModalOpen(false);
  const openModal = (appId) => {
    setSelectedAppId(appId);
    setModalOpen(true);
  };

  useEffect(() => {
    const fetchSentApplications = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/apps/${userId}/sent`, {
          params: { page },
        });
        setApplications(response.data.data.applicationList);
        setTotalPages(response.data.data.totalPage);
      } catch (error) {
        console.error('보낸 신청서 데이터 불러오는데 실패했습니다', error);
      }
    };

    fetchSentApplications();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSelectApplication = (appId) => {
    setSelectedApplications((prevSelected) => {
      if (prevSelected.includes(appId)) {
        return prevSelected.filter((id) => id !== appId);
      } else {
        return [...prevSelected, appId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedApplications.length === applications.length) {
      setSelectedApplications([]);
    } else {
      setSelectedApplications(applications.map((app) => app.application_id));
    }
  };

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(
        selectedApplications.map((appId) =>
          axios.delete(`${BASE_URL}/apps/delete/${appId}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
        )
      );
      //삭제후 업데이트 
      const response = await axios.get(`${BASE_URL}/apps/${userId}/sent`, {
        params: { page },
      });
      setApplications(response.data.data.applicationList);
      setTotalPages(response.data.data.totalPage);
    } catch (error) {
      console.error('Failed to delete selected applications', error);
    }
    
  };
  return (
    <>
      <HeaderForPages forSentApplications={true} />
      <BottomofHeader>
        <SentApplicationsContainer>
          <Navbar1 handleSelectAll={handleSelectAll} handleDeleteSelected={handleDeleteSelected} />
          <SentApplicationsList
            applications={applications}
            selectedApplications={selectedApplications}
            handleSelectApplication={handleSelectApplication}
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            selectedAppId={selectedAppId}
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </SentApplicationsContainer>
      </BottomofHeader>
    </>
  );
};

export default SentApplications;