import React from "react";

import { Container, Content } from "./styles/Content4.styles";

import FileIcon1 from "../../../images/file-icon-1.png";
import FileIcon2 from "../../../images/file-icon-2.png";
import FileIcon3 from "../../../images/file-icon-3.png";
import DownloadIcon from "../../../images/download.png";

const Content4 = () => {
  return (
    <Container>
      <Content>
        <h2>Download Resources</h2>
        <p>Here are a must do step by step to kickstart your business!</p>
        <section>
          <div className="flex jc-sb">
            <div className="flex ai-c">
              <img src={FileIcon1} alt="" className="file-icon" />
              <span>VSL Draft Template Excercise.pdf</span>
            </div>
            <button className="flex ai-c">
              <img src={DownloadIcon} alt="" />
              Download
            </button>
          </div>
          <hr />
          <div className="flex jc-sb">
            <div className="flex ai-c">
              <img src={FileIcon2} alt="" className="file-icon" />
              <span>2,498 Niches Spreadsheet.xls</span>
            </div>
            <button className="flex ai-c">
              <img src={DownloadIcon} alt="" />
              Download
            </button>
          </div>
          <hr />
          <div className="flex jc-sb">
            <div className="flex ai-c">
              <img src={FileIcon3} alt="" className="file-icon" />
              <span>1 Million Graphics Template.zip</span>
            </div>
            <button className="flex ai-c">
              <img src={DownloadIcon} alt="" />
              Download
            </button>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default Content4;
