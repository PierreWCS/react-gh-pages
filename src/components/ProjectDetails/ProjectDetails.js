import React from "react";
import "./ProjectDetails.css";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectDetails = ({ setProjectDetails, imagesData }) => {
  console.log(imagesData);
  return (
    <div className="projectDetailsContainer">
      <button
        className="closeDetailsButton"
        onClick={() => setProjectDetails(false)}
      >
        Close
      </button>
      <div className="firstColDetails">
        <div className="screenshotsContainer">
          <Carousel imagesData={imagesData} />
        </div>
      </div>
      <div className="secondColDetails">
        <h2>Name.</h2>
        <h3>Description.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, cumque
          cupiditate deserunt dolore eos exercitationem illo ipsam itaque
          laboriosam nihil, pariatur quae quibusdam quidem quis quod temporibus
          voluptas. Et, optio.
        </p>
        <h3>Technologies.</h3>
        <p>Techno, Techno, Techno</p>
        <a href="https://google.com">
          <button className="githubLinkDetails">See on Github</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
