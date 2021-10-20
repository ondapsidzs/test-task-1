import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: auto;

  @media screen and (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
  }
`;
