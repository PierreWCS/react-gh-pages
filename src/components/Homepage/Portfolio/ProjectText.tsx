import React from "react";
import "./ProjectText.css";
import { Project } from "./types";

type Props = {
  project: Project;
};
const ProjectText = ({ project }: Props) => (
  <div className="projectTextElementsContainers">
    <div className="projectDescriptionContainer">
      <h4 style={{ margin: "0 0 .5rem" }}>Description:</h4>
      <p style={{ margin: 0, color: "#acadb2" }}>{project.description}</p>
    </div>
    <div className="projectTechsContainer">
      <h4 style={{ margin: "0 0 .5rem 0" }}>Technologies used:</h4>
      <p style={{ color: "#acadb2", margin: 0 }}>{project.technologies}</p>
    </div>
    <div className="columnButtonsText">
      <a
        style={{
          color: "#acadb2",
          textDecoration: "none",
          border: "solid 1px #acadb2",
          boxSizing: "border-box",
          marginBottom: "1rem",
          padding: ".8rem",
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={project.link}
      >
        Code on Github
      </a>
      <a
        style={{
          color: "#ffaf29",
          textDecoration: "none",
          border: "solid 1px #ffaf29",
          boxSizing: "border-box",
          padding: ".8rem",
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={project.demo}
      >
        Try the demo
      </a>
    </div>
  </div>
);

export default ProjectText;
