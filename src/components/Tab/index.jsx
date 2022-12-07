import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import "./index.scss";

const Index = (props) => {
  const [value, setValue] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  const { tabPanelData } = props;

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setMobileView(true);
    }
  }, []);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`tabs-root ${mobileView ? "mobile" : ""}`}>
      <Tabs
        className="tabs"
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        orientation={mobileView ? "horizontal" : "vertical"}
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
