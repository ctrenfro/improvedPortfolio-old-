import React from "react";

const ProjectComponent = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="projects"
    >
      <img className="projects--img" src={props.src} alt={props.alt} />
    </a>
  );
};

export default ProjectComponent;
