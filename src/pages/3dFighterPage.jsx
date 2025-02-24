import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import EnvironmentSettings from '../coreComponents/foxComponents/EnvironmentSettings';
import { CammyModel } from '../3dModels/CmmyModel';
import { useState } from 'react';
import "./pageStyles/FighterPage.css"
import { MdReplay } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { FaFastForward, FaBackward, FaPlay, FaPause } from "react-icons/fa";
import { BreakableCrate } from '../coreComponents/FighterComponents/BreakableCrates';
import { Physics } from '@react-three/rapier';

const FighterPage = () => {
  const [animationNames, setAnimationNames] = useState([]); // Store animation names
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [animationSpeed, setAnimationSpeed] = useState(0.3);
  const [isPlaying, setIsPlaying] = useState(true)


  useEffect(() => {
    console.log("Animations loaded:", animationNames);
    if (animationNames.length > 0 && !currentAnimation) {
      setCurrentAnimation(animationNames[0]); // Set first animation by default
    }
  }, [animationNames]);

  const handleNextAnimation = () => {
    if (animationNames.length > 0) {
      const currentIndex = animationNames.indexOf(currentAnimation);
      const nextIndex = (currentIndex + 1) % animationNames.length;
      setCurrentAnimation(animationNames[nextIndex]);
    }
  };

  const handlePrevAnimation = () => {
    if (animationNames.length > 0) {
      const currentIndex = animationNames.indexOf(currentAnimation);
      const prevIndex = (currentIndex - 1 + animationNames.length) % animationNames.length;
      setCurrentAnimation(animationNames[prevIndex]);
    }
  };

  return (
    <div className='fighterContainer'>
      {/* Three.js Scene */}
      <div className='mainScene'>
        <Canvas camera={{ position: [0, 1, 5] }}>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <Physics gravity={[0, -9.81, 0]}>
            <CammyModel
              scale={[1.8, 1.8, 1.8]}
              position={[0, -2.6, 0]}
              currentAnimation={currentAnimation}
              setAnimationNames={setAnimationNames}
              animationSpeed={animationSpeed}
              isPlaying={isPlaying}
            />
            <BreakableCrate />
          </Physics>
          <EnvironmentSettings />
        </Canvas>
      </div>
      <div className="directions">
        <MdOutlineSkipPrevious className='prev' onClick={handlePrevAnimation} />
        <MdOutlineSkipNext className='next' onClick={handleNextAnimation} />
      </div>
      <div className="sceneInfo">
        <h2>{currentAnimation}</h2>
        <h3
          onClick={() => setIsPlaying(prev => !prev)}
        >
          {isPlaying ? "Pause" : "Play"}
          {isPlaying ? <FaPause /> : <FaPlay />}
        </h3>
        <h3>speed: {animationSpeed.toFixed(2)}s</h3>
      </div>
      <div className="prevNextBtnBox">
        <span
          onClick={() => setAnimationSpeed(prev => Math.max(0.1, prev - 0.1))}
        >
          <FaBackward size={40} color='#fff' />
        </span>
        <span
          onClick={() => setAnimationSpeed(prev => Math.min(2, prev + 0.1))}
          className='forward'
        >
          <FaFastForward size={40} color='#fff' />
        </span>
      </div>

    </div>
  );
}


export default FighterPage
