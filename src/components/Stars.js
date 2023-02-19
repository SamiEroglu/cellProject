import React from "react";
import Sparkles from "react-sparkle";
import "../styles/stars.css";

function Stars() {
	return (
		<div className="sparkle">
			<Sparkles
				flicker={true}
				fadeOutSpeed={30}
				count={300}
				newSparkleOnFadeOut={true}
				flickerSpeed={"fastest"}
			/>
		</div>
	);
}
export default Stars;