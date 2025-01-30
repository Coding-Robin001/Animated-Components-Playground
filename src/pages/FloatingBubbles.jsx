import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './FloatingBubbles.css'; // Import the CSS for styling

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  // Create random bubbles with different properties
  useEffect(() => {
    const bubbleArray = [];
    for (let i = 0; i < 10; i++) {
      bubbleArray.push({
        id: i,
        delay: Math.random() * 2, // Random delay for staggering animation start
        y: Math.random() * 50 + 50, // Random starting y-position
        color: getRandomColor(), // Random color for each bubble
      });
    }
    setBubbles(bubbleArray);
  }, []);

  // Function to generate random colors for bubbles
  const getRandomColor = () => {
    const colors = ['#FF6347', '#87CEEB', '#32CD32', '#FFD700', '#FF1493'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{
            backgroundColor: bubble.color,
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDelay: `${bubble.delay}s`, // Apply random delay for each bubble
          }}
          animate={{
            y: [bubble.y, bubble.y + 200, bubble.y], // Bubble moves up and down
            opacity: [1, 0], // Fading effect
            scale: [1, 1.2, 1], // Slight bounce effect
            transition: {
              repeat: Infinity, // Repeat the animation infinitely
              repeatDelay: 0.5, // Small delay before repeating the animation
              duration: 4, // Duration of one full bounce
              ease: 'easeInOut', // Smooth easing
            },
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
