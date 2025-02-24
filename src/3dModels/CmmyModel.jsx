import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three"

export function CammyModel({ currentAnimation, setAnimationNames,animationSpeed,isPlaying, ...props }) {
  const { scene, animations } = useGLTF("/the_king_of_fighters_-_cammy_classic.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (names.length > 0) {
      console.log("Available animations:", names);
      setAnimationNames(names); // Update parent state with animation names
    } else {
      console.log("No animations found in the model.");
    }
  }, [names, setAnimationNames]);

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      // Stop all animations
      Object.values(actions).forEach(action => action.stop());
      // Play the selected animation
      // actions[currentAnimation].play();
      // console.log("Playing animation:", currentAnimation);

      const action = actions[currentAnimation];
      action.timeScale = animationSpeed; // Slow down animation
      action.play();
      console.log(`Playing animation: ${currentAnimation} at speed ${animationSpeed}`);
    }
  }, [currentAnimation, actions, animationSpeed]);

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      actions[currentAnimation].paused = !isPlaying;
    }
  }, [isPlaying, currentAnimation, actions]);


  return <primitive object={scene} {...props} />;
}
