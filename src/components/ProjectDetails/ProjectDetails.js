import React from "react";
import "./ProjectDetails.css";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectDetails = ({ setProjectDetails, imagesData }) => {
  return (
    <div className="projectDetailsContainer">
      <button
        className="closeDetailsButton"
        onClick={() => {
          document.body.style.overflow = "auto";
          setProjectDetails(false);
        }}
      >
        Close
      </button>
      <div className="firstColDetails">
        <Carousel imagesData={imagesData} />
      </div>
      <div className="secondColDetails">
        <h2>{imagesData.name}.</h2>
        <h3>Description.</h3>
        <p>{imagesData.description}</p>
        <h3>Technologies.</h3>
        <p>{imagesData.technologies}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={imagesData.link}
          className="githubLinkDetails"
        >
          See on Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={imagesData.demo}
          className="githubLinkDetails"
        >
          Try the demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
