import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import "./index.scss";

const Index = (props) => {
  const [tabState, setTabState] = useState({ index: 0, mobileVw: false });
  const { tabPanelData } = props;

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setTabState((prevState) => ({ ...prevState, mobileVw: true }));
    }
  }, []);

  const handleChange = (_, newIndex) => {
    setTabState((prevState) => ({ ...prevState, index: newIndex }));
  };

  const { index, mobileVw } = tabState;

  return (
    <div className={`tabs-root ${mobileVw ? "mobile" : ""}`}>
      <Tabs
        className="tabs"
        value={index}
        onChange={handleChange}
        aria-label="tabs"
        orientation={mobileVw ? "horizontal" : "vertical"}
        variant="scrollable"
      >
        <Tab className="tab" label="Amdocs" id="tab-0" />
        <Tab className="tab" label="Cognizant" id="tab-1" />
      </Tabs>
      <TabPanel key={tabPanelData[index]?.company} data={tabPanelData[index]} />
    </div>
  );
};

export default Index;
