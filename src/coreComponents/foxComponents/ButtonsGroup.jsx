import React from 'react';
import { Html } from '@react-three/drei';

const ButtonsGroup = ({ setCurrentAnimation, currentAnimation, triggerJump }) => {
    const buttons = [
        { label: 'Idle', position: [-2.7, -3, 0], action: 'idle' },
        { label: 'Walk', position: [-1.2, -3, 0], action: 'walk' },
        { label: 'Run', position: [0.2, -3, 0], action: 'hit' },
    ];

    const handleClickAnimation = (action) => {
        setCurrentAnimation(action);
    };


    return (
        <>
            {buttons.map((btn, index) => (
                <Html key={index} position={btn.position}>
                    <button
                        className={`button ${currentAnimation === btn.action ? 'active' : null}`}
                        onClick={() => handleClickAnimation(btn.action)}
                    >
                        {btn.label}
                    </button>
                </Html>
            ))}

            {/* Adding the Jump button */}
            <Html position={[1.5, -3, 0]}>
                <button
                    // className={`button ${ isJumping ? "active" : null}`}
                    className={`button`}
                >
                    Jump
                </button>
            </Html>
        </>
    );
};

export default ButtonsGroup;
