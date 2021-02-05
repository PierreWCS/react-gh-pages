import React, { useState } from "react";
import "./ProjectOverview.css";

import projectsData from "../../ProjectDetails/projectsData.json";
import MyCarousel from "../../ProjectDetails/Carousel";

const ProjectOverview = ({ project, setAutoPlayStatus }) => {
  const [isCarouselFullScreen, setIsCarouselFullScreen] = useState(false);

  return (
    <div
      key={project.id}
      className={
        project.id % 2
          ? "projectOverview projectOverviewDark"
          : "projectOverview"
      }
    >
      <h2 className="projectTitle">{project.name}</h2>
      <div className="underlineProjectTitle"></div>
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
        <MyCarousel
          autoPlayStatus={false}
          setAutoPlayStatus={setAutoPlayStatus}
          isFullScreen={isCarouselFullScreen}
          setIsFullScreen={setIsCarouselFullScreen}
          projectImages={project.images}
        />
      </div>

      <div className="projectTextContainer">
        <div
          className="projectTextElementsContainers"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="projectDescriptionContainer">
            <h4 style={{ margin: "0 0 .5rem" }}>Description:</h4>
            <p style={{ margin: 0, color: "#acadb2" }}>{project.description}</p>
          </div>
          <div className="projectTechsContainer">
            <h4 style={{ margin: "0 0 .5rem 0" }}>Technologies used:</h4>
            <p style={{ color: "#acadb2", margin: 0 }}>
              {project.technologies}
            </p>
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
      </div>
    </div>
  );
};

export default ProjectOverview;
