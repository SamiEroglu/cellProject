import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Animal({ marker }) {
  const [isZoom] = useState(false)

  const {lat, lon} = marker

  const latRot = (lat * Math.PI / 180)
  const lonRot = -(lon * Math.PI / 180)

  const { nodes, materials } = useGLTF('/animal.gltf')

  const {scale, rotation} = useSpring({
    scale: isZoom ? 4 : 0.4,
    // markerPosition: isZoom ? [0, 0, 4.5] : [0, 0, 2.5],
    rotation: [latRot, lonRot, 0],
    // config: { mass: 0, tension: 0, friction: 0 }
  })
  return (
    <>
    <a.group scale={scale} dispose={null} rotation={rotation}
      // onClick={() => setIsZoom(!isZoom)}
    >
      <group rotation={[-Math.PI / 4, 0.2, 1]}>
        {/* tabaka */}
        <mesh geometry={nodes.Sphere_0.geometry} material={materials.Material} position={[0.2, 0.2, -1]} scale={[1.7,1.8,2]} />
        {/* nükleüs kabuk */}
        <mesh geometry={nodes.Icosphere_0.geometry} material={materials['Material.001']} position={[-0.39, 0.61, 0.01]} scale={1.14} />
        {/* retikulum */}
        <mesh geometry={nodes.BezierCurve_0.geometry} material={materials['Material.005']} position={[-0.39, 0.61, 0.01]} scale={1.14} />
        {/* golgi */}
        <mesh geometry={nodes.BezierCurve002_0.geometry} material={materials['Material.006']} position={[1.15, -2, 1.5]} rotation={[0, 0, 0.76]} scale={0.41} />
        {/* lizozom ve diğeri */}
        <mesh geometry={nodes.Roundcube000_0.geometry} material={materials['Material.011']} position={[1.5, 1, 1]} rotation={[0.01, -0.04, 1.65]} scale={0.19} />
        {/* benekler */}
        <mesh geometry={nodes.Icosphere002_0.geometry} material={materials['Material.003']} position={[-0.39, 0.61, 0.01]} scale={1.14} /> 
        {/* üçlü mitokondri */}
        <mesh geometry={nodes.Sphere002_0.geometry} material={materials['Material.008']} position={[-0.7, -3.5, 2]} rotation={[0, -0.06, 3.06]} scale={0.05} />
        {/* mitokondri içerisi */}
        <mesh geometry={nodes.Sphere005_0.geometry} material={materials['Material.007']} position={[-0.7, -3.5, 2]} rotation={[0, -0.06, 3.06]} scale={0.05} />
        {/* nükleüs pembik yer */}
        <mesh geometry={nodes.Roundcube_0.geometry} material={materials['Material.010']} position={[-0.38, 0.62, 0]} scale={0.98} />
{/* nükleüs çekirdek */}
<mesh geometry={nodes.Roundcube001_0.geometry} material={materials['Material.009']} position={[-0.38, 0.55, 0.2]} scale={0.26} />

      </group>
    </a.group>
    {/* <a.mesh position={markerPosition} >
      <sphereGeometry args={[0.08]} />
      <meshStandardMaterial color="red" />
    </a.mesh> */}
    </>
  )
}

useGLTF.preload('/animal.gltf')
