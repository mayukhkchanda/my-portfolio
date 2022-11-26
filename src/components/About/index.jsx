import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="brief">
        <h2>Hi I'm</h2>
        <h1>Mayukh</h1>
        <p>Software Developer</p>
      </div>
      <div className="links">
        <Link to="/about">about</Link>
        <Link to="/experience">experience</Link>
        <Link to="/education">education</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contacts">contacts</Link>
      </div>
    </div>
  );
};

export default About;
