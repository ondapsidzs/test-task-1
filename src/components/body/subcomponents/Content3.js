import React from "react";

import {
  Container,
  SortIcon,
  Comments,
  CommentsContainer,
} from "./styles/Content3.styles";

import CommentProfile1 from "../../../images/comment-profile.png";
import CommentProfile2 from "../../../images/comment-profile-2.png";
import CommentProfile3 from "../../../images/comment-profile-3.png";
import CommentProfile4 from "../../../images/comment-profile-4.png";
import LikeIcon from "../../../images/like.png";
import DislikeIcon from "../../../images/dislike.png";
import ArrowDown from "../../../images/arrow-down.png";

const Content3 = () => {
  return (
    <Container>
      <section className="flex ai-c">
        <div className="comments">334 Comments</div>
        <div className="flex ai-c sort">
          <SortIcon />
          SORT BY
        </div>
      </section>
      <div className="flex ai-c add-comment">
        <img src={CommentProfile1} alt="" />
        <input type="text" placeholder="Add a public comment..." />
      </div>
      <CommentsContainer>
        <Comments className="flex ">
          <img src={CommentProfile2} alt="" />
          <div>
            <p>Mike_Fails_at_games</p>
            <p>
              At this rate why not have Kong and Godzilla show up as MK11 dlc
            </p>
            <div className="flex ai-c icon-container">
              <img src={LikeIcon} alt="" className="icon" />
              <span>496</span>
              <img src={DislikeIcon} alt="" className="icon" />
              <span>REPLY</span>
            </div>
            <div className="flex ai-c view-replies">
              <img src={ArrowDown} alt="" />
              <span>View 17 replies</span>
            </div>
          </div>
        </Comments>
        <Comments className="flex ">
          <img src={CommentProfile3} alt="" />
          <div>
            <p>ShadowXBlaster</p>
            <p>
              A game which is a great example of "Nothing like what was shown".
              Perfect.....
            </p>
            <div className="flex ai-c icon-container">
              <img src={LikeIcon} alt="" className="icon" />
              <span>496</span>
              <img src={DislikeIcon} alt="" className="icon" />
              <span>REPLY</span>
            </div>
            <div className="flex ai-c view-replies">
              <img src={ArrowDown} alt="" />
              <span>View 8 replies</span>
            </div>
          </div>
        </Comments>
        <Comments className="flex ">
          <img src={CommentProfile4} alt="" />
          <div>
            <p>NyX</p>
            <p>
              Someone just make a Monster Fighting Game and give us Godzilla vs
              Kong in Game Form
            </p>
            <div className="flex ai-c icon-container">
              <img src={LikeIcon} alt="" className="icon" />
              <span>496</span>
              <img src={DislikeIcon} alt="" className="icon" />
              <span>REPLY</span>
            </div>
            <div className="flex ai-c view-replies">
              <img src={ArrowDown} alt="" />
              <span>View 12 replies</span>
            </div>
          </div>
        </Comments>
      </CommentsContainer>
    </Container>
  );
};

export default Content3;
