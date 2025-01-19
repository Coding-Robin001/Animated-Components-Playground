import React, { useState, useEffect } from 'react';
import './Pendulum.css';

const Pendulum = ({ swingSpeed, bobColor, id }) => {

  const [isSwinging, setIsSwinging] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwinging((prev) => !prev);
    }, 1000); // Toggle swing every 1 seconds (or adjust the timing)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pendulum-container">
      <div
        className={`pendulum ${swingSpeed == 1 ? "swing"
          : swingSpeed == 2 ? 'swing2' : swingSpeed == 3 ? 'swing3' : null}`}
      >
        <div className="rod"></div>
        <div className={`bob ${bobColor == "yellow" ? "yellow"
          : bobColor == "red" ? "red" : bobColor == "burlywood" ? "burlywood"
            : bobColor == "chocolate" ? "chocolate" : bobColor == "purple" ? "purple" : null
          }`}
        >
        </div>
      </div>

    </div>
  );
};

export default Pendulum;
