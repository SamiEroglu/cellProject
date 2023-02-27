import React, { useState } from "react";
import Sparkles from "react-sparkle";
import "../styles/stars.css";

function Stars() {
  const [isOpen, setIsOpen] = useState(2000);
  setTimeout(() => {
    setIsOpen(3);
  }, 1);
  return (
    <Sparkles
      style={{ position: "fixed" }}
      flicker={false}
      fadeOutSpeed={isOpen}
      count={300}
      maxSize={10}
      minSize={8}
      flickerSpeed={"normal"}
    />
  );
}
export default Stars;
