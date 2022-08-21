import React from "react";

const ProjectComponent = (props) => {
  return (
    <div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="projects"
      >
        <img className="projects--img" src={props.src} alt={props.alt} />
      </a>
      <div className="projectDiv">
        <h3 className="projectTitle">{props.title}</h3>
        <p className="projectDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
