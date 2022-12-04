import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import "./index.scss";

const Index = (props) => {
  const [value, setValue] = useState(0);
  const { tabPanelData } = props;
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-root">
      <Tabs
        className="tabs"
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        orientation="vertical"
        variant="scrollable"
      >
        <Tab className="tab" label="Amdocs" />
        <Tab className="tab" label="Cognizant" />
      </Tabs>
      {tabPanelData.map((data, index) => (
        <TabPanel index={index} value={value} key={data?.company} data={data} />
      ))}
    </div>
  );
};

export default Index;
