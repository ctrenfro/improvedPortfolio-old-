import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro.js";
import Aboutme from "./components/Aboutme.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/improvedPortfolio/" exact element={<Intro />} />
          <Route
            path="/improvedPortfolio/aboutme"
            exact
            element={<Aboutme />}
          />
          <Route
            path="/improvedPortfolio/projects"
            exact
            element={<Projects />}
          />
          <Route
            path="/improvedPortfolio/contact"
            exact
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
