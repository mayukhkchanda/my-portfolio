import React from "react";
import TypeWriter from "./TypeWriter";
import "./index.scss";

const iconsList = [
  {
    text: "About Me",
    link: "/about",
    url: "/assets/images/about-me.png",
    imgClass: "",
    textClass: ""
  },
  {
    text: "Experience",
    link: "/experience",
    url: "/assets/images/office-icon.jpg",
    imgClass: "xs",
    textClass: "pt-4"

  },
  {
    text: "Projects",
    link: "/projects",
    url: "/assets/images/projects-icons.jpg",
    imgClass: "xs",
    textClass: "pt-4"

  },
  {
    text: "Contact",
    link: "/contacts",
    url: "/assets/images/email.jpg",
    imgClass: "xs",
    textClass: "pt-4"

  },
]
const Home = (props) => {
  const { visible, invalidate, navigate } = props;

  const navigateTo = (e, link) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(link, { state: { animationDelay: 1.2, longFade: true } });
      invalidate(60);
    }, 800);
  };



  return (
    <div className={`home ${visible ? "" : "hidden"}`}>
      <div className="brief">
        <h2>Hi I'm</h2>
        <h1>Mayukh</h1>
        <TypeWriter
          str={[
            "Software Developer",
            "UI/UX Specialist",
            "React Developer",
            "Designer",
          ]}
        />
      </div>
      <div className="icons">
        {iconsList.map(({ link, text, url, imgClass, textClass }, index) => (
          <div key={link} className={`icon ${index === 0 ? "ml-0" : ""}`} onClick={(e) => navigateTo(e, link)}>
            <img className={`icon-img ${imgClass ?? ""}`} src={process.env.PUBLIC_URL + url} alt="about-me" />
            <p className={`icon-text ${textClass ?? ""}`}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
