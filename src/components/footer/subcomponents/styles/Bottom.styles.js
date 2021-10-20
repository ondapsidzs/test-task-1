import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  span {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 3.07161545753479px;
    text-align: left;

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 115px;
      background: #ffc700;
      left: 0;
      bottom: -3px;
    }
  }

  a {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #595e67;

    > img {
      height: 15px;
      width: auto;
    }
  }

  > div {
    display: flex;
    gap: 20px;

    > div {
      gap: 20px;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;
