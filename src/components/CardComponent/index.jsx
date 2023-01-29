import React from "react";
import Card from "@mui/material/Card";
import { useLocation } from "react-router";
import "./style.scss";

const Index = (props) => {
  const location = useLocation();
  const { state } = location || {};
  const { className } = props;

  return (
    <Card
      className={`card-component ${className} ${
        state?.longFade ? "long-fade" : ""
      }`}
    >
      {props.children}
    </Card>
  );
};

export default Index;
