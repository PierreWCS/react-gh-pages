import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Project} from "./types";

type Props = {
  projectImages: Project["images"];
};
export const MyCarousel = ({projectImages}: Props) => (
  <Carousel infiniteLoop={true} autoPlay={false} showThumbs={false}>
    {projectImages &&
      projectImages.map((projectImage, key) => {
        return (
          <div key={key}>
            <img
              src={`../../../assets/images/${projectImage.image}`}
              alt={projectImage.legend}
            />
          </div>
        );
      })}
  </Carousel>
);
