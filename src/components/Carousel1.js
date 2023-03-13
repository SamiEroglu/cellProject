import React from 'react';
import Carousel from 'better-react-carousel';
import '../styles/carousel.css';
function Carousel1() {
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
					<p>
						Mitoz bölünme, çekirdek bölünmesi ve sitoplazma bölünmesi olmak
						üzere iki aşamada gerçekleşir.
					</p>
					<p>
						Mitoz bölünme birbirini takip eden evreler sonucunda gerçekleşir:
					</p>
					<p>
						1- Mitoz bölünme başlamadan önce DNA kendini eşler. Kalıtsal madde
						miktarı iki katına çıkar. Kromatin iplikler kısalıp kalınlaşarak
						kromozomları oluşturur.
					</p>
					<p>
						2- Çekirdek zarı ve çekirdekçik erimeye başlar. Hayvan hücrelerinde
						sentrozomlar kutuplara çekilmeye başlar. İğ iplikleri oluşur.
					</p>
					<p>3- Kromozomlar hücrenin ortasında tek sıra halinde dizilir.</p>
					<p>
						4- Kardeş kromatitler birbirinden ayrılarak hücrenin karşılıklı
						kutuplarına çekilir. Her kromozom iki kromatitten oluşur ve bunlara
						kardeş kromatitler denir.
					</p>
					<p>
						5- Çekirdek zarı ve çekirdekçik tekrardan oluşur. İğ iplikleri
						kaybolur. Bu evrede çekirdek bölünmesi tamamlanır ve sitoplazma
						bölünmesi başlar.
					</p>
					<p>
						6- Sitoplazma bölünmesi tamamlandığında kalıtsal özellikleri aynı
						olan iki yeni hücre meydana gelir.
					</p>
					<p>Mitoz bölünmede hücrelerin kromozom sayıları sabit kalır.</p>
					<p>
						Çekirdek bölünmesi bitki ve hayvan hücrelerinde benzer şekilde
						gerçekleşir.
					</p>
					<p>
						Sitoplazma bölünmesi bitki ve hayvan hücrelerinde farklılık
						gösterir.
					</p>
					<p>
						Sitoplazma bölünmesi hayvan hücrelerinde boğumlanma ile bitki
						hücrelerinde ise ara lamel adı verilen bir yapı ile gerçekleşir.
					</p>
					<p>
						Mitoz bölünme çok hücreli canlıların sadece vücut hücrelerinde
						görülür.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Carousel1;
