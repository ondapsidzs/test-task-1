import React from "react";

import { Container, Content } from "./Footer.styles";

import Link from "./subcomponents/Links";
import Bottom from "./subcomponents/Bottom";

const Footer = () => {
  return (
    <Container className="flex">
      <Content>
        <hr />
        <Link />
        <hr />
        <Bottom />
      </Content>
    </Container>
  );
};

export default Footer;
