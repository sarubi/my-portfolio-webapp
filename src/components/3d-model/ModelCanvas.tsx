
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';
import Model from './Model';
import { Suspense } from 'react';
import CanvasLoader from './CanvasLoader';
const ModelCanvas: React.FC = () => {

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '350px' }}>
      <PerspectiveCamera makeDefault position={[3, -1, 5]} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <Model />
      </Suspense>
      <OrbitControls />
      <Preload all />
    </Canvas>)
}

export default ModelCanvas