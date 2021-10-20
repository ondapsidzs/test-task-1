import styled from "styled-components";

import { BiCheck } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;

  section {
    > div > h3 {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.25px;
      text-align: left;
    }
    > div > p {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.30000001192092896px;
      text-align: left;
      color: #606060;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    @media screen and (max-width: 1224px) {
      gap: 30px;
    }
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    margin-top: 16px;
    color: #393939;
  }

  .p1 {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-align: left;

    b {
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.25px;
      text-align: left;
    }

    &:not(:nth-of-type(1)) {
      margin-left: 15px;
    }
  }

  .p2 {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.007000000216066837px;
    text-align: left;
    color: #1285ff;
  }

  .sign-up-for-the-next-call {
    margin-top: 24px;

    > button {
      background: #1285ff;
      border: none;
      padding: 12.5px 40px;
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0.14406776428222656px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
    }

    > div {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.06677334010601044px;
      text-align: left;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media screen and (max-width: 1224px) {
    gap: 30px;
  }
`;
export const Check = styled(BiCheck)`
  padding: 1px;
  background: black;
  fill: white;
  border-radius: 20px;
  margin-left: 8px;
`;
export const RightArrow = styled(BsArrowRightShort)`
  height: 30px;
  width: auto;
  fill: #2478cc;
  margin-left: 12px;
`;
