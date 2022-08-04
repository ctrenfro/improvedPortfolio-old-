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
      <p class="aboutParagraph">
        I am a new programmer that has recently receieved an Associate's degree
        in Software Development. Since I graduated I have been supplementing my
        education with online courses to focus on front end and full stack
        development, particulary using React. I come from a background as a
        hiring and shift manager, but wanted to find a career that better
        aligned with my interests.
      </p>
    </div>
  );
};

export default Aboutme;
