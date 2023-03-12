import React from "react";
import { getText } from "utils/commonUtils";
import Card from "components/CardComponent";
import Project from "./Project";
import "./style.scss";
import ControlButton from "components/ControlButton";

const porjectDetails = getText("projectDetails");

const Index = () => {
  return (
    <Card className="projects">
      <div className="page-control-container">
        <ControlButton href="/experience" title="Experience" direction="prev" key="experience" />
        <h2 className="heading">{porjectDetails.heading}</h2>
        <ControlButton href="/contacts" title="Contacts" direction="next" key="contact-me" />
      </div>
      <div className="desc-container">
        <p className="desc">
          {porjectDetails.descTxt1} {porjectDetails.descTxt2}
        </p>
        <div className="tech-stack">
          {porjectDetails.technologies.map((name) => (
            <div key={name} className="tech">
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="showcase">
        {porjectDetails.allProjects.map(
          ({
            backgroundUrl,
            descBrief,
            techs,
            urlLink,
            githubLink,
            linkTxt,
          }) => (
            <Project
              key={descBrief}
              backgroundUrl={process.env.PUBLIC_URL + backgroundUrl}
              descBrief={descBrief}
              techs={techs}
              urlLink={urlLink}
              githubLink={githubLink}
              linkTxt={linkTxt}
            />
          )
        )}
      </div>
    </Card>
  );
};

export default Index;
