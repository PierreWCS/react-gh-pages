import React, { useState } from 'react';
import './ProjectDetails.css';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectDetails = ({ setIsProjectDetailsVisible, imagesData, project }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [autoPlayStatus, setAutoPlayStatus] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="projectDetailsContainer">
      {isFullScreen && (
        <div className="imageFullSizeContainer">
          <img
            className="projectImageFullScreen"
            src={require(`../../assets/images/${selectedImage.image}`)}
            alt="project full screen"
          />

          <FontAwesomeIcon
            className="closeImageFullScreen fa-3x"
            onClick={() => {
              setIsFullScreen(false);
              setAutoPlayStatus(true);
              setSelectedImage(null);
            }}
            color="#fff"
            icon={faTimesCircle}
          />
        </div>
      )}
      <button
        className="closeDetailsButton"
        onClick={() => {
          document.body.style.overflow = 'auto';
          setIsProjectDetailsVisible(false);
        }}
      >
        Close
      </button>
      <div className="firstColDetails">
        <Carousel
          autoPlayStatus={autoPlayStatus}
          imagesData={imagesData}
          setAutoPlayStatus={setAutoPlayStatus}
          setFullScreen={setIsFullScreen}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <div className="secondColDetails">
        <h2>{project.name}.</h2>
        <h3>Description.</h3>
        <p>{project.description}</p>
        <h3>Technologies.</h3>
        <p>{project.technologies}</p>
        <div className="buttonsContainerProjectDetails">
          <a target="_blank" rel="noopener noreferrer" href={project.link} className="githubLinkDetails">
            See code
          </a>
          <a target="_blank" rel="noopener noreferrer" href={project.demo} className="githubLinkDetails">
            Try the demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
