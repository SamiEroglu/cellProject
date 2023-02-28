import React from "react";
import { Canvas } from "@react-three/fiber";
import Animal from "./Animal";
import CameraOrbitController from "./CameraOrbitController";
import "../styles/animalcell.css";

function Animalcell() {
  return (
    <>
      <div className="canvastotal">
        <div className="canvasanimal3d">
          <Canvas
            style={{
              height: "90vh",
              backgroundImage: `url('img/mercek.png')`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "inherit",
              backgroundPosition: "50% 85%",
              backgroundSize: "40vw",
            }}
          >
            <pointLight position={[6, 2, -10]} />
            <pointLight position={[-10, 0, 15]} />
            <pointLight position={[-10, 0, 10]} />

            <CameraOrbitController />
            <Animal />
          </Canvas>
        </div>
        <div className="yanyazi">
          <h1 className="animalcelltitle" id="title">
            Hayvan Hücresi
          </h1>
          <h1 className="explanationcss" id="explanation">
            <p>Mitokondri</p>
            <p>Ribozom</p>
            <p>Endoplazmik retikulum</p>
            <p>Golgi cisimciği</p>
            <p>Hücre zarı</p>
            <p>Çekirdek</p>
            <p>Sitoplazma</p>
            <p>Lizozom</p>
            <p>Koful</p>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Animalcell;
