import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function CammyModel(props) {
  const { scene, animations } = useGLTF("/the_king_of_fighters_-_cammy_classic.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (names.length > 0) {
      console.log("Available animations:", names);
      // actions[names[24]]?.play(); // Play the first animation by default
    } else {
      console.log("No animations found in the model.");
    }
  }, [actions, names]);

  return <primitive object={scene} {...props} />;
}
