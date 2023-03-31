import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GroupProps } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Object3D>;
  materials: Record<string, THREE.Material>;
};

const Model = (props: GroupProps) => {
  const computer = useGLTF('./models/low_poly_dog/scene.gltf') as GLTFResult;

  // Modify the following lines to match your model's structure
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
          object={computer.scene}
          scale={0.9}
          position={[-0.1, -1, 0.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </group>
  );
};

export default Model;