import React, {useState} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Environment, Sky, Text, Stars, Cone } from '@react-three/drei';
import { useRef } from 'react';
import Fox from '../3dModels/Fox';


const FloatingCone = () => {
  const ref = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('idle')


  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5 + 1;
  });

  return (
    <Cone args={[0.5, 1, 32]} position={[4, 7, 0]} ref={ref}>
      <meshStandardMaterial color="green" />
    </Cone>
  );
};

const RotatingBox = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.05;
  });

  return (
    <Box args={[1, 1, 1]} position={[-4, 0, 0]} ref={ref}>
      <meshStandardMaterial color="orange" />
    </Box>
  );
}

import { Torus } from '@react-three/drei';

const RotatingTorus = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <Torus args={[0.7, 0.3, 16, 100]} position={[0, 0, 0]} ref={ref}>
      <meshStandardMaterial color="purple" />
    </Torus>
  );
};


const My3DScene = () => {

  return (
    <Canvas>
      <Text position={[1, 3, 0]} fontSize={0.3} color="white">
        3D Scene
      </Text>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <RotatingBox />
      <FloatingCone />
      <RotatingTorus />

      {/* Environment */}
      <Sky sunPosition={[200, 20, 100]} />
      <Stars radius={50} depth={50} count={6000} factor={4} saturation={0} fade />
      {/* <Environment preset="sunset" /> */}

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default My3DScene;
