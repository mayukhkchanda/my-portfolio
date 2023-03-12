import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

import Card from "components/CardComponent";

import "./style.scss";
import ControlButton from "components/ControlButton";
const Index = () => {
  return (
    <Card className="contacts">
      <h2 className="main-title">Get In Touch</h2>
      <div className="main-content">
        <div className="section">
          <p className="content-txt">
            Whether you want to say Hi, or reach out for oppurtuinites or have a
            question, my inbox is always open.
          </p>
          <a
            className="icon-btn"
            target="_blank"
            rel="noreferrer"
            href="mailto:mayukhkchanda@gmail.com"
          >
            <span>Say Hi</span>
            <EmailIcon className="btn-icon" />
          </a>
        </div>
        <div className="section">
          <p className="content-txt">
            <span>
              If you are more into technicalities, take a look at my Resume
            </span>
          </p>
          <a
            className="icon-btn"
            target="_blank"
            rel="noreferrer"
            href={
              process.env.PUBLIC_URL + "/assets/pdfs/mayukh_kanti_chanda.pdf"
            }
          >
            <span>My Resume</span>
            <PdfIcon className="btn-icon" />
          </a>
        </div>
        <div className="section">
          <h2>Let's Get Social</h2>
          <p className="content-txt">
            Feel free to connect with me on LinkedIn & GitHub. I will make sure
            to get back to you.
          </p>
          <div className="flex-row">
            <a
              className="icon-btn"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mayukh-chanda-9a0080172/"
            >
              <span>LinkedIn</span>
              <LinkedInIcon className="btn-icon" />
            </a>
            <a
              className="icon-btn"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mayukhkchanda"
            >
              <span>Github</span>
              <GitHubIcon className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="page-control-container">
        <ControlButton href="/projects" title="Projects" direction="prev" key="projects" />
        <ControlButton href="/" title="Home" direction="next" key="home" />
      </div>
    </Card>
  );
};

export default Index;
