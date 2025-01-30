import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';

const RotatingCube = () => {
  const [rotationDirection, setRotationDirection] = useState(0);

  const handleRotateLeft = () => setRotationDirection(rotationDirection - Math.PI / 4);
  const handleRotateRight = () => setRotationDirection(rotationDirection + Math.PI / 4);

  return (
    <div className="">
      <div className="">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box
            rotation={[0, rotationDirection, 0]}
            position={[0, 0, 0]}
            args={[1, 1, 1]} // Dimensions of the cube
          >
            <meshStandardMaterial attach="material" color="skyblue" />
          </Box>
        </Canvas>
      </div>

      <div className="">
        <button style={{backgroundColor:"red", width:"300px"}} onClick={handleRotateLeft}>Rotate left</button>
        <button onClick={handleRotateRight}>Rotate right</button>
      </div>
    </div>
  );
};

export default RotatingCube;
