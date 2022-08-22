import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro.js";
import Aboutme from "./components/Aboutme.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div id="app">
      <BrowserRouter basename="/improvedPortfolio">
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="aboutme" element={<Aboutme />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
