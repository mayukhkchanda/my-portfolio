import React from "react";
import Tab from "components/Tab";
import Card from "components/CardComponent";
import { getText } from "utils/commonUtils";
import "./index.scss";
import ControlButton from "components/ControlButton";

const experience = getText("experience");

const Experience = () => {
  return (
    <Card className="experience">
      <h2 className="main-title">{experience?.heading}</h2>
      <Tab tabPanelData={experience?.companies} />
      <div className="page-control-container">
        <ControlButton href="/about" title="About Me" direction="prev" key="about-me" />
        <ControlButton href="/projects" title="Projects" direction="next" key="projects" />
      </div>
    </Card>
  );
};

export default Experience;
