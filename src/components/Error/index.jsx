import React from "react";
import Link from "components/Link";
import "./index.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="text">
        <p>It Looks You are</p>
        <h1>Lost</h1>
        <h1>
          In Space!! <span className="rocket">🚀</span>
        </h1>
      </div>
      <Link href="/" title="Take Me Home"></Link>
    </div>
  );
};

export default Error;
