import React from "react";
import Navbar from "./Navigation/Navbar";
import Socialbar from "./Navigation/Socialbar";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <Navbar
        href1={"/"}
        href2={"/projects"}
        href3={"/contact"}
        link1={"Home"}
        link2={"Projects"}
        link3={"Contact Me"}
      />
      <Socialbar
        linkedin={require("../images/icons8-linkedin-2-32.png")}
        github={require("../images/GitHub_Logo.png")}
      />
      <h1 className="aboutme--title">About Me</h1>
      <p class="aboutParagraph">
        I am a new programmer with an Associate's degree in Software
        Development. I have set my focus on React I come from a background as a
        hiring and shift manager, but wanted to find a career that better
        aligned with my interests.
      </p>

      <div className="tags">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>NodeJS</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutme;
