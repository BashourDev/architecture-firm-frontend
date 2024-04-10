import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectImageCarousel = ({ media = [] }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      className="max-h-[20rem] mx-auto max-w-sm xl:max-w-md 2xl:max-w-lg object-contain object-center rounded border border-gray-200"
    >
      {media?.map((media, i) => (
        <>
          <img src={media?.original_url} className="h-80 object-contain" />
        </>
      ))}
    </Carousel>
  );
};

export default ProjectImageCarousel;
