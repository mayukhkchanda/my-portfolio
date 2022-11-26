import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Index = (props) => {
  const { href, title } = props;
  return (
    <Link to={href} className="link">
      <span className="link-title">{title}</span>
      <span className="link-bg"></span>
    </Link>
  );
};

export default Index;
