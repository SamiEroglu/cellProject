import React from "react";
import "../styles/differences.css";
import Marquee from "react-fast-marquee";
import Stars1 from "./Stars1";

function CarouselDifferences() {
	return (
		<>
			<div className='diffcontainer'>
				<div className='title-container'>MİTOZ VE MAYOZ BÖLÜNME FARKLARI</div>
				<div className='diff-container'>
					<div style={{ width: "10%" }}></div>
					<div className='plantcelldiff-cont' style={{ width: "50%" }}>
						<div style={{ height: "10%", fontSize: "2vw" }}>MİTOZ HÜCRESİ</div>
						<div className='order-cont'>
							<div style={{ width: "20%" }}></div>
							<div className='plantcell-diff'>
								<p>Vücut hücrelerinde görülür.</p>
								<p>Sonucunda iki hücre oluşur.</p>
								<p>Kromozom sayısı sabit kalır.</p>
								<p>Oluşan hücrelerin genetik yapısı ana hücre ile aynıdır.</p>
								<p>
									Tek hücreli canlılarda üremeyi, çok hücreli canlılarda ise
									yaraların onarılması ve büyüme gibi olayları sağlar.
								</p>
							</div>
						</div>
					</div>
					<div style={{ width: "5%" }}></div>
					<div className='animalcelldiff-cont' style={{ width: "50%" }}>
						<div style={{ height: "10%", fontSize: "2vw" }}>MAYOZ HÜCRESİ</div>
						<div className='order-cont'>
							<div style={{ width: "20%" }}></div>
							<div className='animalcell-diff'>
								<p>Üreme ana hücrelerinde görülür.</p>
								<p>Sonucunda dört hücre oluşur.</p>
								<p>Kromozom sayısı yarıya iner.</p>
								<p>
									Oluşan hücrelerin genetik yapısı ana hücrelerinden ve
									birbirinden farklıdır.
								</p>
								<p>
									Eşeyli üreyen canlılarda eşey(üreme) hücrelerinin oluşumunu
									sağlar.
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
					pauseOnHover='true'
					direction='right'
					speed='60'
					gradient='false'
					gradientWidth='0'
				>
					<Stars1 />
					<a
						style={{ textDecoration: "none", color: "white" }}
						href='https://sketchfab.com/3d-models/animal-cell-downloadable-ddc40bb0900544959f02d3ff83c32615'
						target='_blank'
						rel='noreferrer'
					>
						3D ANIMAL CELL MODEL IS BASED ON 'ANIMAL CELL - DOWNLOADABLE'
					</a>

					<a
						style={{ textDecoration: "none", color: "white" }}
						href='https://sketchfab.com/LauriPurhonen'
						target='_blank'
						rel='noreferrer'
					>
						BY LAURI PURHONEN
					</a>

					<a
						style={{ textDecoration: "none", color: "white" }}
						href='http://creativecommons.org/licenses/by-nc-nd/4.0/'
						target='_blank'
						rel='noreferrer'
					>
						LICENSED UNDER CC-BY-4.0,
					</a>

					<a
						style={{ textDecoration: "none", color: "white" }}
						href='https://sketchfab.com/3d-models/plant-cell-cell-structure-1c5ce80d03d149208d30cc5aeb6e42fb'
						target='_blank'
						rel='noreferrer'
					>
						3D PLANT CELL MODEL IS BASED ON "PLANT CELL - CELL STRUCTURE"
					</a>

					<a
						style={{ textDecoration: "none", color: "white" }}
						href='https://sketchfab.com/objects1'
						target='_blank'
						rel='noreferrer'
					>
						BY VIDA SYSTEMS
					</a>
					<a
						style={{ textDecoration: "none", color: "white" }}
						href='http://creativecommons.org/licenses/by-nc-nd/4.0/'
						target='_blank'
						rel='noreferrer'
					>
						LICENSED UNDER CC-BY-NC-ND-4.0,
					</a>
					<a
						style={{ textDecoration: "none", color: "white" }}
						href='https://www.youtube.com/@fenixakademi8528'
						target='_blank'
						rel='noreferrer'
					>
						MITOZ VE MAYOZ BÖLÜNME VIDEOLARI: FENIX AKADEMI,
					</a>
				</Marquee>
			</div>
		</>
	);
}

export default CarouselDifferences;
