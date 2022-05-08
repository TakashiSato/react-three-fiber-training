import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Stage } from '@react-three/drei'
import Box from './Box';

const DrawCanvas: FC = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        {/* <PerspectiveCamera makeDefault /> */}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
        <Stage>
          <Box/>
        </Stage>
      </Canvas>
    </Suspense>
  );
}

export default DrawCanvas;
