import React from "react";
import { CVlogo, Huclogo, TestIcon } from "../icon";
import "../styles/firstpage.css";
import Secondpage from "./Secondpage";

const handleClickScroll = () => {
	const element = document.getElementById("section-1");
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

function Firstpage() {
	return (
		<div className='fpsize'>
			<div className='fp-container'>
				<div className='fp-isim'>
					Matematik ve Fen Bilimleri Eğitimi Anabilim Dalı / Fen Eğitimi Bilim
					Dalı / Doktora Tez Çalışması
				</div>
				<div className='fp-icons'>
					<div className='hclogo' onClick={handleClickScroll}>
						<Huclogo />
					</div>
					<a className='cvlogo' href='CV.pdf' target='_blank'>
						<CVlogo />
					</a>
					<a className='cvlogo test' href='test.pdf' target='_blank'>
						<TestIcon />
					</a>
				</div>
				<div className='fp-fakulte'>İBRAHİM ENES TOSUN</div>
				<div className='fp-yazi'>
					Hücre Ünitesi için Geliştirilen WEB 2.0 Aracının Öğrencilerin Akademik
					Başarılarına, Görsel Alıgılarına ve Sistemsel Düşünme Becerilerine
					Etkisi
				</div>
			</div>
			<div id='section-1'>
				<Secondpage />
			</div>
		</div>
	);
}

export default Firstpage;
