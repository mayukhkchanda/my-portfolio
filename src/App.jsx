import React from "react";
import Canvas from "components/Globe/Canvas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "components/About";
import Experience from "components/Experience";
import "./App.scss";
import Error from "components/Error";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
      <div className="globe">
        <Canvas />
      </div>
    </div>
  );
};

export default App;
