import styled from "styled-components";

import { BiSearch } from "react-icons/bi";
import { RiNewspaperLine, RiCalendar2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
  display: none;
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;

  @media screen and (max-width: 1224px) {
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    width: 400px;
    height: 100vh;
    background: rgb(245, 245, 245);
    z-index: 50;
    padding: 80px 30px;
    transform: ${({ sideMenuOpen }) =>
      sideMenuOpen ? "translateX(0)" : "translateX(100%)"};
    transition: 0.2s all ease-in-out;
    transition-property: transform;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 30px 20px;
    width: 100%;
    transform: ${({ sideMenuOpen }) =>
      sideMenuOpen ? "translateX(0)" : "translateX(100%)"};
    transition: 0.2s all ease-in-out;
    transition-property: transform;
  }
`;
export const Content = styled.div`
  width: 100%;
`;
export const Profile = styled.div`
  margin-bottom: 20px;
  justify-content: center;

  > div {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;

    > svg {
      rotate: 180deg;
      margin-left: 5px;
      height: 15px;
      width: auto;
      cursor: pointer;
    }
  }

  > img {
    border-radius: 20px;
    height: 40px;
    width: 40px;
    margin-left: 10px;
  }

  b {
    margin-left: 5px;
  }
`;
export const SearchBar = styled.section`
  position: relative;
  width: 100%;
`;
export const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
export const Search = styled.input`
  width: 100%;
  padding: 5px 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
`;
export const BtnContainer = styled.div`
  margin-top: 20px;

  button,
  svg {
    cursor: pointer;
  }

  .hiring-btn {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    background: none;
    height: 24px;
    width: 89px;
    left: 0px;
    top: 12px;
    border-radius: 3px;
    padding: 2px, 6px, 2px, 6px;
    border: 1px solid #2478cc;
    color: #2478cc;
  }

  .needHelp-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 6px;

    position: static;
    width: 80px;
    height: 24px;
    left: 112px;
    top: 12px;

    background: #ffc700;
    border-radius: 3px;

    /* Inside Auto Layout */

    margin: 0px 23px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height, or 150% */

    color: #000000;
    border: none;
  }
`;
export const NewspaperIcon = styled(RiNewspaperLine)`
  height: 20px;
  width: 20px;
`;
export const CalendarIcon = styled(RiCalendar2Line)`
  height: 20px;
  width: 20px;
  margin-left: 27px;
`;
export const MenuContainer = styled.div`
  margin-top: 30px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;

      &::before {
        content: "";
        width: 100%;
      }
    }

    &::before {
      position: absolute;
      content: "";
      bottom: -5px;
      height: 2px;
      width: 0%;
      background: black;
      transition: 0.2s all ease-in-out;
      transition-property: width;
    }

    &:not(:first-of-type) {
      margin-top: 30px;
    }
  }
`;
export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  height: 25 px;
  width: auto;
`;
export const Close = styled(IoClose)`
  position: absolute;
  right: 30px;
  height: 30px;
  width: auto;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.6;
  }
`;
