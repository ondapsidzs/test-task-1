import React from "react";

import { Container, Content } from "./styles/Links.styles";

const Links = () => {
  return (
    <Container>
      <Content className="flex jc-sb">
        <ul>
          {/* Today NHB */}
          <li>Today NHB</li>
          <li>
            <a href="/">Free Programs</a>
          </li>
          <li>
            <a href="/">Newsletter</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
        </ul>
        {/* Calendar Call */}
        <ul>
          <li>Calendar Call</li>
          <li>
            <a href="/">Training Call</a>
          </li>
          <li>
            <a href="/">Book a Call</a>
          </li>
        </ul>
        {/* My Programs */}
        <ul>
          <li>My Programs</li>
          <li>
            <a href="/">Advance Aqcuisiton</a>
          </li>
          <li>
            <a href="/">7-Days Fast Start</a>
          </li>
        </ul>
        {/* The Community */}
        <ul>
          <li>The Community</li>
          <li>
            <a href="/">The Roledex</a>
          </li>
          <li>
            <a href="/">Resource</a>
          </li>
          <li>
            <a href="/">Integration Network</a>
          </li>
          <li>
            <a href="/">Swipes</a>
          </li>
          <li>
            <a href="/">Job Board</a>
          </li>
        </ul>
        {/* Profile */}
        <ul>
          <li>Profile</li>
          <li>
            <a href="/">Subscriptions</a>
          </li>
          <li>
            <a href="/">Billing</a>
          </li>
          <li>
            <a href="/">Documents</a>
          </li>
        </ul>
        {/* Support */}
        <ul>
          <li>Support</li>
          <li>
            <a href="/" className="highlighted">
              We’re Hiring
            </a>
          </li>
          <li>
            <a href="/">Email Us</a>
          </li>
          <li>
            <a href="/">Youtube</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">LinkedIn</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Links;
