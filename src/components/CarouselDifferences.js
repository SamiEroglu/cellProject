import React from "react";
import "../styles/differences.css";

function CarouselDifferences() {
  return (
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
    </div>
  );
}

export default CarouselDifferences;
