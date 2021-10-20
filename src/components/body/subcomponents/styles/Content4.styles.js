import styled from "styled-components";

export const Container = styled.div`
  padding-top: 24px;
  width: 100%;
`;
export const Content = styled.div`
  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.25px;
    text-align: left;
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #595e67;
    margin-top: 4px;
  }

  > section {
    width: 100%;
    left: 0px;
    top: 80px;
    border-radius: 4px;
    padding: 16px 28px 16px 28px;
    margin-top: 16px;
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
      0px 3px 8px -1px rgba(50, 50, 71, 0.05);
    border-radius: 4px;

    hr {
      margin: 16.25px 0;
    }

    .file-icon {
      height: 30px;
      width: 30px;
    }

    > div {
      @media screen and (max-width: 768px) {
        display: flex;
        align-items: left;
        flex-direction: column;
        gap: 20px;
      }
    }

    > div > div > span {
      position: relative;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 21px;
      letter-spacing: 0.19135189056396484px;
      text-align: left;
      margin-left: 15px;
      color: #0f131a;

      &::after {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        bottom: -5px;
        height: 2px;
        width: 100%;
        background: #0f131a;
      }
    }

    > div > button {
      background: #1285ff;
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.14406776428222656px;
      text-align: center;
      padding: 6.4px 25px;
      border-radius: 4px;
      border: none;
      cursor: pointer;

      > img {
        height: 19.200000762939453px;
        width: 17.99140739440918px;
        margin-right: 9px;
      }

      @media screen and (max-width: 768px) {
        padding: 5px 20px;
        height: 50px;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
