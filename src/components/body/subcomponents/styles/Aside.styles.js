import styled from "styled-components";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiPlusMedical, BiCheck } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 30px;
`;
export const Container = styled.div`
  width: 324px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 7px 7px 3px 3px;
  padding: 30px;

  .flex {
    display: flex;
  }

  .fd-col {
    flex-direction: column;
  }

  .ai-c {
    align-items: center;
  }

  .jc-c {
    justify-content: center;
  }

  .ta-c {
    text-align: center;
  }

  .circle {
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background: #2478cc;
    margin-right: 10px;
  }

  .days {
    font-size: 0.875rem;
    margin-top: 20px;
  }

  .blue {
    color: #2478cc;
  }

  h1 {
    position: relative;
    font-size: 18px;
    color: #014eff;
  }

  p {
    font-size: 11px;
    color: #595e67;
    margin-top: 10px;
  }

  @media screen and (max-width: 1224px) {
    width: 100%;
  }
`;
export const SubContainer = styled.div`
  @media screen and (max-width: 1224px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  color: #464e5b;
  height: 25px;
  width: auto;
  margin-left: 84px;
  cursor: pointer;

  @media screen and (max-width: 1224px) {
    position: absolute;
    right: 0;
  }
`;
export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  height: 20px;
  width: auto;
  transform: translateX(-5px);
`;
export const ProgressContainer = styled.div`
  position: relative;
  height: 8px;
  width: 100%;
  background: #eff6fa;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 14px;

  .green {
    background: #0c9c00;
    width: 94px;
    height: 100%;
  }
`;
export const NeedHelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 324px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 7px 7px 3px 3px;
  padding: 30px;
  margin-top: 30px;

  .needHelp {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.25px;
    margin-bottom: 17px;
    color: #4b4b4b;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      background: #ffc700;
      bottom: -7px;
      left: 0;
    }
  }

  .pos-rel {
    position: relative;
  }

  .circle {
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #49a55d;
    margin-right: 4px;
  }

  .flex {
    display: flex;
  }

  .fd-col {
    flex-direction: column;
  }

  .ai-c {
    align-items: center;
  }

  .jc-c {
    justify-content: center;
  }

  div {
    &:nth-of-type(3) {
      font-family: "Roboto";
      font-size: 7px;
      font-style: normal;
      font-weight: 500;
      line-height: 13px;
    }

    &:nth-of-type(4) {
      font-family: "Roboto";
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 18px;
      letter-spacing: 0.17660591006278992px;
      text-align: center;
      margin-top: 11px;
    }

    &:nth-of-type(5) {
      font-family: "Arial";
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0.3179641664028168px;
      text-align: center;
      width: 120px;
    }

    &:nth-of-type(6) {
      font-family: "Roboto";
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      margin-top: 10px;

      b {
        font-family: "Roboto";
        font-size: 11px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #014eff;
      }
    }
  }

  @media screen and (max-width: 1224px) {
    width: 49%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const MessageIconContent = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px;
  background: #49a55d;
  border-radius: 20px;
  border: 3px white solid;
`;
export const ChatWithUsBtn = styled.button`
  background: #49a55d;
  border: none;
  padding: 10px 20px;
  font-weight: 700;
  color: white;
  border-radius: 3px;
  margin-top: 11px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const JoinNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  width: 324px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 7px 7px 3px 3px;
  padding: 20px 40px;
  margin-top: 30px;

  .flex {
    display: flex;
  }

  .ai-c {
    align-items: center;
  }

  .logo {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 5.811164379119873px;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      background: #f4af32;
      bottom: 0;
      left: 0;
    }
  }

  .priceIncreaseSoon {
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: #702626;

    @media screen and (max-width: 1224px) {
      text-align: left;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-align: left;
    color: #4b4b4b;
    margin-top: 18px;
  }

  ul {
    list-style-type: none;
    margin-top: 20px;

    > li {
      color: #5b5b5b;
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0.01em;
      text-align: left;

      &:not(:nth-of-type(1)) {
        margin-top: 17px;
      }
    }
  }

  button {
    background: #1285ff;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.14406776428222656px;
    padding: 13px 53px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    border: none;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1224px) {
    width: 49%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Plus = styled(BiPlusMedical)`
  fill: #f4af32;
  height: 20px;
  width: auto;
`;
export const Check = styled(BiCheck)`
  fill: white;
  padding: 1px;
  border-radius: 20px;
  background: #66cb9f;
  margin-right: 8px;
`;
