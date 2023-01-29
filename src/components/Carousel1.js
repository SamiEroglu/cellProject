import React from "react";
import Carousel from "better-react-carousel";

function Carousel1() {
  return (
    <Carousel cols={1} rows={1} gap={5} loop>
      <Carousel.Item>
        <a href="1" src="videos/yıldız"></a>
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
