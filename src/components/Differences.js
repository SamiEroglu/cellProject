import React from "react";
import "../styles/differences.css";

function Differences() {
	return (
		<div className='diffcontainer'>
			<div className='title-container'>BİTKİ VE HAYVAN HÜCRESİ FARKLARI</div>
			<div className='diff-container'>
				<div style={{ width: "10%" }}></div>
				<div className='plantcelldiff-cont' style={{ width: "50%" }}>
					<div style={{ height: "10%", fontSize: "2vw" }}>BİTKİ HÜCRESİ</div>
					<div className='order-cont'>
						<div style={{ width: "25%" }}></div>
						<div className='plantcell-diff'>
							<p>Köşeli bir yapıdadır.</p>
							<p>Hücre duvarı vardır.</p>
							<p>Kloroplast bulunur.</p>
							<p>Sentriyollerİ yoktur.</p>
							<p>Kofulları büyük ve az sayıdadır.</p>
							<p>Lizozom ilkem bitki hücrelerinde bulunur.</p>
						</div>
					</div>
				</div>
				<div style={{ width: "5%" }}></div>
				<div className='animalcelldiff-cont' style={{ width: "50%" }}>
					<div style={{ height: "10%", fontSize: "2vw" }}>HAYVAN HÜCRESİ</div>
					<div className='order-cont'>
						<div style={{ width: "23%" }}></div>
						<div className='animalcell-diff'>
							<p>Yuvarlak bir yapıdadır.</p>
							<p>Hücre duvarı yoktur.</p>
							<p>Kloroplast bulunmaz.</p>
							<p>Sentriyollerİ vardır.</p>
							<p>Kofulları küçük ve çok sayıdadır.</p>
							<p>Lizozom bulunur.</p>
						</div>
					</div>
				</div>
				<div style={{ width: "10%" }}></div>
			</div>
		</div>
	);
}

export default Differences;
