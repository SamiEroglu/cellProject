import React from 'react';

import { Canvas } from '@react-three/fiber';
import Animal from './Animal';
import CameraOrbitController from './CameraOrbitController';
import '../styles/animalcell.css';

function Animalcell() {
	return (
		<>
			<div className="title"></div>
			<Canvas
				style={{
					height: '90vh',
					width: '100%',
					backgroundImage: `url('img/mercek.png')`,
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'inherit',
					backgroundPosition: '50% 85%',
					backgroundSize: '40vw',
				}}
			>
				<pointLight position={[0, 10, 10]} />
				<pointLight position={[-10, 10, 10]} />
				<pointLight position={[-10, 0, 10]} />

				<CameraOrbitController />
				<Animal />
			</Canvas>
			<div className="canvas-placeholder"></div>
			<h1 id="title" style={{ color: '#fff' }}></h1>
			<h1 id="explanation" style={{ color: '#fff' }}></h1>
		</>
	);
}

export default Animalcell;
