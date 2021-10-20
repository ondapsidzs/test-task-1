import React from "react";

import LowerNavbar from "./LowerNavbar";

import {
  Container,
  Content,
  Logo,
  MenuContainer,
  Plus,
  SearchContainer,
  Search,
  SearchIcon,
  NewspaperIcon,
  CalendarIcon,
  Username,
  Menu,
  DownArrow,
} from "./styles/UpperNavbar.styles";

import Profile from "../../../images/Profile.jpg";

const UpperNavbar = ({ sideMenuToggler }) => {
  return (
    <>
      <Container>
        <Content>
          <Logo>
            NOTHING HELD BACK
            <Plus />
          </Logo>
          <MenuContainer className="flex ai-c jc-sb">
            <SearchContainer>
              <SearchIcon />
              <Search type="text" />
            </SearchContainer>
            <div className="btn-div ">
              <button className="hiring-btn">WE'RE HIRING!</button>
              <button className="needHelp-btn">NEED HELP?</button>
              <NewspaperIcon />
              <CalendarIcon />
            </div>
            <div className="user-div">
              <Username className="flex ai-c">
                Welcome Back, <b>Alen</b>
                <DownArrow />
              </Username>
              <img src={Profile} alt="" />
            </div>
          </MenuContainer>
          <Menu onClick={sideMenuToggler} />
        </Content>
      </Container>
      <LowerNavbar />
    </>
  );
};

export default UpperNavbar;
