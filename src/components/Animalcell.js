import React from 'react';
import { Canvas } from '@react-three/fiber';
import Animal from './Animal';
import CameraOrbitController from './CameraOrbitController';
import '../styles/animalcell.css';

function Animalcell() {
	return (
		<>
			<div className="canvastotal">
				<div className="canvasanimal3d">
					<Canvas
						style={{
							height: '90vh',
							backgroundImage: `url('img/mercek.png')`,
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'inherit',
							backgroundPosition: '50% 85%',
							backgroundSize: '40vw',
						}}
					>
						<pointLight position={[5, 0, -5]} />
						<pointLight position={[-10, 0, 15]} />
						<pointLight position={[-10, 0, 10]} />

						<CameraOrbitController />
						<Animal />
					</Canvas>
				</div>
				<div className="yanyazi">
					<h1 className="animalcelltitle" id="title">
						Hayvan Hücresi
					</h1>
					<h1 className="explanationcss" id="explanation">
						<p>mitokondri</p>
						<p>ribozom</p>
						<p>endoplazmik retikulum</p>
						<p>golgi</p>
						<p>hücre zarı</p>
						<p>çekirdek</p>
						<p>sitoplazma</p>
						<p>lizozom</p>
						<p>koful</p>
					</h1>
				</div>
			</div>
		</>
	);
}

export default Animalcell;
