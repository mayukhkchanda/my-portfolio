import React from "react";
import { useLocation } from "react-router";
import Project from "./Project";
import "./style.scss";

const projects = [
  {
    backgroundUrl: "/assets/images/ig-project.png",
    descBrief: "social media application.",
    techs: [
      "React",
      "JavaScript",
      "Redux-Saga",
      "SASS",
      "Firebase",
      "HTML5",
      "CSS3",
    ],
    urlLink: "https://react-instagram-clone-bb315.web.app/",
    linkTxt: "Visit Website",
    githubLink: "https://github.com/mayukhkchanda/React-Instagram-Clone",
  },
  {
    backgroundUrl: "/assets/images/netflix-proj.png",
    descBrief: "netflix clone.",
    techs: ["React", "JavaScript", "Redux-Thunk", "Firebase", "HTML5", "CSS3"],
    urlLink: "https://netflix-clone-31448.web.app/",
    linkTxt: "Visit Website",
    githubLink: "https://github.com/mayukhkchanda/React-Netflix-Clone",
  },
  {
    backgroundUrl: "/assets/images/ecommerce-proj.png",
    descBrief: "ecommerce website.",
    techs: ["React", "JavaScript", "Redux-Thunk", "Firebase", "HTML5", "CSS3"],
    urlLink: "https://react--clone-b551e.web.app/",
    linkTxt: "Visit Website",
    githubLink: "https://github.com/mayukhkchanda/React-Amazone-Clone",
  },
  {
    backgroundUrl: "/assets/images/whatsapp-proj.png",
    descBrief: "real-time chat app.",
    techs: [
      "React",
      "Redux",
      "JavaScript",
      "Redux-Thunk",
      "Firebase",
      "HTML5",
      "CSS3",
    ],
    urlLink: "https://rooms-app-66d14.firebaseapp.com/signin",
    linkTxt: "Visit Website",
    githubLink: "https://github.com/mayukhkchanda/rooms-react-app",
  },
  {
    backgroundUrl: "/assets/images/wikipedia-proj.png",
    descBrief: "wikipedia clone.",
    techs: ["React", "Redux", "JavaScript", "HTML5", "CSS3"],
    urlLink: "https://mayukhkchanda.github.io/wikipedia-react/",
    linkTxt: "Visit Website",
    githubLink: "https://github.com/mayukhkchanda/wikipedia-react",
  },
];

const Index = () => {
  const location = useLocation();
  const { state } = location || {};
  return (
    <div className={`projects ${state?.shortFade ? "short-fade" : ""}`}>
      <h2 className="heading">projects library</h2>
      <div className="desc-container">
        <p className="desc">
          A playground of things that I've built overtime. Click on each of them
          to learn more.
        </p>
        <p className="desc">Technologies/Framework used are listed below:</p>
        <div className="tech-stack">
          <div className="tech">React</div>
          <div className="tech">Redux</div>
          <div className="tech">Redux-Saga</div>
          <div className="tech">TypeScript</div>
          <div className="tech">JavaScript</div>
          <div className="tech">SASS</div>
          <div className="tech">Webpack</div>
          <div className="tech">Firebase</div>
          <div className="tech">Material UI</div>
          <div className="tech">Framer</div>
        </div>
      </div>
      <div className="showcase">
        {projects.map(
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
