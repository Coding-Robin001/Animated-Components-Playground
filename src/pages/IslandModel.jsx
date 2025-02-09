import React from "react";
import { useGLTF } from "@react-three/drei";

export function IslandModel(props) {
  const { scene } = useGLTF("/island.glb");

  return (
    <group position={[0, -0.5, 0]} scale={[0.5, 0.5, 0.5]} {...props}>
      <primitive object={scene} />
    </group>
  );
}
