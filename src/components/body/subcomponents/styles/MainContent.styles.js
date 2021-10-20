import styled from "styled-components";

export const Container = styled.div`
  width: 841px;

  hr {
    border-top: 0.7px solid rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    margin-bottom: 16px;
    opacity: 0.1;
  }

  .mt-24 {
    margin-top: 24px;
  }

  @media screen and (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    margin-top: 50px;
  }
`;
export const Content = styled.div`
  width: 100%;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.25px;
    text-align: left;
  }

  img {
    width: 100%;
    height: auto;
    margin-top: 18px;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #2478cc;
  }

  .video-title {
    margin-top: 24px;

    > button {
      position: relative;
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;

      color: #1285ff;
      background: none;
      border: 1px solid #1285ff;
      padding: 5px 38.5px;
      border-radius: 4px;
      cursor: pointer;

      &::after {
        content: "File Format: MP4  |  File Size: 852 MB";
        position: absolute;
        width: 100%;
        bottom: -20px;
        left: 0;
        font-family: "Roboto";
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.15877863764762878px;
        text-align: left;
        text-align: center;
        color: #606060;
        cursor: default;
      }

      @media screen and (max-width: 768px) {
        margin-top: 10px;
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .views {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    color: #606060;
    margin-top: 24px;
  }
`;
