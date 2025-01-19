import React from 'react'
import "./FanControls.css"

const FanControls = ({ setFanSpeen, fanSpeed }) => {

  const handleFanSpeedChange = (speed) => {
    setFanSpeen(speed)
  }

  return (
    <div className='fan-control-box'>
      <h2>Controls</h2>
      <div className='fan-control-box-btn'>
        {[1, 2, 3, 0].map((speed) => (
          <button
            key={speed}
            onClick={() => handleFanSpeedChange(speed)}
            className={fanSpeed == speed ? "active" : ""}
          >
            {speed == 0 ? "Stop" : speed}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FanControls;

