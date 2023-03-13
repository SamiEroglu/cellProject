import React, { useEffect } from 'react';
import Carousel from 'better-react-carousel';
import '../styles/carousel.css';
function Carousel1() {
	useEffect(() => {
		setNextButton();
		setPrevButton();

		handleCarouselChange(1);
	});

	let isNextSet = false;
	let isPrevSet = false;
	let activeCarousel = 1;

	const setNextButton = () => {
		if (isNextSet) return;

		const nextButton = document.getElementsByClassName(
			'ArrowButton__Button-sc-1ikb0hj-1 dZkckO'
		);

		nextButton[0].addEventListener('click', () => {
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

		nextButton[0].addEventListener('click', () => {
			if (activeCarousel === 1) activeCarousel = 6;
			else activeCarousel--;

			handleCarouselChange(activeCarousel);
		});

		isPrevSet = true;
	};

	const handleCarouselChange = (activeCarousel) => {
		const mitoz1 = document.getElementsByClassName('mitoz1');
		const mitoz2 = document.getElementsByClassName('mitoz2');
		const mitoz3 = document.getElementsByClassName('mitoz3');
		const mitoz4 = document.getElementsByClassName('mitoz4');
		const mitoz5 = document.getElementsByClassName('mitoz5');
		const mitoz6 = document.getElementsByClassName('mitoz6');

		const mitozTexts = [mitoz1, mitoz2, mitoz3, mitoz4, mitoz5, mitoz6];

		mitozTexts.forEach((mitozText, index) => {
			for (let i = 0; i < mitozText.length; i++) {
				mitozText[i].style.display = 'none';
			}

			if (index === activeCarousel - 1) {
				for (let i = 0; i < mitozText.length; i++) {
					mitozText[i].style.display = 'block';
				}
			}
		});
	};

	return (
		<div className="maincarousel-container">
			<div className="carousel-title">MİTOZ BÖLÜNME</div>
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
								<source src="videos/mitoz1.mp4" />
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
								<source src="videos/mitoz2.mp4" />
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
								<source src="videos/mitoz3.mp4" />
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
								<source src="videos/mitoz4.mp4" />
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
								<source src="videos/mitoz5.mp4" />
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
								<source src="videos/mitoz6.mp4" />
							</video>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="div3">
					<p className="mitoz1">
						Mitoz bölünme, çekirdek bölünmesi ve sitoplazma bölünmesi olmak
						üzere iki aşamada gerçekleşir.
					</p>
					<p className="mitoz1">
						Mitoz bölünme birbirini takip eden evreler sonucunda gerçekleşir:
					</p>
					<p className="mitoz1">
						1- Mitoz bölünme başlamadan önce DNA kendini eşler. Kalıtsal madde
						miktarı iki katına çıkar. Kromatin iplikler kısalıp kalınlaşarak
						kromozomları oluşturur.
					</p>
					<p className="mitoz2">
						2- Çekirdek zarı ve çekirdekçik erimeye başlar. Hayvan hücrelerinde
						sentrozomlar kutuplara çekilmeye başlar. İğ iplikleri oluşur.
					</p>
					<p className="mitoz3">
						3- Kromozomlar hücrenin ortasında tek sıra halinde dizilir.
					</p>
					<p className="mitoz4">
						4- Kardeş kromatitler birbirinden ayrılarak hücrenin karşılıklı
						kutuplarına çekilir. Her kromozom iki kromatitten oluşur ve bunlara
						kardeş kromatitler denir.
					</p>
					<p className="mitoz5">
						5- Çekirdek zarı ve çekirdekçik tekrardan oluşur. İğ iplikleri
						kaybolur. Bu evrede çekirdek bölünmesi tamamlanır ve sitoplazma
						bölünmesi başlar.
					</p>
					<p className="mitoz6">
						6- Sitoplazma bölünmesi tamamlandığında kalıtsal özellikleri aynı
						olan iki yeni hücre meydana gelir.
					</p>
					<p className="mitoz1">
						Mitoz bölünmede hücrelerin kromozom sayıları sabit kalır.
					</p>
					<p className="mitoz1">
						Çekirdek bölünmesi bitki ve hayvan hücrelerinde benzer şekilde
						gerçekleşir.
					</p>
					<p className="mitoz1">
						Sitoplazma bölünmesi bitki ve hayvan hücrelerinde farklılık
						gösterir.
					</p>
					<p className="mitoz1">
						Sitoplazma bölünmesi hayvan hücrelerinde boğumlanma ile bitki
						hücrelerinde ise ara lamel adı verilen bir yapı ile gerçekleşir.
					</p>
					<p className="mitoz1">
						Mitoz bölünme çok hücreli canlıların sadece vücut hücrelerinde
						görülür.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Carousel1;
