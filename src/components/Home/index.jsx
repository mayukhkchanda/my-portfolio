import React from "react";
import "./index.scss";
// import { Link } from "react-router-dom";
import Link from "components/Link";

const About = () => {
  return (
    <div className="about">
      <div className="brief">
        <h2>Hi I'm</h2>
        <h1>Mayukh</h1>
        <p>Software Developer</p>
      </div>
      <div className="links">
        <Link href="/about" title="About" />
        <Link href="/experience" title="Experience" />
        <Link href="/education" title="Education" />
        <Link href="/projects" title="Projects" />
        <Link href="/contacts" title="Contacts" />
      </div>
    </div>
  );
};

export default About;
