import React from "react";

import {
  MainContainer,
  Container,
  SubContainer,
  ArrowDown,
  ArrowRight,
  ProgressContainer,
  NeedHelpContainer,
  MessageIconContent,
  ChatWithUsBtn,
  JoinNowContainer,
  Plus,
  Check,
} from "./styles/Aside.styles";

import NeedHelpImage from "../../../images/need-help-image.jpg";
import MessageIcon from "../../../images/message-icon.png";

const Aside = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <h1 className="flex ai-c">
            7-Day Fast Start
            <ArrowDown />
          </h1>
          <ProgressContainer>
            <div className="green" />
          </ProgressContainer>
          <p className="ta-c">20% Complete</p>
          <div className="days blue flex ai-c">
            <span className="circle" />
            Day 1 | 7-Figure Math + AC Formula
          </div>
          <div className="days flex ai-c">
            <ArrowRight />
            Day 2 | Pick a market
          </div>
          <div className="days flex ai-c">
            <ArrowRight />
            Day 3 | Your superpower
          </div>
          <div className="days flex ai-c">
            <ArrowRight />
            Day 4 | Your disruptive idea
          </div>
          <div className="days flex ai-c">
            <ArrowRight />
            Day 5 | Front end sales funnel
          </div>
          <div className="days flex ai-c">
            <ArrowRight />
            Day 6 | Back end sales funnel
          </div>
          <div className="days flex ai-c">
            <ArrowRight />
            Day 7 | Scaling your offer
          </div>
        </Container>
        <SubContainer>
          <NeedHelpContainer className="flex fd-col ai-c">
            <div className="ta-c needHelp">Need Help?</div>
            <div className="pos-rel">
              <img src={NeedHelpImage} alt="" />
              <MessageIconContent src={MessageIcon} alt="" />
            </div>
            <div className="flex ai-c">
              <span className="circle" />
              AVAILABLE
            </div>
            <div>Alen Sulfuric</div>
            <div>Motivational Speaker & Influence Expert</div>
            <ChatWithUsBtn>
              <img src={MessageIcon} alt="" style={{ marginRight: "6px" }} />
              Chat With Us
            </ChatWithUsBtn>
            <div>
              Or Call Us at <b>+1 (800) 444 2041</b>
            </div>
          </NeedHelpContainer>
          <JoinNowContainer>
            <div className="flex ai-c ">
              <span className="logo">NHB</span>
              <Plus />
            </div>
            <p>Want Our Help Getting 100+ Sales Per Day?</p>
            <ul>
              <li>
                <Check />
                What you get when you join
              </li>
              <li>
                <Check />
                Weekly group coaching calls with us
              </li>
              <li>
                <Check />
                Entire Automatic Clients course
              </li>
              <li>
                <Check />
                All templates, scripts, sales funnels, etc
              </li>
              <li>
                <Check />
                Emails & SMS sequences, etc
              </li>
            </ul>
            <button>Apply to Join Now</button>
            <div className="priceIncreaseSoon">Price Increase soon.</div>
          </JoinNowContainer>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default Aside;
