import React, { Suspense } from "react";
import { OrbitControls, Preload, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GroupProps } from '@react-three/fiber';
import { useRef } from 'react';
import { Object3D } from "three";
import { useFrame, Canvas } from '@react-three/fiber';
import CanvasLoader from './CanvasLoader';

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Object3D>;
  materials: Record<string, THREE.Material>;
};

const GameModel = (props: GroupProps) => {
  const computer = useGLTF('./models/gamer/scene.gltf') as GLTFResult;
  const modelRef = useRef<Object3D>();

  const speed = 0.2;

  // Rotate the model around the Y-axis on every frame
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh>
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
        <primitive
          ref={modelRef}
          object={computer.scene}
          scale={0.75}
          position={[-0.1, -1, 0.3]}
          rotation={[0, 4.5, 0]}
        />
      </mesh>
    </group>
  );
};

const GameScene = () => {

  return (
    <Canvas
      shadows
      // gl={{ preserveDrawingBuffer: true }}
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