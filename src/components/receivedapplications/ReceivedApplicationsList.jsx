import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL;
const ReceivedApplicationsContainer = styled.div`
  top: 27.2rem;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.7rem;
`;

const MyClassContainer = styled.div`
  position: relative;
  width: 139.5rem;
  height: 50.8rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid #6BA6FF;
  background: #FFF;
  box-shadow: 0px 0px 2rem 0px rgba(51, 62, 94, 0.30);
`;

const IconContainer = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 0.3rem solid #606575;
  left: 3.6rem;
  top: 9.4rem;
`;

const GrayBox = styled.div`
  position: absolute;
  width: 13rem;
  height: 14.4rem;
  background: #D9D9D9;
  left: 11.1rem;
  top: 3.5rem;
`;

const ContentContainer = styled.div`
  position: absolute;
  left: 28.5rem;
  top: 7.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  align-items: center;
`;

const TitleText = styled.p`
  color: var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
      width: 110rem;
`;

const DateLabel = styled.p`
  color: #A6A6A6;
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DateText = styled.p`
  color:  var(--Sub-Color, #333E5E);
  font-family: var(--font-family-pretendard);
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 0 0 3rem;
`;

const SubmittedApplicationsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  
  div:nth-child(1) {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 0.3rem solid #606575;
    margin-left: 11.3rem;
  }

  div:nth-child(2) {
    margin-left: 3rem;
    width: 9.8rem;
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
  }

  div:nth-child(3) {
    margin-left: 8.7rem;
    color: var(--Sub-Color, #333E5E);
    text-align: center;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 60.2rem;
  }



  div:nth-child(5) {
    margin-left: 4.4rem;
    color: #A6A6A6;
    text-align: right;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const ApplicationsListContainer = styled.div`
  position: absolute;
  top: 20.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StatusBtn = styled.div`
    margin-left: 8.2rem;
    color: #606575;
    text-align: center;
    width: 14.1rem;
    height: 4.2rem;
    flex-shrink: 0;
    border-radius: 3rem;
    border: 0.2rem solid #606575;
    font-family: var(--font-family-pretendard);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  background: ${({ $isstatus }) => ($isstatus ? 'var(--Main-Color, #6BA6FF)' : 'transparent')};
  color: ${({ $isstatus }) => ($isstatus ? '#FFF' : 'var(--Sub-Color, #333E5E)')};
`;

const PageButton = styled.button`
  margin: 0 0.5rem;
  border: none;
  color: ${({ $isActive }) => ($isActive ? '#333E5E' : '#000')};
  cursor: pointer;
font-size: 2.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
font-family: var(--font-family-pretendard);
background: none;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const DisabledButton = styled(PageButton)`
cursor: not-allowed;
background-color: none;
color: #666;
`;

const ReceivedApplicationsList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [receivedApplications, setReceivedApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const userId = 1;

  useEffect(() => {
    const fetchReceivedApplications = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/apps/${userId}/received`, {
          params: { page }
        });
        const profiles = response.data.data.tutorProfiles.map(profile => ({
          ...profile,
          applications: profile.applicationList
        }));
        setReceivedApplications(profiles);
        setTotalPages(response.data.data.totalPage);
      } catch (error) {
        console.error("받은 신청서 데이터를 불러올 수 없습니다", error);
      }
    };

    fetchReceivedApplications();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleOpenModal = (appId) => {
    setSelectedApp(appId);
    setModalOpen(true);
  };

  return (
    <ReceivedApplicationsContainer>
      {receivedApplications.map((tutor, index) => (
        <MyClassContainer key={index}>
          <IconContainer></IconContainer>
          <GrayBox style={{ backgroundImage: `url(${tutor.img_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></GrayBox>
          <ContentContainer>
            <TitleText>{tutor.intro}</TitleText>
            <InfoContainer>
              <DateLabel>등록 날짜</DateLabel>
              <DateText>{new Date(tutor.created_at).toLocaleDateString()}</DateText>
            </InfoContainer>
          </ContentContainer>
          <ApplicationsListContainer>
            {tutor.applications.map((tuti, idx) => (
              <SubmittedApplicationsContainer key={idx} onClick={() => handleOpenModal(tuti.application_id)}>
                <div></div>
                <div>{tuti.user_name}</div>
                <div>{tuti.title}</div>
                <StatusBtn $isstatus={tuti.status}>
                  {tuti.status ? '수락완료' : '수락대기'}
                </StatusBtn>
                <div>{new Date(tuti.createdAt).toLocaleDateString()}</div>
              </SubmittedApplicationsContainer>
            ))}
          </ApplicationsListContainer>
        </MyClassContainer>
      ))}
      <Modal appId={selectedApp} isOpen={isModalOpen} closeModal={closeModal} />
      <PaginationContainer>
        <DisabledButton onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          이전
        </DisabledButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            $isActive={index + 1 === page}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
        <DisabledButton onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          다음
        </DisabledButton>
      </PaginationContainer>
    </ReceivedApplicationsContainer>
  );
};

export default ReceivedApplicationsList;