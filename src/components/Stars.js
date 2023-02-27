import React from "react";
import Sparkles from "react-sparkle";
import "../styles/stars.css";

function Stars() {
  return (
    <div className="sparkle">
      <Sparkles
        id="spark"
        flicker={true}
        fadeOutSpeed={1}
        count={300}
        newSparkleOnFadeOut={true}
        flickerSpeed={"normal"}
      />
    </div>
  );
}
export default Stars;
