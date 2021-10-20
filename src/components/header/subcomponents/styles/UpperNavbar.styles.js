import styled from "styled-components";
import { BiPlusMedical, BiSearch } from "react-icons/bi";
import { RiNewspaperLine, RiCalendar2Line } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  height: 60px;

  svg {
    cursor: pointer;
  }

  b {
    margin-left: 5px;
  }

  button {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1224px) {
    padding: 0 30px;
  }
`;
export const Content = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  .btn-div {
    display: flex;
    align-items: center;
    margin-left: 30px;

    @media screen and (max-width: 1224px) {
      flex-direction: column;
    }
  }

  .user-div {
    display: flex;
    align-items: center;
    margin-left: 35px;

    img {
      margin-left: 6px;
    }
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

  @media screen and (max-width: 1224px) {
    position: relative;
    display: flex;
    justify-content: center;
  }
`;
export const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 3.07161545753479px;
  text-align: left;
  margin-right: 40px;

  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 114.90426635742188px;
    bottom: 0;
    background: #ffc700;
  }
`;
export const Plus = styled(BiPlusMedical)`
  height: 22px;
  width: 12.989177703857422px;
  fill: #ffc700;
`;
export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const Search = styled.input`
  height: 32px;
  width: 380px;
  font-family: "Roboto", sans-serif;
  border-radius: 4px;
  background: #f4f4f4;
  border: none;
  padding-left: 25px;

  &:focus {
    outline: none;
  }
`;
export const SearchIcon = styled(BiSearch)`
  position: absolute;
  height: 15px;
  width: auto;
  left: 5px;
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
export const Username = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Menu = styled(BiMenu)`
  display: none;

  @media screen and (max-width: 1224px) {
    position: absolute;
    display: block;
    right: 0;
    height: 30px;
    width: auto;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.6;
    }
  }
`;
export const MenuContainer = styled.div`
  @media screen and (max-width: 1224px) {
    display: none;
  }
`;
export const DownArrow = styled(AiFillCaretDown)`
  height: 15px;
  width: auto;
  margin-left: 5px;
`;
