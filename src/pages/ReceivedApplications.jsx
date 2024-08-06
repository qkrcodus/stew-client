import React, { useState, useEffect } from 'react';
import HeaderForPages from '../components/HeaderForPages';
import Navbar2 from '../components/receivedapplications/Navbar2';
import styled from 'styled-components';
import ReceivedApplicationsList from '../components/receivedapplications/ReceivedApplicationsList';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ReceivedApplicationsContainer = styled.div`
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
`;

const BottomofHeader = styled.div`
  background: #ECF1F9;
  height: 199.9rem;
`;

const ReceivedApplications = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const userId = 1;

  useEffect(() => {
    const fetchReceivedApplications = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/apps/${userId}/received`, {
          params: { page },
        });
        const profiles = response.data.data.tutorProfiles.map(profile => ({
          ...profile,
          applications: profile.applicationList,
        }));
        setApplications(profiles);
        setTotalPages(response.data.data.totalPage);
      } catch (error) {
        console.error("받은 신청서 데이터를 불러올 수 없습니다", error);
      }
    };

    fetchReceivedApplications();
  }, [page]);

  const handleSelectAll = () => {
    if (selectedIds.length === applications.flatMap(app => app.applications).length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(applications.flatMap(app => app.applications.map(a => a.application_id)));
    }
  };

  const handleAcceptAll = async () => {
    try {
      await Promise.all(selectedIds.map(appId => 
        axios.patch(`${BASE_URL}/apps/patch/${appId}`)
      ));
      setSelectedIds([]);
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error("신청서 수락 중 에러가 발생했습니다.", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <HeaderForPages forReceivedApplications={true} />
      <BottomofHeader>
        <ReceivedApplicationsContainer>
          <Navbar2 onSelectAll={handleSelectAll} onAcceptAll={handleAcceptAll} />
          <ReceivedApplicationsList
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            applications={applications}
            handlePageChange={handlePageChange}
            page={page}
            totalPages={totalPages}
          />
        </ReceivedApplicationsContainer>
      </BottomofHeader>
    </>
  );
};

export default ReceivedApplications;
