import React from "react";
import Card from "components/CardComponent";
import Link from "components/Link";
import { getText } from "utils/commonUtils";
import ControlButton from "components/ControlButton";

import "./index.scss";

const about = getText("about");

const skillList = [
  { logoUrl: "/assets/images/react.png", name: "React" },
  { logoUrl: "/assets/images/redux-logo.png", name: "Redux" },
  { logoUrl: "/assets/images/ts-logo.png", name: "TypeScript" },
  { logoUrl: "/assets/images/js-logo.png", name: "JavaScript" },
  { logoUrl: "/assets/images/sass-logo.png", name: "Sass" },
  { logoUrl: "/assets/images/git-logo.png", name: "GIT" },
  { logoUrl: "/assets/images/webpack-logo.png", name: "Webpack" },
  { logoUrl: "/assets/images/three-js.png", name: "Three.JS" },
];

const About = () => {
  return (
    <Card className="about">
      <h2 className="main-title">{about?.heading}</h2>
      <div className="about-content">
        {about?.content.map((content) => (
          <p key={content} className="content-text">
            {content}
          </p>
        ))}
        <p className="content-text">
          I love to build things for the web. Take a look at some of the things
          I've built <Link href="/my-portfolio/projects" title="here" />.
        </p>
        <p className="content-text">
          Here are few of the technologies I've been working on recently.
        </p>
      </div>
      <div className="skills">
        <div className="grid">
          {skillList.map((skill) => {
            const { logoUrl, name } = skill;
            return (
              <div className="grid-item" key={name}>
                <img src={process.env.PUBLIC_URL + logoUrl} alt={name} />
                <p className="skill-name">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="page-control-container">
        <ControlButton href="/my-portfolio" title="Home" direction="prev" key="home" />
        <ControlButton href="/my-portfolio/experience" title="Experience" direction="next" key="Experience" />
      </div>
    </Card>
  );
};

export default About;
