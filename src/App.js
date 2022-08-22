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
          <Route path="/" exact element={<Intro />} />
          <Route path="aboutme" exact element={<Aboutme />} />
          <Route path="projects" exact element={<Projects />} />
          <Route path="contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
