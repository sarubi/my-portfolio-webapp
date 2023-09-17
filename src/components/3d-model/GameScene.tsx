import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, Canvas } from '@react-three/fiber';
import CanvasLoader from './CanvasLoader';
import * as THREE from 'three'

type GLTFResult = GLTF & {
  nodes: {
    PM3D_Cube3D1_1_PM3D_Cube3D1_1_0: THREE.Mesh
    PM3D_Cube3D2_PM3D_Cube3D2_0: THREE.Mesh
    RING_LIGHT_RESIZED21_RING_LIGHT_RESIZED21_0: THREE.Mesh
    SILVER_PLAY_BUTTON_SILVER_PLAY_BUTTON_0: THREE.Mesh
    PM3D_Cube3D8_copy17_PM3D_Cube3D8_copy17_0: THREE.Mesh
    PM3D_Cylinder3D2_6_PM3D_Cylinder3D2_6_0: THREE.Mesh
    PM3D_Cube3D4_42_PM3D_Cube3D4_42_0: THREE.Mesh
    SOCKET_SOCKET_0: THREE.Mesh
    webcam2_webcam2_0: THREE.Mesh
    PM3D_Cube3D2_4_PM3D_Cube3D2_4_0: THREE.Mesh
    PM3D_Cube3D2_8_PM3D_Cube3D2_8_0: THREE.Mesh
    CHARACTER_DONE362_CHARACTER_DONE362_0: THREE.Mesh
    PM3D_Sphere3D11_PM3D_Sphere3D11_0: THREE.Mesh
    PM3D_Cylinder3D1_1_PM3D_Cylinder3D1_1_0: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_1: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_2: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_3: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_4: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_5: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_6: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_7: THREE.Mesh
    PM3D_Cube3D_13_PM3D_Cube3D_13_0_8: THREE.Mesh
  }
  materials: {
    PM3D_Cube3D1_1: THREE.MeshStandardMaterial
    PM3D_Cube3D2: THREE.MeshStandardMaterial
    RING_LIGHT_RESIZED21: THREE.MeshStandardMaterial
    SILVER_PLAY_BUTTON: THREE.MeshStandardMaterial
    PM3D_Cube3D8_copy17: THREE.MeshStandardMaterial
    PM3D_Cylinder3D2_6: THREE.MeshStandardMaterial
    PM3D_Cube3D4_42: THREE.MeshStandardMaterial
    SOCKET: THREE.MeshStandardMaterial
    webcam2: THREE.MeshStandardMaterial
    PM3D_Cube3D2_4: THREE.MeshStandardMaterial
    PM3D_Cube3D2_8: THREE.MeshStandardMaterial
    CHARACTER_DONE362: THREE.MeshStandardMaterial
    PM3D_Sphere3D11: THREE.MeshStandardMaterial
    PM3D_Cylinder3D1_1: THREE.MeshStandardMaterial
    PM3D_Cube3D_13: THREE.MeshStandardMaterial
  }
}

const GameModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('https://theetaz.s3.amazonaws.com/scene.gltf') as any

  const modelRef = useRef<any>();

  const speed = 0.2;

  // Rotate the model around the Y-axis on every frame
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group {...props}
      ref={modelRef}
      position={[0, -0.5, 0.2]}
      rotation={[0, -1.3, 0]}
      dispose={null} scale={0.72}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <mesh geometry={nodes.PM3D_Cube3D1_1_PM3D_Cube3D1_1_0.geometry} material={materials.PM3D_Cube3D1_1} />
      <mesh geometry={nodes.PM3D_Cube3D2_PM3D_Cube3D2_0.geometry} material={materials.PM3D_Cube3D2} />
      <mesh geometry={nodes.RING_LIGHT_RESIZED21_RING_LIGHT_RESIZED21_0.geometry} material={materials.RING_LIGHT_RESIZED21} />
      <mesh geometry={nodes.SILVER_PLAY_BUTTON_SILVER_PLAY_BUTTON_0.geometry} material={materials.SILVER_PLAY_BUTTON} />
      <mesh geometry={nodes.PM3D_Cube3D8_copy17_PM3D_Cube3D8_copy17_0.geometry} material={materials.PM3D_Cube3D8_copy17} />
      <mesh geometry={nodes.PM3D_Cylinder3D2_6_PM3D_Cylinder3D2_6_0.geometry} material={materials.PM3D_Cylinder3D2_6} />
      <mesh geometry={nodes.PM3D_Cube3D4_42_PM3D_Cube3D4_42_0.geometry} material={materials.PM3D_Cube3D4_42} />
      <mesh geometry={nodes.SOCKET_SOCKET_0.geometry} material={materials.SOCKET} />
      <mesh geometry={nodes.webcam2_webcam2_0.geometry} material={materials.webcam2} />
      <mesh geometry={nodes.PM3D_Cube3D2_4_PM3D_Cube3D2_4_0.geometry} material={materials.PM3D_Cube3D2_4} />
      <mesh geometry={nodes.PM3D_Cube3D2_8_PM3D_Cube3D2_8_0.geometry} material={materials.PM3D_Cube3D2_8} />
      <mesh geometry={nodes.CHARACTER_DONE362_CHARACTER_DONE362_0.geometry} material={materials.CHARACTER_DONE362} />
      <mesh geometry={nodes.PM3D_Sphere3D11_PM3D_Sphere3D11_0.geometry} material={materials.PM3D_Sphere3D11} />
      <mesh geometry={nodes.PM3D_Cylinder3D1_1_PM3D_Cylinder3D1_1_0.geometry} material={materials.PM3D_Cylinder3D1_1} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_1.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_2.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_3.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_4.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_5.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_6.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_7.geometry} material={materials.PM3D_Cube3D_13} />
      <mesh geometry={nodes.PM3D_Cube3D_13_PM3D_Cube3D_13_0_8.geometry} material={materials.PM3D_Cube3D_13} />
    </group>
  )
};

useGLTF.preload('https://theetaz.s3.amazonaws.com/scene.gltf')

const GameScene = () => {

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '320px' }}>
      <PerspectiveCamera makeDefault position={[3, -1, 5]} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <GameModel />
      </Suspense>
      <OrbitControls />
      <Preload all />
    </Canvas>
  );
};

export default GameScene;