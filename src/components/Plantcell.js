import React from 'react';

import { Canvas } from '@react-three/fiber';
import Plant from './Plant';
import CameraOrbitController from './CameraOrbitController';
import '../styles/animalcell.css';

function Plantcell() {
	return (
		<>
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
				<ambientLight />
				<pointLight position={[0, 10, 10]} />

				<CameraOrbitController />
				<Plant marker={{ lat: 45, lon: 15 }} />
			</Canvas>
			<h1 id="plant-title" style={{ color: '#fff' }}>
				plant title
			</h1>
			<h1 id="plant-explanation" style={{ color: '#fff' }}>
				plant explanation
			</h1>
		</>
	);
}

export default Plantcell;
