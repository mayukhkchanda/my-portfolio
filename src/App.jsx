import React from "react";
import Canvas from "components/Globe/Canvas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Error from "components/Error";
import Navbar from "components/Navbar";
import Social from "components/Social";
import About from "components/About";
import Contacts from "components/Contacts";
import Experience from "components/Experience";
import Projects from "components/Projects";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Social />
        <div className="content">
          <Routes>
            <Route exact path="/my-portfolio" element={<Home />} />
            <Route exact path="/my-portfolio/about" element={<About />} />
            <Route
              exact
              path="/my-portfolio/experience"
              element={<Experience />}
            />
            <Route exact path="/my-portfolio/projects" element={<Projects />} />
            <Route exact path="/my-portfolio/contacts" element={<Contacts />} />
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
