import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

export default function Plant(props) {
	const [isZoom] = useState(false);

	const [hovered, setHovered] = useState(false);
	const [current, setCurrent] = useState(null);

	const [titles] = useState({
		cytoplasm_TT_checker_512x512_UV_GRID_0: 'Sitoplazma',
		chloroplastin_TT_checker_512x512_UV_GRID_0: 'Kloroplast',
		chloroplastout_TT_checker_512x512_UV_GRID_0: 'Kloroplast',
		nucleus_TT_checker_512x512_UV_GRID_0: 'Çekirdek',
		ribosomes_TT_checker_512x512_UV_GRID_0: 'Ribozom',
		roughER_TT_checker_512x512_UV_GRID_0: 'Endoplazmik Retikulum',
		golgiappratus_TT_checker_512x512_UV_GRID_0: 'Golgi Cisimciği',
		lysosome_TT_checker_512x512_UV_GRID_0: 'Lizozom',
		peroxisome_TT_checker_512x512_UV_GRID_0: 'peroxisome',
		vacuole_TT_checker_512x512_UV_GRID_0: 'Koful',
		mitochondria_TT_checker_512x512_UV_GRID_0: 'Mitokondri',
		smoothER_TT_checker_512x512_UV_GRID_0: 'Endoplazmik Retikulum',
		cell_TT_checker_512x512_UV_GRID_0: 'Hücre Duvarı',
	});

	const [explanations] = useState({
		Sitoplazma:
			'Çekirdek ile hücre zarı arasındaki sıvıyı dolduran yumurta akı kıvamında, yarı saydam ve akışkan bir sıvıdır. Sıvı olduğu için büyük oranda sudan oluşur. Sitoplazma içerisinde bulunan beslenme, boşaltım, solunum, boşaltım gibi yaşamsal faaliyetleri gerçekleştiren yapılara organel denir. Sitoplazma içerisinde yer alan organeller mitokondri, kloroplast, koful, sentriyol, ribozom, golgi cisimciği, endoplazmik retikulum, lizozomdur.',
		Kloroplast:
			'Yalnızca bitki hücrelerinde bulunur. Yapısında bulunan krolofil ile bitkilere yeşil renk verir. Fotosentez yaparak besin ve oksijen üretir.',
		Çekirdek:
			'Hücrenin yönetim ve denetim merkezidir. Çekirdeğin içerisinde canlının kalıtsal özelliklerini (saç rengi, göz rengi, yaprak şekli gibi) belirleyen yapılar bulunur. Bakteri gibi bazı ilkel canlılarda çekirdek bulunmaz, bu canlıların kalıtsal özelliklerini belirleyen yapılar sitoplazmanın içerisinde dağınık olarak bulunur.',
		Ribozom:
			'Hücrede protein sentezinde görevlidir. Hücredeki en küçük organeldir. Bitki ve hayvan hücrelerinde ortak olarak bulunur.',
		'rough ER': 'rough ER',
		'Golgi Cisimciği':
			'Üst üste dizilmiş keseciklerden oluşur. Hücrede ter, süt gibi salgı maddelerinin üretiminden ve paketlenmesinden sorumludur. Bitki ve hayvan hücrelerinde ortak olarak bulunur.',
		Lizozom:
			'Görevi hücre içi sindirimdir. Besinlerin ve büyük moleküllerin parçalanmasından sorumludur. Ayrıca yaşlanan hücrelerin ve organellerin yok edilmesinde de görev alır. Lizozom hayvan hücrelerinde ve ilkel bitki hücrelerinde bulunur.',

		Koful:
			'Hücre için zararlı ve fazla olan maddeleri depolayan kese şeklindeki organeldir. Bitki ve hayvan hücrelerinde ortak olarak bulunur. Ancak bitki hücrelerinde kofullar büyük ve az iken hayvan hücrelerinde ise küçük ve çok sayıdadır.',
		Mitokondri:
			'Hücrenin enerji üretim merkezidir. Üretilen enerji hücrenin yaşamsal faaliyetlerin gerçekleştirilmesinde kullanılır. Bitki ve hayvan hücrelerinde ortak bulunur.',
		'Endoplazmik Retikulum':
			'Hücrede madde iletiminden sorumlu organeldir. Hücrenin içinde maddelerin taşındığı bit tünel sistemi gibidir. Bitki ve hayvan hücrelerinde ortak olarak bulunur.',
		'Hücre Duvarı':
			'Bitki hücrelerinde hücre zarının dışında yer alan ve hücre zarını destekleyen hücre duvarı (hücre çeperi) bulunur. Hücre duvarı cansızdır ve hayvan hücrelerinde bulunmaz.',
		peroxisome: 'peroxisome',
	});

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
		if (titles[current] === undefined) {
			setCurrent('hover over the cell to see the name');
		} else {
			document.getElementById('plant-title').innerHTML = titles[current];
			document.getElementById('plant-explanation').innerHTML =
				explanations[titles[current]];
		}
	}, [hovered, current, explanations, titles]);

	const { lat, lon } = props.marker;

	const latRot = (lat * Math.PI) / 180;
	const lonRot = -((lon * Math.PI) / 180);

	const { nodes, materials } = useGLTF('/plant.gltf');

	const { scale, rotation } = useSpring({
		scale: isZoom ? 4 : 0.02,
		rotation: [latRot, lonRot, 0],
	});
	return (
		<a.group scale={scale} dispose={null} rotation={rotation}>
			<group rotation={[0, 0, 0]}>
				<mesh
					geometry={nodes.cytoplasm_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[1, -18.04, 8.3]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.cytoplasm_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.chloroplastin_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[8.5, 32.58, -26.91]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.chloroplastin_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.chloroplastout_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[3.76, 28.84, -27.54]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.chloroplastout_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.nucleus_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[-24.12, -0.87, -23.89]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.nucleus_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.ribosomes_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[9.76, -9.49, 39.45]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.ribosomes_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.roughER_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[-20.65, -23.39, 9.16]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.roughER_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.golgiappratus_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[0.98, 0.05, -1.95]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.golgiappratus_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.lysosome_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[0.98, 0.05, 0.06]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.lysosome_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				{/* <mesh
					geometry={nodes.peroxisome_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[0.98, 0.05, 0.06]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.peroxisome_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/> */}
				<mesh
					geometry={nodes.vacuole_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[0.98, 0.05, 0.06]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.vacuole_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.cell_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[0, -18.04, 8.3]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.cell_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.mitochondria_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[-47.73, -8.06, 14.4]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.mitochondria_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
				<mesh
					geometry={nodes.smoothER_TT_checker_512x512_UV_GRID_0.geometry}
					material={materials.TT_checker_512x512_UV_GRID}
					position={[-27.71, -9.85, 31.13]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
					onPointerOver={() => {
						setHovered(true);
						setCurrent(nodes.smoothER_TT_checker_512x512_UV_GRID_0.name);
					}}
					onPointerOut={() => {
						setHovered(false);
						setCurrent('hover over the cell to see the name');
					}}
				/>
			</group>
		</a.group>
	);
}

useGLTF.preload('/plant.gltf');
