import React from 'react'
import "./FanControls.css"

const FanControls = ({ setFanSpeen, fanSpeed }) => {

  const handleFanSpeedChange = (speed) => {
    setFanSpeen(speed)
  }

  return (
    <div className='control-box'>
      {[1, 2, 3, 0].map((speed) => (
        <button
          key={speed}
          onClick={() => handleFanSpeedChange(speed)}
          className={fanSpeed == speed ? "active" : ""}
        >
          {speed}
        </button>
      ))}
    </div>
  );
};

export default FanControls;

