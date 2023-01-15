import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

const Index = (props) => {
  const { href, title, state } = props;
  return (
    <Link to={href} state={state} className="link">
      <span className="link-title">{title}</span>
      <span className="link-bg"></span>
    </Link>
  );
};

Index.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  state: PropTypes.any,
};

export default Index;
