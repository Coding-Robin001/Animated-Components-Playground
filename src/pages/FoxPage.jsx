import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber';

import "./pageStyles/FoxPage.css"
import MovingFox from '../coreComponents/foxComponents/MovingFox';
import TextLabels from '../coreComponents/foxComponents/TextLabels';
import ButtonsGroup from '../coreComponents/foxComponents/ButtonsGroup';
import EnvironmentSettings from '../coreComponents/foxComponents/EnvironmentSettings';

const FoxPage = () => {

    const [currentAnimation, setCurrentAnimation] = useState("hit")

    return (
        <div className='foxContainer' style={{ height: "100vh" }}>
            <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
                <TextLabels />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <MovingFox
                    setCurrentAnimation={setCurrentAnimation}
                    currentAnimation={currentAnimation}
                />
                <directionalLight position={[5, 5, 5]} castShadow />
                <ButtonsGroup
                    setCurrentAnimation={setCurrentAnimation}
                    currentAnimation={currentAnimation}
                />
                <EnvironmentSettings />
            </Canvas>
        </div>
    )
}

export default FoxPage
