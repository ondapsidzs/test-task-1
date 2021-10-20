import React from "react";

import { Container, Content, ArrowDown } from "./styles/LowerNavbar.styles";

const LowerNavbar = () => {
  return (
    <Container>
      <Content>
        <span>Today NHB</span>
        <span>
          My Programs
          <ArrowDown />
        </span>
        <span>Training Calls</span>
        <span>The Roledex</span>
        <span>Resources</span>
        <span>Integration Network</span>
        <span>
          Swipes
          <ArrowDown />
        </span>
        <span>Job Board</span>
        <span>The Community</span>
      </Content>
    </Container>
  );
};

export default LowerNavbar;
