import React from 'react'
import { Canvas } from '@react-three/fiber'
import EnvironmentSettings from '../coreComponents/foxComponents/EnvironmentSettings';
import { CammyModel } from '../3dModels/CmmyModel';
import { useState } from 'react';
import "./pageStyles/FighterPage.css"
import { MdReplay } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";

const FighterPage = () => {
  const [animationNames, setAnimationNames] = useState([]); // Store animation names
  const [currentAnimation, setCurrentAnimation] = useState("");

  return (
    <div className='fighterContainer'>
      {/* Three.js Scene */}
      <div className='mainScene'>
        <Canvas camera={{ position: [0, 1, 5] }}>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <CammyModel
            scale={[1.8, 1.8, 1.8]}
            position={[0, -2.6, 0]}
            currentAnimation={currentAnimation}
            setAnimationNames={setAnimationNames}
          />
          <EnvironmentSettings />
        </Canvas>
      </div>
      <div className="directions">
        <MdOutlineSkipNext className='next'/>
        <MdOutlineSkipPrevious className='prev'/>
      </div>
      <div className="sceneInfo">
        <h2>Awakening</h2>
        <h3>play/Replay <MdReplay /></h3>
      </div>

    </div>
  );
}


export default FighterPage
