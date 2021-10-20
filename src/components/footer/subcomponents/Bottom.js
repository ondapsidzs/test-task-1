import React from "react";

import { Container, Content } from "./styles/Bottom.styles";

import FbIcon from "../../../images/fb-icon.png";
import TwitterIcon from "../../../images/twitter-icon.png";
import InstaIcon from "../../../images/insta-icon.png";
import YTIcon from "../../../images/yt-icon.png";
import LinkedInIcon from "../../../images/linked-in.png";
import SpotifyIcon from "../../../images/spotify-icon.png";
import SignalIcon from "../../../images/signal-icon.png";
import SoundCloudIcon from "../../../images/soundcloud-icon.png";

const Bottom = () => {
  return (
    <Container>
      <Content className="flex ai-c jc-sb">
        <span>NOTHING HELD BACK</span>
        <div className="flex ai-c">
          <div className="flex ai-c">
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
          </div>
          <div className="flex ai-c">
            <a href="/">
              <img src={FbIcon} alt="" />
            </a>
            <a href="/">
              <img src={TwitterIcon} alt="" />
            </a>
            <a href="/">
              <img src={InstaIcon} alt="" />
            </a>
            <a href="/">
              <img src={YTIcon} alt="" />
            </a>
            <a href="/">
              <img src={LinkedInIcon} alt="" />
            </a>
            <a href="/">
              <img src={SpotifyIcon} alt="" />
            </a>
            <a href="/">
              <img src={SignalIcon} alt="" />
            </a>
            <a href="/">
              <img src={SoundCloudIcon} alt="" />
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Bottom;
