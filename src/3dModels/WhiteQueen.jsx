import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function WhiteQueenModel(props) {
  const { scene, animations } = useGLTF('/whiteQueen.glb');

  useEffect(() => {
  }, [animations]);

  return <primitive object={scene} {...props} />;
}
