import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, Sphere, Environment, Sky } from '@react-three/drei';

const My3DScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Add a box */}
      <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>

      {/* Add a sphere */}
      <Sphere args={[0.5, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Sphere>

      {/* Environment */}
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="sunset" />

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default My3DScene;
