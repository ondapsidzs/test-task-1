import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 1224px) {
    padding: 0 30px;
  }
`;
export const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  hr {
    border-top: 0.7px solid rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    margin-bottom: 16px;
    opacity: 0.1;

    &:first-of-type {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 1224px) {
    width: 100%;
  }
`;
