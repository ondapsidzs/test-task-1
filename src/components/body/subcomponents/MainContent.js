import React from "react";

import { Container, Content } from "./styles/MainContent.styles";

import VideoImage from "../../../images/video-image.png";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";

const MainContent = () => {
  return (
    <Container>
      <Content>
        <h1>Hey Alen, Welcome to your 7-Day Fast Start</h1>
        <img src={VideoImage} alt="videoImage" />
        <div className="flex jc-sb video-title">
          <h2>PUBG Mobile x Godzilla vs. Kong Trailer - Official Trailer</h2>
          <button>Download Video</button>
        </div>
        <div className="views">13,741 views • May 11, 2021</div>
      </Content>
      <hr className="hr" />
      <Content2 />
      <hr className="hr mt-24" />
      <Content3 />
      <hr className="hr" />
      <Content4 />
      <Content5 />
    </Container>
  );
};

export default MainContent;
