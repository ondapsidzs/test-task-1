import styled from "styled-components";

import { MdSort } from "react-icons/md";

export const Container = styled.div`
  padding: 30px 0 10px;
  width: 100%;

  > section {
    .comments {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.10000000149011612px;
      text-align: left;
      color: #030303;
      margin-right: 35px;
    }

    .sort {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.5px;
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.5px;
      text-align: center;
      color: #606060;
    }
  }

  .add-comment {
    margin-top: 20px;

    img {
      height: 40px;
      width: 40px;
      border-radius: 4px;
      margin-right: 20px;
    }
    input {
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-bottom: 5px;
      width: 100%;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;

      &:focus {
        outline: none;
      }
    }
  }
`;
export const SortIcon = styled(MdSort)`
  fill: black;
  margin-right: 10px;
  height: 20px;
  width: auto;
`;
export const CommentsContainer = styled.div`
  padding: 40px 0;
`;

export const Comments = styled.div`
  &:not(:nth-of-type(1)) {
    margin-top: 30px;
  }

  > img {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }

  p:nth-of-type(1) {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #030303;

    &::after {
      content: "1 hour ago";
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.30000001192092896px;
      text-align: left;
      color: #606060;
      margin-left: 4px;
    }
  }

  p:nth-of-type(2) {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    margin-top: 4px;
  }

  .icon {
    height: 15px;
    width: 15px;
    margin-right: 15px;
    cursor: pointer;

    &-container {
      margin-top: 15px;
    }
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    color: #606060;

    &:nth-of-type(1) {
      margin-right: 20px;
    }

    &:nth-of-type(2) {
      cursor: pointer;
    }
  }

  .view-replies {
    margin-top: 15px;
    cursor: pointer;

    > img {
      height: 4.1666669845581055px;
      width: 8.333333015441895px;
      margin-right: 15px;
    }

    > span {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-align: center;
      color: #065fd4;
    }
  }
`;
