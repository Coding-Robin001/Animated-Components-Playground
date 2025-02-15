import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Demonn(props) {
  const { scene, animations } = useGLTF('/demonn.glb');

  useEffect(() => {
  }, [animations]);

  return <primitive object={scene} {...props} />;
}
