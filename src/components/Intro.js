import React from "react";
import Socialbar from "./Navigation/Socialbar";
import Navbar from "./Navigation/Navbar";

const Intro = () => {
  return (
    <div className="intro">
      <Navbar
        href1={"/improvedPortfolio/projects"}
        href2={"/improvedPortfolio/aboutme"}
        href3={"/improvedPortfolio/contact"}
        link1={"Projects"}
        link2={"About Me"}
        link3={"Contact"}
      />
      <div className="introduction">
        <h1 className="hi">Hi,</h1>
        <h1 className="I">I'm</h1>
        <h1 className="name">Christopher Renfro</h1>
        <p className="title">Front-End Developer</p>
      </div>
      <Socialbar
        linkedin={require("../images/icons8-linkedin-2-32.png")}
        github={require("../images/GitHub_Logo.png")}
      />
    </div>
  );
};

export default Intro;
