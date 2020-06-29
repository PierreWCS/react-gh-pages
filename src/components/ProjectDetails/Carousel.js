import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ProjectDetails.css";

export default ({
  imagesData,
  setFullScreen,
  setAutoPlayStatus,
  autoPlayStatus,
  setSelectedImage,
}) => (
  <Carousel infiniteLoop={true} autoPlay={autoPlayStatus} showThumbs={false}>
    {imagesData
      ? imagesData.images.map((projectImage, key) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setAutoPlayStatus(false);
                setFullScreen(true);
                setSelectedImage(projectImage);
              }}
              key={key}
            >
              <img
                src={require(`../../assets/images/${projectImage.image}`)}
                alt=""
              />
            </div>
          );
        })
      : null}
  </Carousel>
);
