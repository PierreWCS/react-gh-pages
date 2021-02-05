import React, { useState } from "react";
import "./ProjectOverview.css";

import MyCarousel from "./Carousel";
import ProjectText from "./ProjectText";

const ProjectOverview = ({ project }) => {
  return (
    <div
      className={
        project.id % 2
          ? "projectOverview projectOverviewDark"
          : "projectOverview"
      }
    >
      <h2 className="projectTitle">{project.name}</h2>
      <div className="underlineProjectTitle" />
      <p
        style={{
          fontSize: "12px",
          color: "#acadb2",
          width: "100%",
          textAlign: "start",
          paddingBottom: "1rem",
        }}
      >
        {project.type}
      </p>

      <div className="imageContainer">
        <MyCarousel projectImages={project.images} />
      </div>
      <div className="projectTextContainer">
        <ProjectText project={project} />
      </div>
    </div>
  );
};

export default ProjectOverview;
