import React from "react";
import Carousel from "better-react-carousel";
function Carousel1() {
  return (
    <Carousel cols={1} rows={1} gap={5} loop>
      <Carousel.Item>
        <video width="85%" controls autoPlay type="video/mp4">
          <source src="videos/yildiz.mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
      <Carousel.Item></Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
