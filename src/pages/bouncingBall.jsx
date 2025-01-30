import { useState } from "react";
import { motion } from "framer-motion";
import "./BouncingBall.css"; // Import the CSS file

export default function AlternatingBall() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="container">
      <motion.div
        className="ball"
        animate={
          isAnimating
            ? {
                x: [0, 100, 200, 300, 200, 100, 0], // Back and forth horizontally
                y: [0, -100, 0, 100, 0, -100, 0],   // "V" and inverted "V"
              }
            : {}
        }
        transition={{
          duration: 3, // Time to complete one cycle
          repeat: Infinity, // Loop forever
          ease: "easeInOut", // Smooth oscillation
        }}
      />
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? "Stop" : "Start"} Alternating
      </button>
    </div>
  );
}


