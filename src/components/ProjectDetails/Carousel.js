import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ProjectDetails.css";

const MyCarousel = ({ projectImages }) => (
  <Carousel infiniteLoop={true} autoPlay={false} showThumbs={false}>
    {projectImages &&
      projectImages.map((projectImage, key) => {
        return (
          <div key={key}>
            <img
              src={require(`../../assets/images/${projectImage.image}`)}
              alt={projectImage.legend}
            />
          </div>
        );
      })}
  </Carousel>
);

export default MyCarousel;
