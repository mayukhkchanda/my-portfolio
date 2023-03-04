import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TabPanel = (props) => {
  const { data } = props;
  return (
    <div className="tab-panel">
      <div className="header">
        <p className="title">
          {`${data.designation} `}
          <a
            className="header-link"
            target="_blank"
            rel="noreferrer"
            href={data.website}
          >
            @{data.company}
          </a>
        </p>
        <p className="duration">{data.duration}</p>
      </div>
      <div className="list">
        {data.task.map((task) => (
          <div className="list-content" key={task}>
            <span>
              <ArrowRightIcon />
            </span>
            <p>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabPanel;
