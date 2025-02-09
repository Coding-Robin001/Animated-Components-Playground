import React from 'react';
import { Text } from '@react-three/drei';

const TextLabels = () => {
    return (
        <>
            <Text position={[1, 3, 0]} fontSize={0.4} color="white">
                3D Fox
            </Text>
            <Text position={[-5, 0, 0]} fontSize={0.4} color="white">
                point A
            </Text>
            <Text position={[7, 0, 0]} fontSize={0.4} color="white">
                point B
            </Text>
        </>
    );
};

export default TextLabels;
