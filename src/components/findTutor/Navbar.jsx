import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  position: absolute;
  top: 24.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NavbarContainer = styled.div`
  width: 136.2rem;
  height: 7rem;
  flex-shrink: 0;
  border-top: 0.2rem solid #a6a6a6;
  border-bottom: 0.2rem solid #a6a6a6;
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 0;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#333e5e' : '#a6a6a6')};
`;

const SubmenuContainer = styled.div`
  width: 136.2rem;
  height: 22.5rem;
  flex-shrink: 0;
  justify-content: flex-end;
  border-radius: 0 0 3rem 3rem;
  background: #fff;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Submenu = styled.div`
  display: flex;
  margin-right: 1.4rem;
  & > div {
    margin-right: 2.5rem;
  }
`;

const SubmenuItem = styled.div`
  width: 14.2rem;
  height: 3.3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#333e5e' : '#a6a6a6')};
`;

const FilterContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: right;
  position: absolute;
  top: 35.4rem;
  div {
    display: flex;
    justify-content: right;
  }
  cursor: pointer;
`;

const Filter = styled.div`
  color: var(--Sub-Color, #333e5e);
  text-align: center;
  font-family: Pretendard;
  font-size: 24.558px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;
  &:nth-child(1) {
    margin-right: 7.864rem;
  }
  &:nth-child(2) {
    margin-right: 7.864rem;
  }
  &:nth-child(3) {
    margin-right: 65.064rem;
  }
`;

const Line = styled.div`
  width: 136.2rem;
  height: 0.3rem;
  background: #ddd;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 5rem;

  background: white;
  border: 0.1rem solid #ddd;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 1000;
  width: 20rem;  

`;

const DropdownItem = styled.div`
  padding: 1.2rem 2rem; 
  cursor: pointer;
  font-size: 2.3rem; 
font-family: var(--font-family-pretendard);
  &:hover {
    background: #f0f0f0;
  }
`;

