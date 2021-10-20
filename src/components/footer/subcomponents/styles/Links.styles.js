import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 71px;
`;
export const Content = styled.div`
  > ul {
    > li {
      list-style-type: none;

      .highlighted {
        background: #ffc700;
        color: black !important;
        padding: 1px;
        border-radius: 4px;
      }

      &:nth-of-type(1) {
        color: #1285ff;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.3499999940395355px;
        text-align: left;
      }

      &:not(:nth-of-type(1)) {
        a {
          font-family: "Roboto", sans-serif;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.3499999940395355px;
          text-align: left;
          color: #595e67;

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 25%);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 40%);
  }
`;
