import { useRef, useState } from "react";
import Fox from "../../3dModels/Fox";
import { useFrame } from "@react-three/fiber";

const MovingFox = ({ currentAnimation }) => {
    const foxGroup = useRef();
    const speed = currentAnimation === "walk" ? 0.02 : currentAnimation === "hit" ? 0.07 : 0;

    // Direction State
    const [direction, setDirection] = useState(1);

    useFrame(() => {
        if (foxGroup.current) {
            foxGroup.current.position.x += speed * direction;

            // Reverse direction at boundaries
            if (foxGroup.current.position.x > 6 || foxGroup.current.position.x < -3) {
                setDirection((prev) => -prev);
                foxGroup.current.rotation.y = direction === 1 ? -Math.PI / 2 : Math.PI / 2;
            }
        }
    });


    return (
        <group ref={foxGroup} position={[0, 0.35, 0]}>
            <Fox
                scale={[0.35, 0.35, 0.35]}
                position={[0.5, 0.35, 0]}

                // figure out a 360 rotation North south east west. round
                // rotation={[-12.6, 1, 0.2]}

                currentAnimation={currentAnimation}
            />
        </group>
    );
};


export default MovingFox;