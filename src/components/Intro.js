import React from "react";
import Socialbar from "./Navigation/Socialbar";
import Navbar from "./Navigation/Navbar";

const Intro = () => {
  return (
    <div className="intro">
      <Navbar
        href1={"/projects"}
        href2={"/aboutme"}
        href3={"/contact"}
        link1={"Projects"}
        link2={"About Me"}
        link3={"Contact"}
      />
      <div className="name">
        <h1>Christopher Renfro</h1>
        <p>Front-End Developer</p>
      </div>
      <Socialbar
        linkedin={require("../images/icons8-linkedin-2-32.png")}
        github={require("../images/GitHub_Logo.png")}
      />
    </div>
  );
};

export default Intro;
