import React from "react";
import "../styles/differences.css";
import Marquee from "react-fast-marquee";
import Stars1 from "./Stars1";

function CarouselDifferences() {
  return (
    <>
      <div className="diffcontainer">
        <div className="title-container">MİTOZ VE MAYOZ BÖLÜNME FARKLARI</div>
        <div className="diff-container">
          <div style={{ width: "10%" }}></div>
          <div className="plantcelldiff-cont" style={{ width: "50%" }}>
            <div style={{ height: "10%", fontSize: "2vw" }}>MİTOZ HÜCRESİ</div>
            <div className="order-cont">
              <div style={{ width: "20%" }}></div>
              <div className="plantcell-diff">
                <p>VÜCUT HÜCRELERİNDE GÖRÜLÜR.</p>
                <p>SONUCUNDA İKİ HÜCRE OLUŞUR.</p>
                <p>KROMOZOM SAYISI SABİT KALIR.</p>
                <p>OLUŞAN HÜCRELERİN GENETİK YAPISI ANA HÜCRE İLE AYNIDIR.</p>
                <p>
                  TEK HÜCRELİ CANLILARDA ÜREMEYİ, ÇOK HÜCRELİ CANLILARDA İSE
                  YARALARIN ONARILMASI VE BÜYÜME GİBİ OLAYLARI SAĞLAR.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "5%" }}></div>
          <div className="animalcelldiff-cont" style={{ width: "50%" }}>
            <div style={{ height: "10%", fontSize: "2vw" }}>MAYOZ HÜCRESİ</div>
            <div className="order-cont">
              <div style={{ width: "20%" }}></div>
              <div className="animalcell-diff">
                <p>ÜREME ANA HÜCRELERİNDE GÖRÜLÜR.</p>
                <p>SONUCUNDA DÖRT HÜCRE OLUŞUR.</p>
                <p>KROMOZOM SAYISI YARIYA İNER.</p>
                <p>
                  OLUŞAN HÜCRELERİN GENETİK YAPISI ANA HÜCRELERİNDEN VE
                  BİRBİRİNDEN FARKLIDIR.
                </p>
                <p>
                  EŞEYLİ ÜREYEN CANLILARDA EŞEY(ÜREME) HÜCRELERİNİN OLUŞUMUNU
                  SAĞLAR.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "10%" }}></div>
        </div>
        <Marquee
          style={{
            height: "7vh",
            itemAlign: "center",
            overflow: "hidden",
            textIndent: "8px",
            wordSpacing: "4px",
          }}
          pauseOnHover="true"
          direction="right"
          speed="60"
          gradient="false"
          gradientWidth="0"
        >
          <Stars1 />
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://sketchfab.com/3d-models/animal-cell-downloadable-ddc40bb0900544959f02d3ff83c32615"
            target="_blank"
            rel="noreferrer"
          >
            3D ANIMAL CELL MODEL IS BASED ON 'ANIMAL CELL - DOWNLOADABLE'
          </a>

          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://sketchfab.com/LauriPurhonen"
            target="_blank"
            rel="noreferrer"
          >
            BY LAURI PURHONEN
          </a>

          <a
            style={{ textDecoration: "none", color: "white" }}
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            LICENSED UNDER CC-BY-4.0,
          </a>

          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://sketchfab.com/3d-models/plant-cell-cell-structure-1c5ce80d03d149208d30cc5aeb6e42fb"
            target="_blank"
            rel="noreferrer"
          >
            3D PLANT CELL MODEL IS BASED ON "PLANT CELL - CELL STRUCTURE"
          </a>

          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://sketchfab.com/objects1"
            target="_blank"
            rel="noreferrer"
          >
            BY VIDA SYSTEMS
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            LICENSED UNDER CC-BY-NC-ND-4.0,
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.youtube.com/@fenixakademi8528"
            target="_blank"
            rel="noreferrer"
          >
            MITOZ VE MAYOZ BÖLÜNME VIDEOLARI: FENIX AKADEMI,
          </a>
        </Marquee>
      </div>
    </>
  );
}

export default CarouselDifferences;