const Navbar = ({ onSportSelect, selectedSport, onSortChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState('최신순');

  const handleSportSelect = (id) => {
    onSportSelect(id);
  };

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption);
    setSelectedSortOption(sortOption);
    setActiveDropdown(null);  
  };

  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <NavItem isSelected={selectedSport === null} onClick={() => handleSportSelect(null)}>
            전체보기
          </NavItem>
          <NavItem>구기 종목</NavItem>
          <NavItem>라켓 스포츠</NavItem>
          <NavItem>수상 스포츠</NavItem>
          <NavItem>생활 스포츠</NavItem>
          <NavItem>육상 스포츠</NavItem>
          <NavItem>올림픽 스포츠</NavItem>
          <NavItem>취미 스포츠</NavItem>
        </NavbarContainer>
        <SubmenuContainer>
          <Submenu>
            <div>
              <SubmenuItem isSelected={selectedSport === 1} onClick={() => handleSportSelect(1)}>
                축구
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 3} onClick={() => handleSportSelect(3)}>
                농구
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 4} onClick={() => handleSportSelect(4)}>
                배구
              </SubmenuItem>
            </div>
            <div>
              <SubmenuItem isSelected={selectedSport === 5} onClick={() => handleSportSelect(5)}>
                배드민턴
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 6} onClick={() => handleSportSelect(6)}>
                테니스
              </SubmenuItem>
            </div>
            <div>
              <SubmenuItem isSelected={selectedSport === 7} onClick={() => handleSportSelect(7)}>
                수영
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 8} onClick={() => handleSportSelect(8)}>
                서핑
              </SubmenuItem>
            </div>
            <div>
              <SubmenuItem isSelected={selectedSport === 9} onClick={() => handleSportSelect(9)}>
                헬스
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 10} onClick={() => handleSportSelect(10)}>
                요가
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 11} onClick={() => handleSportSelect(11)}>
                필라테스
              </SubmenuItem>
            </div>
            <div>
              <SubmenuItem isSelected={selectedSport === 12} onClick={() => handleSportSelect(12)}>
                러닝
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 13} onClick={() => handleSportSelect(13)}>
                하이킹
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 14} onClick={() => handleSportSelect(14)}>
                사이클
              </SubmenuItem>
            </div>
            <div>
              <SubmenuItem isSelected={selectedSport === 17} onClick={() => handleSportSelect(17)}>
                태권도
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 18} onClick={() => handleSportSelect(18)}>
                펜싱
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 19} onClick={() => handleSportSelect(19)}>
                양궁
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 20} onClick={() => handleSportSelect(20)}>
                사격
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 21} onClick={() => handleSportSelect(21)}>
                피겨
              </SubmenuItem>
            </div>
            <div>
              <SubmenuItem isSelected={selectedSport === 15} onClick={() => handleSportSelect(15)}>
                댄스
              </SubmenuItem>
              <SubmenuItem isSelected={selectedSport === 16} onClick={() => handleSportSelect(16)}>
                클라이밍
              </SubmenuItem>
            </div>
          </Submenu>
        </SubmenuContainer>
        <FilterContainer>
          <div>
            <Filter onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}>
              {selectedSortOption}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M6.90652 4.93201C6.90652 4.38707 6.46476 3.94531 5.91982 3.94531C5.37488 3.94531 4.93312 4.38707 4.93312 4.93201L4.93312 22.2839L2.67073 20.0215C2.2854 19.6362 1.66066 19.6362 1.27533 20.0215C0.889996 20.4068 0.889996 21.0316 1.27533 21.4169L5.22045 25.362L5.23512 25.3764C5.32665 25.4647 5.43104 25.5319 5.54213 25.5778C5.65847 25.6261 5.78603 25.6527 5.91982 25.6527C6.05361 25.6527 6.18117 25.6261 6.29751 25.5778C6.41389 25.5297 6.52292 25.4583 6.61752 25.3637L10.5643 21.4169C10.9496 21.0316 10.9496 20.4068 10.5643 20.0215C10.179 19.6362 9.55424 19.6362 9.16892 20.0215L6.90652 22.2839L6.90652 4.93201Z"
                  fill="#333E5E"
                />
                <path
                  d="M13.8134 6.90541C13.8134 6.36047 14.2552 5.91871 14.8001 5.91871H28.6139C29.1588 5.91871 29.6006 6.36047 29.6006 6.90541C29.6006 7.45035 29.1588 7.89211 28.6139 7.89211H14.8001C14.2552 7.89211 13.8134 7.45035 13.8134 6.90541Z"
                  fill="#333E5E"
                />
                <path
                  d="M14.8001 11.8389C14.2552 11.8389 13.8134 12.2807 13.8134 12.8256C13.8134 13.3705 14.2552 13.8123 14.8001 13.8123H24.6671C25.212 13.8123 25.6538 13.3705 25.6538 12.8256C25.6538 12.2807 25.212 11.8389 24.6671 11.8389H14.8001Z"
                  fill="#333E5E"
                />
                <path
                  d="M14.8001 17.7591C14.2552 17.7591 13.8134 18.2009 13.8134 18.7458C13.8134 19.2907 14.2552 19.7325 14.8001 19.7325H20.7203C21.2652 19.7325 21.707 19.2907 21.707 18.7458C21.707 18.2009 21.2652 17.7591 20.7203 17.7591H14.8001Z"
                  fill="#333E5E"
                />
                <path
                  d="M14.8001 23.6793C14.2552 23.6793 13.8134 24.121 13.8134 24.666C13.8134 25.2109 14.2552 25.6527 14.8001 25.6527H16.7735C17.3184 25.6527 17.7602 25.2109 17.7602 24.666C17.7602 24.121 17.3184 23.6793 16.7735 23.6793H14.8001Z"
                  fill="#333E5E"
                />
              </svg>
            </Filter>
            {activeDropdown === 0 && (
              <DropdownMenu index={0}>
                <DropdownItem onClick={() => handleSortChange('최신순')}>최신순</DropdownItem>
                <DropdownItem onClick={() => handleSortChange('낮은가격순')}>낮은가격순</DropdownItem>
                <DropdownItem onClick={() => handleSortChange('높은가격순')}>높은가격순</DropdownItem>
                <DropdownItem onClick={() => handleSortChange('낮은평점순')}>낮은평점순</DropdownItem>
                <DropdownItem onClick={() => handleSortChange('높은평점순')}>높은평점순</DropdownItem>
              </DropdownMenu>
            )}
          </div>
          <Line></Line>
        </FilterContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
