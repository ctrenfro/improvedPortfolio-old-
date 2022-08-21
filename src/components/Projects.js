import React from "react";
import Navbar from "./Navigation/Navbar";
import ProjectComponent from "./ProjectComponent";
import Socialbar from "./Navigation/Socialbar";

const Projects = () => {
  return (
    <section className="projects--container">
      <Navbar
        href1={"/improvedPortfolio/"}
        href2={"/improvedPortfolio/aboutme"}
        href3={"/improvedPortfolio/contact"}
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
          title="OpenAI's GPT3 AI"
          description="The GPT3 ai will repsond to your prompts."
        />
        <ProjectComponent
          src={require("../images/ecommerce.png")}
          link={"https://ecommerce-sanity-r5ek846ij-ctrenfro.vercel.app/"}
          alt={"ecommerce site"}
          title="Sanity Ecommerce"
          description="Simple ecommerce site built with sanity and stripe."
        />
        <ProjectComponent
          src={require("../images/weatherApp.png")}
          link={"http://ctrenfro.github.io/WeatherApp"}
          alt="My Weather App"
          title="3 Day Forecast"
          description="A simple weather app"
        />
        <ProjectComponent
          src={require("../images/Picture1.jpg")}
          link={"http://ctrenfro.github.io/mernProject"}
          alt={"Mern Project"}
          title="YourPlaces"
          description="Create an account and post places you have visited."
        />
        <ProjectComponent
          src={require("../images/calculator.png")}
          link={"https://ctrenfro.github.io/calculator/"}
          alt={"calculator"}
          title="Calculator"
          description="Simple calculator app"
          className="calculator"
        />
      </div>
    </section>
  );
};

export default Projects;
