import React from "react";

import { Canvas } from "@react-three/fiber";
import Animal from "./Animal";
import CameraOrbitController from "./CameraOrbitController";
import "../styles/animalcell.css";

function Animalcell() {
  return (
    <>
      <div className="title"></div>
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
        <pointLight position={[0, 10, 10]} />
        <pointLight position={[-10, 10, 10]} />
        <pointLight position={[-10, 0, 10]} />

        <CameraOrbitController />
        <Animal marker={{ lat: 45, lon: 15 }} />
      </Canvas>
      <div className="canvas-placeholder"></div>
    </>
  );
}

export default Animalcell;
