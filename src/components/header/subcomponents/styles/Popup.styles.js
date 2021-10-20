import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: #2478cc;
  color: white;
  z-index: 100;

  button {
    font-family: "Roboto", sans-serif;
    height: 21px;
    width: 104.32px;
    font-size: 0.5625rem;
    background: white;
    color: #464e5b;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    font-size: 0.875rem;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 10px 0;
  }
`;
export const Content = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
  }
`;
