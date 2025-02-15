import React from 'react'
import { Canvas } from '@react-three/fiber'
import EnvironmentSettings from '../coreComponents/foxComponents/EnvironmentSettings';
import { CammyModel } from '../3dModels/CmmyModel';


const FighterPage = () => {
    return (
            <div className='foxContainer' style={{ height: "100vh" }}>
                <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />s

                    <CammyModel scale={[1.1, 1.1, 1.1]} />
                    <directionalLight position={[5, 5, 5]} castShadow />
                    <EnvironmentSettings />
                </Canvas>
            </div>
    )
}

export default FighterPage
