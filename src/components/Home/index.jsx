import React from "react";
import Link from "components/Link";
import "./index.scss";
import TypeWriter from "./TypeWriter";

const innerWidth = window.innerWidth;

const Home = (props) => {
  const { visible } = props;
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
      {innerWidth < 600 ? (
        <div className="links">
          <Link
            href="/my-portfolio/about"
            title="About"
            state={{ shortFade: false }}
          />
          <Link
            href="/my-portfolio/experience"
            title="Experience"
            state={{ shortFade: false }}
          />
          <Link
            href="/my-portfolio/projects"
            title="Projects"
            state={{ shortFade: false }}
          />
          <Link
            href="/my-portfolio/contacts"
            title="Contact"
            state={{ shortFade: false }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
