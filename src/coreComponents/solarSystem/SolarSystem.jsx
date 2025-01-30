import React from 'react';
import './SolarSystem.css'; // Import the CSS for styling

const SolarSystem = () => {
  return (
    <div className="solar-system">
      {/* Sun in the center */}
      <div className="sun"></div>

      {/* Planet 1 (close to sun) */}
      <div className="planet orbit-1">
        <div className="planet-inner"></div>
      </div>

      {/* Planet 2 */}
      <div className="planet orbit-2">
        <div className="planet-inner"></div>
      </div>

      {/* Planet 3 */}
      <div className="planet orbit-3">
        <div className="planet-inner"></div>
      </div>

      {/* Planet 4 */}
      <div className="planet orbit-4">
        <div className="planet-inner"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
