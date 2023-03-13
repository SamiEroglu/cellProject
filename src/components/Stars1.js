import React, { useState } from "react";
import Sparkles from "react-sparkle";
import "../styles/stars.css";

function Stars1() {
  const [isOpen, setIsOpen] = useState(2000);
  setTimeout(() => {
    setIsOpen(3);
  }, 1);
  return (
    <Sparkles
      style={{ position: "fixed" }}
      flicker={false}
      fadeOutSpeed={isOpen}
      count={10}
      maxSize={10}
      minSize={8}
      flickerSpeed={"slow"}
    />
  );
}
export default Stars1;
