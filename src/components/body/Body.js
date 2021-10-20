import React from "react";

import Aside from "./subcomponents/Aside";
import MainContent from "./subcomponents/MainContent";

import { Container, Content } from "./Body.styles";

const Body = () => {
  return (
    <Container>
      <Content>
        <Aside />
        <MainContent />
      </Content>
    </Container>
  );
};

export default Body;
