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
            <p>Mitokondri</p>
            <p>Ribozom</p>
            <p>Endoplazmik retikulum</p>
            <p>Golgi cisimciği</p>
            <p>Hücre duvarı</p>
            <p>Kloroplast</p>
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

export default Plantcell;
