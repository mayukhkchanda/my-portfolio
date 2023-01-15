import React from "react";
import Canvas from "components/Globe/Canvas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Experience from "components/Experience";
import Error from "components/Error";
import Navbar from "components/Navbar";
import Social from "components/Social";
import "./App.scss";
import About from "components/About";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Social />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
      <div className="globe">
        <Canvas />
      </div>
    </div>
  );
};

export default App;
