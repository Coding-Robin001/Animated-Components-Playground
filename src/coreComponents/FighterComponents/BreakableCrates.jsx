import { RigidBody } from "@react-three/rapier";
import { useState } from "react";

export function BreakableCrate({ position = [0, -1, 0] }) {
  const [broken, setBroken] = useState(false);

  const breakCrate = () => {
    setBroken(true);
  };

  return (
    <>
      {!broken ? (
        <RigidBody onCollisionEnter={breakCrate} type="fixed"> 
          {/* 🔥 Fixed Crate - Won't Move */}
          <mesh scale={[3, 2, 2]} position={position}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="brown" />
          </mesh>
        </RigidBody>
      ) : (
        <group>
          {[...Array(6)].map((_, i) => (
            <RigidBody
              key={i}
              type="dynamic" // ✅ Pieces move after breaking
              position={[
                position[0] + (Math.random() - 0.5) * 0.5,
                position[1] + (Math.random() - 0.5) * 0.5,
                position[2] + (Math.random() - 0.5) * 0.5,
              ]}
            >
              <mesh scale={[1.5, 1, 1.5]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="brown" />
              </mesh>
            </RigidBody>
          ))}
        </group>
      )}
    </>
  );
}
