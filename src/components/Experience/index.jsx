import React from "react";
import Tab from "components/Tab";
import Card from "components/CardComponent";
import { getText } from "utils/commonUtils";
import "./index.scss";

const experience = getText("experience");

const Experience = () => {
  return (
    <Card className="experience">
      <h2 className="main-title">{experience?.heading}</h2>
      <Tab tabPanelData={experience?.companies} />
    </Card>
  );
};

export default Experience;
