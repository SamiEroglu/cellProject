import React from "react";
import "../styles/secondpage.css";
import Animalcell from "./Animalcell";
import Plantcell from "./Plantcell";

function Secondpage() {
  return (
    <div className="sp-container">
      <div className="mercek-cont1" id="plant-cell">
        <Plantcell className="animalcell-3d"></Plantcell>
      </div>
      <div className="mercek-cont2" id="animal-cell">
        <Animalcell className="animalcell-3d"></Animalcell>
      </div>
    </div>
  );
}

export default Secondpage;
