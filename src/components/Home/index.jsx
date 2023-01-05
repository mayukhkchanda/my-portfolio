import React from "react";
import Link from "components/Link";
import "./index.scss";

const Home = () => {
  return (
    <div className="home">
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

export default Home;
