import styled from "styled-components";

export const Container = styled.div`
  padding-top: 88px;
  width: 100%;
`;
export const Content = styled.div`
  width: 834px;
  left: 3.5px;
  top: 64px;
  border-radius: 8px;
  padding: 32px 84px 32px 84px;
  border: 1px solid #49a55d;
  box-sizing: border-box;
  border-radius: 8px;

  h5 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0.9171078205108643px;
    text-align: center;
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0.9171078205108643px;
    text-align: center;
  }

  p {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 24px;
  }

  button {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.14406776428222656px;
    text-align: center;
    color: white;
    padding: 15px 57.5px;
    border: none;
    margin-top: 15px;
    cursor: pointer;

    background: #49a55d;
    border-radius: 4px;
  }

  @media screen and (max-width: 1224px) {
    width: 100%;
  }
`;
