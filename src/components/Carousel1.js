import React from "react";
import Carousel from "better-react-carousel";
import "../styles/carousel1.css";
function Carousel1() {
  return (
    <div className="carouseldiv">
      <div className="div1" />
      <div className="carouselcontainer">
        <Carousel cols={1} rows={1} gap={0} loop>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/yildiz.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/mitozasama.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/interfaz1.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/profaz2.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/metafaz3.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/anafaz4.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/telofaz5.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video
              width="72%"
              controls
              autoPlay
              type="video/mp4"
              style={{
                borderTopRightRadius: "48px",
                borderTopLeftRadius: "48px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <source src="videos/sonsahne.mp4" />
            </video>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="div3" />
    </div>
  );
}

export default Carousel1;
