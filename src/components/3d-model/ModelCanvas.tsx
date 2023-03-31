
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Model from './Model';
import { Suspense } from 'react';
const ModelCanvas: React.FC = () => {

  return (<Canvas style={{ width: '100%', height: '350px' }}>
    <PerspectiveCamera makeDefault position={[3, -1, 5]} />
    <ambientLight intensity={0.5} />
    <Suspense fallback={null}>
      <Model />
    </Suspense>

    <OrbitControls />
    {/* <CanvasLoader /> */}
  </Canvas>)
}

export default ModelCanvas