import React from "react";
import "../styles/differences.css";

function Differences() {
	return (
		<div className="diffcontainer">
			<div className="title-container">BİTKİ VE HAYVAN HÜCRESİ FARKLARI</div>
			<div className="diff-container">
				<div className="plantcelldiff-cont" style={{ width: "50%" }}>
					<div style={{ height: "10%", fontSize: "2vw" }}>BİTKİ HÜCRESİ</div>
					<div className="order-cont">
						<div style={{ width: "27%" }}></div>
						<div className="plantcell-diff">
							<p>KÖŞELİ BİR YAPIDADIR.</p>
							<p>HÜCRE DUVARI VARDIR.</p>
							<p>KLOROPLAST BULUNUR.</p>
							<p>SENTRİYOLLERİ YOKTUR.</p>
							<p>KOFULLARI BÜYÜK VE AZ SAYIDADIR.</p>
							<p>LİZOZOM İLKEL BİTKİ HÜCRELERİNDE BULUNUR.</p>
						</div>
					</div>
				</div>
				<div className="animalcelldiff-cont" style={{ width: "50%" }}>
					<div style={{ height: "10%", fontSize: "2vw" }}>HAYVAN HÜCRESİ</div>
					<div className="order-cont">
						<div style={{ width: "25%" }}></div>
						<div className="animalcell-diff">
							<p>YUVARLAK BİR YAPIDADIR.</p>
							<p>HÜCRE DUVARI YOKTUR.</p>
							<p>KLOROPLAST BULUNMAZ.</p>
							<p>SENTRİYOLLERİ VARDIR.</p>
							<p>KOFULLARI KÜÇÜK VE ÇOK SAYIDADIR.</p>
							<p>LİZOZOM BULUNUR.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Differences;
