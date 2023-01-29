import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbArrowBigDown, TbArrowBigTop } from "react-icons/tb";
import "../styles/sidemenu.css";
const handleClickScroll = () => {
  const element = document.getElementById("animal-cell");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScroll1 = () => {
  const element = document.getElementById("plant-cell");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Sidemenu() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 850) {
      setVisible(true);
    } else if (scrolled <= 850) {
      setVisible(false);
    }
  };
  const [visible1, setVisible1] = useState(false);

  const toggleVisible1 = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1700) {
      setVisible1(true);
    } else if (scrolled <= 1700) {
      setVisible1(false);
    }
  };
  const [visible2, setVisible2] = useState(false);

  const toggleVisible2 = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled < 1700 && scrolled > 850) {
      setVisible2(true);
    } else if (scrolled >= 1700 || scrolled <= 850) {
      setVisible2(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  window.addEventListener("scroll", toggleVisible1);
  window.addEventListener("scroll", toggleVisible2);

  return (
    <div className="sm-container">
      <div className="sidemenu-pos">
        <TbArrowBigTop
          className="upbutton"
          style={{ display: visible1 ? "inline" : "none" }}
          onClick={handleClickScroll1}
        ></TbArrowBigTop>
        <AiOutlineHome
          className="homebutton"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        ></AiOutlineHome>
        <TbArrowBigDown
          className="downbutton"
          style={{ display: visible2 ? "inline" : "none" }}
          onClick={handleClickScroll}
        ></TbArrowBigDown>
      </div>
    </div>
  );
}

export default Sidemenu;
