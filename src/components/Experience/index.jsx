import React from "react";
import Tab from "components/Tab";
import Card from "@mui/material/Card";
import { getText } from "utils/commonUtils";
import { useLocation } from "react-router";
import "./index.scss";

const experience = getText("experience");

const Experience = () => {
  const location = useLocation();
  const { state } = location || {};

  return (
    <Card className={`experience ${state?.shortFade ? "short-fade" : ""}`}>
      <h2 className="main-title">{experience?.heading}</h2>
      <Tab tabPanelData={experience?.companies} />
    </Card>
  );
};

export default Experience;
