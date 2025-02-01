import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sky, Text, Html } from '@react-three/drei';
import Fox from '../3dModels/Fox';
import { useState } from 'react';
import "./pageStyles/FoxPage.css"


const ButtonsGroup = ({ setCurrentAnimation, currentAnimation }) => {
    const buttons = [
        { label: "Idle", position: [-2.7, -3, 0], action: "idle" },
        { label: "Walk", position: [-1.2, -3, 0], action: "walk" },
        { label: "Run", position: [0.2, -3, 0], action: "hit" },
    ];

    const handleClickAnimation = (action) => {
        setCurrentAnimation(action)
    }

    return (
        <>
            {buttons.map((btn, index) => (
                <Html
                    key={index}
                    position={btn.position}
                >
                    <button
                        className={`button ${currentAnimation == btn.action ? "active" : null}`}
                        onClick={() => handleClickAnimation(btn.action)}
                    >
                        {btn.label}
                    </button>
                </Html>
            ))}
        </>
    );
};



const FoxPage = () => {
    const [currentAnimation, setCurrentAnimation] = useState('hit')

    return (
        <div className='foxContainer' style={{ height: "100vh" }}>

            <Canvas>
                <Text
                    position={[1, 3, 0]}
                    fontSize={0.4}
                    color="white"
                >
                    3D Fox
                </Text>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Fox />
                <Fox
                    position={[0.5, 0.35, 0]}
                    rotation={[-12.6, 1, 0.2]}
                    scale={[1, 0.5, 0.8]}
                    currentAnimation={currentAnimation}
                />
                <ButtonsGroup
                    setCurrentAnimation={setCurrentAnimation}
                    currentAnimation={currentAnimation}
                />

                {/* Environment */}
                <Sky sunPosition={[100, 20, 100]} />

                <Environment preset="sunset" />

                {/* Controls */}
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default FoxPage
