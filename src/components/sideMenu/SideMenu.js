import React from "react";

import ProfileImage from "../../images/Profile.jpg";

import {
  Container,
  Content,
  Profile,
  SearchBar,
  SearchIcon,
  Search,
  BtnContainer,
  NewspaperIcon,
  CalendarIcon,
  MenuContainer,
  ArrowDown,
  Close,
  DownArrow,
} from "./SideMenu.styles";

const SideMenu = ({ sideMenuToggler, sideMenuOpen }) => {
  return (
    <Container sideMenuOpen={sideMenuOpen}>
      <Close onClick={sideMenuToggler} />
      <Content className="flex fd-col ai-c">
        <Profile className="flex ai-c">
          <div className="flex ai-c">
            Welcome Back, <b> Alen</b>
            <DownArrow />
          </div>
          <img src={ProfileImage} alt="" />
        </Profile>
        <SearchBar>
          <SearchIcon />
          <Search />
        </SearchBar>
        <BtnContainer className="flex ai-c">
          <button className="hiring-btn">WE'RE HIRING!</button>
          <button className="needHelp-btn">NEED HELP?</button>
          <NewspaperIcon />
          <CalendarIcon />
        </BtnContainer>
        <MenuContainer className="flex fd-col ai-c">
          <span>Today NHB</span>
          <span>
            My Programs
            <ArrowDown />
          </span>
          <span>Training Calls</span>
          <span>The Roledex</span>
          <span>Resources</span>
          <span>Integration Network</span>
          <span>
            Swipes
            <ArrowDown />
          </span>
          <span>Job Board</span>
          <span>The Community</span>
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default SideMenu;
