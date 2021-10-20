import styled from "styled-components";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  padding: 10px 0;

  @media screen and (max-width: 1224px) {
    display: none;
  }
`;
export const Content = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto;

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
  }
`;
export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  height: 25 px;
  width: auto;
`;
