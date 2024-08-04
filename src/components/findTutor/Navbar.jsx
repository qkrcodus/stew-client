import React, { useState } from 'react';
import styled from 'styled-components';

const Navbarwrapper = styled.div`
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
  color: #a6a6a6;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
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
  & > div:nth-child(6) {
    margin-right: 4.5rem;
  }
  & > div:nth-child(5) {
    margin-right: 4.5rem;
  }
  & > div:nth-child(4) {
    margin-right: 3rem;
  }
  & > div:nth-child(3) {
    margin-right: 3.5rem;
  }
  & > div:nth-child(2) {
    margin-right: 2.9rem;
  }
  & > div:nth-child(1) {
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
  color: ${({isSelected})=>(isSelected ?  '#333e5e' : '#a6a6a6')}
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35.4rem;
  div {
    display: flex;
    justify-content: center;
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
  left: ${({index})=> `calc(30rem+${index*27}rem)`};
  background: white;
  border: 0.1rem solid #ddd;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const SelectedItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 50.9rem;
  margin-left: 30rem;
  
`;

const SelectedItem = styled.div`
  width: 13.9rem;
  height: 3.7rem;
  flex-shrink: 0;
  border-radius: 2.6312rem;
  border: 0.1754rem solid var(--Sub-Color, #333E5E);
  color: var(--Sub-Color, #333E5E);
  text-align: center;
  font-family: Pretendard;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ onSportSelect , selectedSport}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const districts = [
    "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구",
    "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구",
    "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"
  ];

  const filters = [
    {
      name: "지역 필터",
      options: districts
    },
    {
      name: "가격 필터",
      options: ["1만원", "2만원", "3만원", "4만원", "5만원"]
    },
    {
      name: "성별 필터",
      options: ["여자", "남자"]
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSelect = (filterIndex, option) => {
    setSelectedItems([...selectedItems, { filterIndex, option }]);
    setActiveDropdown(null);
  };

  const handleSportSelect = (id) => {
    onSportSelect(id);
  };
  return (
    <>
    <Navbarwrapper>
      <NavbarContainer>
        <NavItem>전체보기</NavItem>
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
        <SubmenuItem isSelected={selectedSport === 1} onClick={() => handleSportSelect(1)}>축구</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 3} onClick={() => handleSportSelect(3)}>농구</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 4} onClick={() => handleSportSelect(4)}>배구</SubmenuItem>
      </div>
      <div>
        <SubmenuItem isSelected={selectedSport === 5} onClick={() => handleSportSelect(5)}>배드민턴</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 6} onClick={() => handleSportSelect(6)}>테니스</SubmenuItem>
      </div>
      <div>
        <SubmenuItem isSelected={selectedSport === 7} onClick={() => handleSportSelect(7)}>수영</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 8} onClick={() => handleSportSelect(8)}>서핑</SubmenuItem>
      </div>
      <div>
        <SubmenuItem isSelected={selectedSport === 9} onClick={() => handleSportSelect(9)}>헬스</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 10} onClick={() => handleSportSelect(10)}>요가</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 11} onClick={() => handleSportSelect(11)}>필라테스</SubmenuItem>
      </div>
      <div>
        <SubmenuItem isSelected={selectedSport === 12} onClick={() => handleSportSelect(12)}>러닝</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 13} onClick={() => handleSportSelect(13)}>하이킹</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 14} onClick={() => handleSportSelect(14)}>사이클</SubmenuItem>
      </div>
      <div>
            <SubmenuItem>태권도</SubmenuItem>
            <SubmenuItem>펜싱</SubmenuItem>
            <SubmenuItem>양궁</SubmenuItem>
            <SubmenuItem>사격</SubmenuItem>
            <SubmenuItem>피겨</SubmenuItem>
      </div>
      <div>
        <SubmenuItem isSelected={selectedSport === 15} onClick={() => handleSportSelect(15)}>댄스</SubmenuItem>
        <SubmenuItem isSelected={selectedSport === 16} onClick={() => handleSportSelect(16)}>클라이밍</SubmenuItem>
      </div>
        </Submenu>
      </SubmenuContainer>
      <FilterContainer>
        <div>
          {filters.map((filter, index) => (
            <Filter key={index} onClick={() => toggleDropdown(index)}>
              {filter.name}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
                <path d="M11.9805 20.3438C11.9805 19.8087 12.4142 19.375 12.9492 19.375H18.7617C19.2967 19.375 19.7305 19.8087 19.7305 20.3438C19.7305 20.8788 19.2967 21.3125 18.7617 21.3125H12.9492C12.4142 21.3125 11.9805 20.8788 11.9805 20.3438Z" fill="#333E5E" />
                <path d="M8.10547 14.5312C8.10547 13.9962 8.53919 13.5625 9.07422 13.5625H22.6367C23.1717 13.5625 23.6055 13.9962 23.6055 14.5312C23.6055 15.0663 23.1717 15.5 22.6367 15.5H9.07422C8.53919 15.5 8.10547 15.0663 8.10547 14.5312Z" fill="#333E5E" />
                <path d="M4.23047 8.71875C4.23047 8.18372 4.66419 7.75 5.19922 7.75H26.5117C27.0467 7.75 27.4805 8.18372 27.4805 8.71875C27.4805 9.25378 27.0467 9.6875 26.5117 9.6875H5.19922C4.66419 9.6875 4.23047 9.25378 4.23047 8.71875Z" fill="#333E5E" />
              </svg>
              {activeDropdown === index && (
                <DropdownMenu index={index}>
                  {filter.options.map((option, idx) => (
                    <DropdownItem key={idx} onClick={() => handleSelect(index, option)}>
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </Filter>
          ))}
          <Filter>최신순
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6.90652 4.93201C6.90652 4.38707 6.46476 3.94531 5.91982 3.94531C5.37488 3.94531 4.93312 4.38707 4.93312 4.93201L4.93312 22.2839L2.67073 20.0215C2.2854 19.6362 1.66066 19.6362 1.27533 20.0215C0.889996 20.4068 0.889996 21.0316 1.27533 21.4169L5.22045 25.362L5.23512 25.3764C5.32665 25.4647 5.43104 25.5319 5.54213 25.5778C5.65847 25.6261 5.78603 25.6527 5.91982 25.6527C6.05361 25.6527 6.18117 25.6261 6.29751 25.5778C6.41389 25.5297 6.52292 25.4583 6.61752 25.3637L10.5643 21.4169C10.9496 21.0316 10.9496 20.4068 10.5643 20.0215C10.179 19.6362 9.55424 19.6362 9.16892 20.0215L6.90652 22.2839L6.90652 4.93201Z" fill="#333E5E" />
              <path d="M13.8134 6.90541C13.8134 6.36047 14.2552 5.91871 14.8001 5.91871H28.6139C29.1588 5.91871 29.6006 6.36047 29.6006 6.90541C29.6006 7.45035 29.1588 7.89211 28.6139 7.89211H14.8001C14.2552 7.89211 13.8134 7.45035 13.8134 6.90541Z" fill="#333E5E" />
              <path d="M14.8001 11.8389C14.2552 11.8389 13.8134 12.2807 13.8134 12.8256C13.8134 13.3705 14.2552 13.8123 14.8001 13.8123H24.6671C25.212 13.8123 25.6538 13.3705 25.6538 12.8256C25.6538 12.2807 25.212 11.8389 24.6671 11.8389H14.8001Z" fill="#333E5E" />
              <path d="M14.8001 17.7591C14.2552 17.7591 13.8134 18.2009 13.8134 18.7458C13.8134 19.2907 14.2552 19.7325 14.8001 19.7325H20.7203C21.2652 19.7325 21.707 19.2907 21.707 18.7458C21.707 18.2009 21.2652 17.7591 20.7203 17.7591H14.8001Z" fill="#333E5E" />
              <path d="M14.8001 23.6793C14.2552 23.6793 13.8134 24.121 13.8134 24.666C13.8134 25.2109 14.2552 25.6527 14.8001 25.6527H16.7735C17.3184 25.6527 17.7602 25.2109 17.7602 24.666C17.7602 24.121 17.3184 23.6793 16.7735 23.6793H14.8001Z" fill="#333E5E" />
            </svg>
          </Filter>
        </div>
        <Line></Line>
      </FilterContainer>
    </Navbarwrapper>
    <SelectedItemsContainer>
     {selectedItems.map((item, idx) => (
       <SelectedItem key={idx}>
         {item.option}
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
         <path d="M1.17472 1.17374C1.63033 0.718128 2.36902 0.718128 2.82463 1.17374L8.99967 7.34878L15.1747 1.17374C15.6303 0.718128 16.369 0.718128 16.8246 1.17374C17.2802 1.62935 17.2802 2.36804 16.8246 2.82366L10.6496 8.9987L16.8246 15.1737C17.2802 15.6294 17.2802 16.368 16.8246 16.8237C16.369 17.2793 15.6303 17.2793 15.1747 16.8237L8.99967 10.6486L2.82463 16.8237C2.36902 17.2793 1.63033 17.2793 1.17472 16.8237C0.719105 16.368 0.719105 15.6294 1.17472 15.1737L7.34976 8.9987L1.17472 2.82366C0.719105 2.36804 0.719105 1.62935 1.17472 1.17374Z" fill="#333E5E"/>
         </svg>
       </SelectedItem>
     ))}
   </SelectedItemsContainer>
   </>
  );   
};

export default Navbar;
