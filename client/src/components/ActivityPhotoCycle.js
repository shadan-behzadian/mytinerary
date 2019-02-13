import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const PhotoCycle = props => {
  const images = props.images;

  console.log(images);
  const imageList = images.map(image => {
    return <img src={image.img} key={image.img} />;
  });

  return <Slider>{imageList}</Slider>;
};

export default PhotoCycle;
