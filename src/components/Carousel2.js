import React, { useEffect } from 'react';
import Carousel from 'better-react-carousel';
import '../styles/carousel.css';
function Carousel2() {
	useEffect(() => {
		setNextButton();
		setPrevButton();

		handleCarouselChange(1);
	});

	let activeCarousel = 1;

	let isNextSet = false;
	let isPrevSet = false;

	const setNextButton = () => {
		if (isNextSet) return;

		const nextButton = document.getElementsByClassName(
			'ArrowButton__Button-sc-1ikb0hj-1 dZkckO'
		);

		nextButton[1].addEventListener('click', () => {
			if (activeCarousel === 6) activeCarousel = 1;
			else activeCarousel++;

			handleCarouselChange(activeCarousel);
		});

		isNextSet = true;
	};

	const setPrevButton = () => {
		if (isPrevSet) return;

		const nextButton = document.getElementsByClassName(
			'ArrowButton__Button-sc-1ikb0hj-1 bBfHpH'
		);

		nextButton[1].addEventListener('click', () => {
			if (activeCarousel === 1) activeCarousel = 6;
			else activeCarousel--;

			handleCarouselChange(activeCarousel);
		});

		isPrevSet = true;
	};

	const handleCarouselChange = (activeCarousel) => {
		const mayoz1 = document.getElementsByClassName('mayoz1');
		const mayoz2 = document.getElementsByClassName('mayoz2');
		const mayoz3 = document.getElementsByClassName('mayoz3');
		const mayoz4 = document.getElementsByClassName('mayoz4');
		const mayoz5 = document.getElementsByClassName('mayoz5');
		const mayoz6 = document.getElementsByClassName('mayoz6');

		const mayozTexts = [mayoz1, mayoz2, mayoz3, mayoz4, mayoz5, mayoz6];

		mayozTexts.forEach((mayozText, index) => {
			for (let i = 0; i < mayozText.length; i++) {
				mayozText[i].style.display = 'none';
			}

			if (index === activeCarousel - 1) {
				for (let i = 0; i < mayozText.length; i++) {
					mayozText[i].style.display = 'block';
				}
			}
		});
	};

	return (
		<div className="maincarousel-container">
			<div className="carousel-title">MAYOZ BÖLÜNME</div>
			<div className="carouseldiv">
				<div className="div1" />
				<div className="carouselcontainer">
					<Carousel
						cols={1}
						rows={1}
						gap={20}
						dotColorActive={'aquamarine'}
						dotColorInactive={'grey'}
						loop
						mobileBreakpoint
						showDots
						scrollSnap
						responsiveLayout={[
							{
								height: '40vw',
								breakpoint: 0,
								cols: 1,
								rows: 1,
								gap: 20,
								loop: true,
								autoplay: 3000,
							},
						]}
					>
						<Carousel.Item>
							<video
								muted
								width="72%"
								controls
								autoPlay
								type="video/mp4"
								style={{
									borderTopRightRadius: '48px',
									borderTopLeftRadius: '48px',
									borderBottomRightRadius: '20px',
									borderBottomLeftRadius: '20px',
								}}
							>
								<source src="videos/mayoz1.mp4" />
							</video>
						</Carousel.Item>
						<Carousel.Item>
							<video
								muted
								width="72%"
								controls
								autoPlay
								type="video/mp4"
								style={{
									borderTopRightRadius: '48px',
									borderTopLeftRadius: '48px',
									borderBottomRightRadius: '20px',
									borderBottomLeftRadius: '20px',
								}}
							>
								<source src="videos/mayoz2.mp4" />
							</video>
						</Carousel.Item>
						<Carousel.Item>
							<video
								muted
								width="72%"
								controls
								autoPlay
								type="video/mp4"
								style={{
									borderTopRightRadius: '48px',
									borderTopLeftRadius: '48px',
									borderBottomRightRadius: '20px',
									borderBottomLeftRadius: '20px',
								}}
							>
								<source src="videos/mayoz3.mp4" />
							</video>
						</Carousel.Item>
						<Carousel.Item>
							<video
								muted
								width="72%"
								controls
								autoPlay
								type="video/mp4"
								style={{
									borderTopRightRadius: '48px',
									borderTopLeftRadius: '48px',
									borderBottomRightRadius: '20px',
									borderBottomLeftRadius: '20px',
								}}
							>
								<source src="videos/mayoz4.mp4" />
							</video>
						</Carousel.Item>
						<Carousel.Item>
							<video
								muted
								width="72%"
								controls
								autoPlay
								type="video/mp4"
								style={{
									borderTopRightRadius: '48px',
									borderTopLeftRadius: '48px',
									borderBottomRightRadius: '20px',
									borderBottomLeftRadius: '20px',
								}}
							>
								<source src="videos/mayoz5.mp4" />
							</video>
						</Carousel.Item>
						<Carousel.Item>
							<video
								muted
								width="72%"
								controls
								autoPlay
								type="video/mp4"
								style={{
									borderTopRightRadius: '48px',
									borderTopLeftRadius: '48px',
									borderBottomRightRadius: '20px',
									borderBottomLeftRadius: '20px',
								}}
							>
								<source src="videos/mayoz6.mp4" />
							</video>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="div3">
					<p className="mayoz1">
						Mayoz bölünme mayoz 1 ve mayoz 2 evreleri olmak üzere iki evrede
						gerçekleşir.
					</p>
					<p className="mayoz1">
						Mayoz bölünme birbirini takip eden evreler sonucu gerçekleşir:
					</p>
					<p className="mayoz1">
						1- Mayoz bölünmeye başlamadan önce DNA kendini eşler ve kalıtsal
						madde miktarı iki katına çıkar. Kromozomlar belirgin hale gelir.
					</p>
					<p className="mayoz2">
						2- Mayoz bölünmenin ilk evresinde birisi anneden diğeri babadan
						gelen ve aynı özellikleri taşıyan kromozomlar (homolog kromozom) yan
						yana gelerek birbiri üzerine kıvrılır.
					</p>
					<p className="mayoz3">
						3- Kromozomlar arasında parça değişimi gerçekleşir.
					</p>
					<p className="mayoz4">
						4- Parça değişimi gerçekleştikten sonra bu kromozomlar farklı
						kutuplara çekilir.{' '}
					</p>
					<p className="mayoz5">
						5- Mayoz 1’in sonunda kromozom sayısı yarıya inmiş iki hücre oluşur.
					</p>
					<p className="mayoz6">
						6- Mayoz 2 mayoz bölünmeye benzer şekilde gerçekleşir.
					</p>
					<p className="mayoz6">
						7- Mayoz 2 sonunda genetik yapısı birbirinden farklı 4 adet hücre
						oluşur.
					</p>
					<p className="mayoz1">
						Mayoz 1 de gerçekleşen parça değişimi sayesinde oluşan hücrelerin
						genetik özellikler anne, babadan ve birbirinden farklıdır.
					</p>
					<p className="mayoz1">
						Eşey hücrelerinin birleşmesiyle gerçekleşen üreme şekline eşeyli
						üreme denir.
					</p>
					<p className="mayoz1">
						Eşeyli üreyen canlılarda eşey hücrelerinin oluşması için gerçekleşen
						bölünme mayoz bölünmedir.
					</p>
					<p className="mayoz1">
						Dişi eşey hücresine yumurta, erkek eşey hücresine ise sperm denir.
					</p>
					<p className="mayoz1">
						Yumurta ve spermin birleşmesine döllenme denir. Döllenme sonucu
						zigot oluşur. Zigot mayoz bölünmeler geçirir böylece büyür ve yeni
						bir canlı oluşur.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Carousel2;
