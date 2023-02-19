import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbArrowBigDown, TbArrowBigTop } from "react-icons/tb";
import "../styles/sidemenu.css";
const scrollUp = () => {
	window.scrollBy({
		top: -810,
		behavior: "smooth",
	});
};
const scrollDown = () => {
	window.scrollBy({
		top: 810,
		behavior: "smooth",
	});
};
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

function Sidemenu() {
	const [visible, setVisible] = useState(false);
	const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);


	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 700) {
			setVisible(true);
		} else if (scrolled <= 700) {
			setVisible(false);
		}
	};
	const toggleVisible1 = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 700 && scrolled < 4500) {
			setVisible1(true);
		} else if (scrolled <= 700) {
			setVisible1(false);
		}else if (scrolled >= 4500){
      setVisible1(false);
    }
	};
  const toggleVisible2 = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 1400) {
			setVisible2(true);
		} else if (scrolled <= 1400) {
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
					style={{ display: visible2 ? "inline" : "none" }}
					onClick={scrollUp}
				></TbArrowBigTop>
				<AiOutlineHome
					className="homebutton"
					onClick={scrollToTop}
					style={{ display: visible ? "inline" : "none" }}
				></AiOutlineHome>
				<TbArrowBigDown
					className="downbutton"
					style={{ display: visible1 ? "inline" : "none" }}
					onClick={scrollDown}
				></TbArrowBigDown>
			</div>
		</div>
	);
}

export default Sidemenu;
