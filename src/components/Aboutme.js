import React from "react";
import Navbar from "./Navigation/Navbar";
import Socialbar from "./Navigation/Socialbar";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <Navbar
        href1={"/improvedPortfolio/"}
        href2={"/improvedPortfolio/projects"}
        href3={"/improvedPortfolio/contact"}
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
        Development. I have spent about a year practicing on my own mostly with
        React, but am interested in any web development technology. I come from
        a background as a hiring and shift manager, but wanted to find a career
        in technolgy to build a future in.
      </p>

      <div className="tags">
        <ul>
          <li className="tagItems">HTML</li>
          <li className="tagItems">CSS</li>
          <li className="tagItems">Javascript</li>
          <li className="tagItems">React</li>
          <li className="tagItems">NodeJS</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutme;
