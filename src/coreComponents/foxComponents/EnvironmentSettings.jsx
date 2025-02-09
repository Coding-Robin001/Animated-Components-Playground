import React from 'react';
import { Sky, Environment, OrbitControls } from '@react-three/drei';

const EnvironmentSettings = () => {
    return (
        <>
            <Sky sunPosition={[100, 20, 100]} />
            <Environment preset="sunset" />
            <OrbitControls />
        </>
    );
};

export default EnvironmentSettings;
