import React, { useState } from "react";
import "./ProjectDetails.css";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectDetailsDesc from "./ProjectDetailsDesc";

const ProjectDetails = ({ setIsProjectDetailsVisible, project }) => {
  const [autoPlayStatus, setAutoPlayStatus] = useState(true);

  return (
    <div
      style={{
        top: 0,
        left: 0,
        padding: "1rem",
        boxSizing: "border-box",
        position: "fixed",
        height: "100vh",
        width: "100%",
        backgroundColor: "#252734",
        zIndex: 2,
        fontFamily: "Open Sans, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="projectDetailsContainer"
    >
      <button
        className="closeDetailsButton"
        onClick={() => {
          document.body.style.overflow = "auto";
          setIsProjectDetailsVisible(false);
        }}
      >
        Close
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "65%",
          boxSizing: "border-box",
        }}
      >
        <Carousel
          autoPlayStatus={autoPlayStatus}
          projectImages={project.images}
          setAutoPlayStatus={setAutoPlayStatus}
        />
      </div>

      <ProjectDetailsDesc project={project} />
    </div>
  );
};

export default ProjectDetails;
