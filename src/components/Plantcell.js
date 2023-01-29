import React from "react";
import { Canvas } from "@react-three/fiber";
import Plant from "./Plant";
import CameraOrbitController from "./CameraOrbitController";
import "../styles/plantcell.css";

function Plantcell() {
  return (
    <>
      <div className="canvastotal1">
        <div className="canvasplant3d">
          <Canvas
            style={{
              height: "90vh",
              width: "100%",
              backgroundImage: `url('img/mercek.png')`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "inherit",
              backgroundPosition: "50% 85%",
              backgroundSize: "40vw",
            }}
          >
            <ambientLight />
            <pointLight position={[0, 10, 10]} />

            <CameraOrbitController />
            <Plant marker={{ lat: 45, lon: 15 }} />
          </Canvas>
        </div>
        <div className="yanyazi1">
          <h1 className="plantcelltitle" id="plant-title">
            Bitki Hücresi
          </h1>
          <h1 className="explanation1css" id="plant-explanation">
            <p>mitokondri</p>
            <p>ribozom</p>
            <p>endoplazmik retikulum</p>
            <p>golgi</p>
            <p>hücre zarı</p>
            <p>hücre çeperi</p>
            <p>kloroplast</p>
            <p>çekirdek</p>
            <p>sitoplazma</p>
            <p>lizozom</p>
            <p>koful</p>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Plantcell;
