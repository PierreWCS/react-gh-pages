import React, { useState } from "react";
import "./ProjectDetails.css";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = ({ setProjectDetails, imagesData }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [autoPlayStatus, setAutoPlayStatus] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="projectDetailsContainer">
      {fullScreen ? (
        <div className="imageFullSizeContainer">
          <img
            className="projectImageFullScreen"
            src={require(`../../assets/images/${selectedImage.image}`)}
            alt="project full screen"
          />

          <FontAwesomeIcon
            className="closeImageFullScreen fa-3x"
            onClick={() => {
              setFullScreen(false);
              setAutoPlayStatus(true);
              setSelectedImage(null);
            }}
            color="#fff"
            icon={faTimesCircle}
          />
        </div>
      ) : null}
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
        <Carousel
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
          autoPlayStatus={autoPlayStatus}
          setAutoPlayStatus={setAutoPlayStatus}
          imagesData={imagesData}
        />
      </div>
      <div className="secondColDetails">
        <h2>{imagesData.name}.</h2>
        <h3>Description.</h3>
        <p>{imagesData.description}</p>
        <h3>Technologies.</h3>
        <p>{imagesData.technologies}</p>
        <div className="buttonsContainerProjectDetails">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={imagesData.link}
            className="githubLinkDetails"
          >
            See code
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
    </div>
  );
};

export default ProjectDetails;
