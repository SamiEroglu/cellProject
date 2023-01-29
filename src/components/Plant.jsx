import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

export default function Plant(props) {
	const [isZoom] = useState(false);

	const [hovered, setHovered] = useState(false);
	const [current, setCurrent] = useState(null);

	const [titles] = useState({
		cytoplasm_TT_checker_512x512_UV_GRID_0: 'cytoplasm',
		chloroplastin_TT_checker_512x512_UV_GRID_0: 'chloroplast in',
		chloroplastout_TT_checker_512x512_UV_GRID_0: 'chloroplast out',
		nucleus_TT_checker_512x512_UV_GRID_0: 'nucleus',
		ribosomes_TT_checker_512x512_UV_GRID_0: 'ribosomes',
		roughER_TT_checker_512x512_UV_GRID_0: 'rough ER',
		golgiappratus_TT_checker_512x512_UV_GRID_0: 'golgi appratus',
		lysosome_TT_checker_512x512_UV_GRID_0: 'lysosome',
		peroxisome_TT_checker_512x512_UV_GRID_0: 'peroxisome',
		vacuole_TT_checker_512x512_UV_GRID_0: 'vacuole',
		mitochondria_TT_checker_512x512_UV_GRID_0: 'mitochondria',
		smoothER_TT_checker_512x512_UV_GRID_0: 'smooth ER',
		cell_TT_checker_512x512_UV_GRID_0: 'cell wall',
	});

	const [explanations] = useState({
		cytoplasm: 'cytoplasm',
		'chloroplast in': 'chloroplast in',
		'chloroplast out': 'chloroplast out',
		nucleus: 'nucleus',
		ribosomes: 'ribosomes',
		'rough ER': 'rough ER',
		'golgi appratus': 'golgi appratus',
		lysosome: 'lysosome',
		peroxisome: 'peroxisome',
		vacuole: 'vacuole',
		mitochondria: 'mitochondria',
		'smooth ER': 'smooth ER',
		'cell wall': 'cell wall',
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
					position={[0, -18.04, 8.3]}
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
				<mesh
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
				/>
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
