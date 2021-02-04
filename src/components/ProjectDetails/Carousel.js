import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ProjectDetails.css";

const MyCarousel = ({ autoPlayStatus, projectImages, setAutoPlayStatus }) => (
  <Carousel infiniteLoop={true} autoPlay={autoPlayStatus} showThumbs={false}>
    {projectImages
      ? projectImages.map((projectImage, key) => {
          return (
            <div
              onClick={() => {
                setAutoPlayStatus(false);
              }}
              key={key}
            >
              <img
                src={require(`../../assets/images/${projectImage.image}`)}
                alt={projectImage.legend}
              />
            </div>
          );
        })
      : null}
  </Carousel>
);

export default MyCarousel;
