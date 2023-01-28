import React from "react";
import { useLocation } from "react-router";
import { getText } from "utils/commonUtils";
import Project from "./Project";
import "./style.scss";

const porjectDetails = getText("projectDetails");

const Index = () => {
  const location = useLocation();
  const { state } = location || {};
  return (
    <div className={`projects ${state?.shortFade ? "short-fade" : ""}`}>
      <h2 className="heading">{porjectDetails.heading}</h2>
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
    </div>
  );
};

export default Index;
