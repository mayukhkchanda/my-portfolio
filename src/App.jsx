import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <div className="brief">
          <h2>Content Here</h2>
        </div>
      </div>
      <div className="globe">
        <Canvas />
      </div>
    </div>
  );
};

export default App;
