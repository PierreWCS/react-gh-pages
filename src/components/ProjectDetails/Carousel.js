import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ProjectDetails.css";

export default ({ imagesData }) => (
  <Carousel infiniteLoop={true} autoPlay showThumbs={false}>
    {imagesData
      ? imagesData.images.map((projectImage, key) => {
          return (
            <div key={key}>
              <img
                src={require(`../../assets/images/${projectImage.image}`)}
                alt=""
              />
              <p className="legend">{projectImage.legend}</p>
            </div>
          );
        })
      : null}
  </Carousel>
);
