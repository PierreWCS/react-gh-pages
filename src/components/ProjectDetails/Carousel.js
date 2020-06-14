import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../assets/images/WildBeersAbout.png";

export default ({ imagesData }) => (
  <Carousel>
    {imagesData
      ? imagesData.images.map((projectImage, key) => {
          console.log(projectImage);
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
