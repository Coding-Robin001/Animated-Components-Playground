import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./MorphingShape.css"; // Import the CSS file for styles

export default function MorphingShapesWithAutoSmooth() {
  // Define the sequence of shapes (circle, square, triangle, hexagon)
  const [shapeIndex, setShapeIndex] = useState(0);
  const shapes = ["circle", "square", "triangle", "hexagon"];
  const [speed, setSpeed] = useState(2000); // Default speed: 2000ms (2 seconds)

  // Use effect to cycle shapes with a smoother transition
  useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex((prevIndex) => (prevIndex + 1) % shapes.length); // Loop through shapes
    }, speed); // Change shape every 'speed' ms

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [speed]); // Update the interval when speed changes

  return (
    <div className="container">
      {/* Motion div for shape morphing */}
      <motion.div
        className={`shape ${shapes[shapeIndex]}`} // Apply the current shape class
        animate={{
          borderRadius: shapes[shapeIndex] === "circle" ? "50%" : "0%", // Circle shape
          clipPath:
            shapes[shapeIndex] === "triangle"
              ? "polygon(50% 0%, 0% 100%, 100% 100%)" // Triangle shape
              : shapes[shapeIndex] === "hexagon"
              ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" // Hexagon shape
              : "none", // Remove clipPath for non-triangle/hexagon shapes
        }}
        transition={{
          duration: 1, // Duration of the morphing animation
          ease: "easeInOut", // Smooth easing for the morphing effect
        }}
      />
      <p>Current Shape: {shapes[shapeIndex]}</p>

      {/* Speed control slider */}
      <div>
        <label>Speed: {speed / 1000}s</label>
        <input
          type="range"
          min="500"
          max="5000"
          step="500"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
