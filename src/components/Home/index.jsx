import React from "react";
import Link from "components/Link";
import "./index.scss";
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <div className="home">
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
      <div className="links">
        <Link
          href="/my-portfolio/about"
          title="About"
          state={{ shortFade: true }}
        />
        <Link
          href="/my-portfolio/experience"
          title="Experience"
          state={{ shortFade: true }}
        />
        <Link
          href="/my-portfolio/projects"
          title="Projects"
          state={{ shortFade: true }}
        />
        <Link
          href="/my-portfolio/contacts"
          title="Contact"
          state={{ shortFade: true }}
        />
      </div>
    </div>
  );
};

export default Home;
