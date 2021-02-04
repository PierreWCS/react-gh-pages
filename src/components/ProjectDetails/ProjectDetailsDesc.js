import React from "react";

const ProjectDetailsDesc = ({ project }) => {
  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        textAlign: "start",
        width: "65%",
        height: "90%",
      }}
    >
      <h2>{project.name}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "25%" }}>
          <h3>Description:</h3>
          <p>{project.description}</p>
        </div>

        <div style={{ width: "30%" }}>
          <h3>Technologies:</h3>
          <p>{project.technologies}</p>
        </div>
        <div className="buttonsContainerProjectDetails">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            className="githubLinkDetails"
          >
            Code on Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.demo}
            className="demoLinkDetails"
          >
            Try the demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsDesc;
