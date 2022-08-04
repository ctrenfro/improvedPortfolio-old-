import React from "react";
import Navbar from "./Navigation/Navbar";
import ProjectComponent from "./ProjectComponent";
import Socialbar from "./Navigation/Socialbar";

const Projects = () => {
  return (
    <section className="projects--container">
      <Navbar
        href1={"/"}
        href2={"/aboutme"}
        href3={"/contact"}
        link1={"Home"}
        link2={"About Me"}
        link3={"Contact Me"}
      />
      <Socialbar
        linkedin={require("../images/icons8-linkedin-2-32.png")}
        github={require("../images/GitHub_Logo.png")}
      />
      <h2 className="project--title">Projects</h2>
      <div className="projects--div">
        <ProjectComponent
          src={require("../images/gp3image.png")}
          link={"https://gpt3api.herokuapp.com/"}
          alt={"gpt3 image"}
        />
        <ProjectComponent
          src={require("../images/ecommerce.png")}
          link={"https://ecommerce-sanity-r5ek846ij-ctrenfro.vercel.app/"}
          alt={"ecommerce site"}
        />
        <ProjectComponent
          src={require("../images/weatherApp.png")}
          link={"http://ctrenfro.github.io/WeatherApp"}
          alt="My Weather App"
        />
        <ProjectComponent
          src={require("../images/Picture1.jpg")}
          link={"http://ctrenfro.github.io/mernProject"}
          alt={"Marn Project"}
        />
      </div>
    </section>
  );
};

export default Projects;
