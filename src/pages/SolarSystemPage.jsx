import React from 'react'
import SolarSystem from '../coreComponents/solarSystem/SolarSystem'
import "./pageStyles/SolarSystemPage.css"

const SolarSystemPage = () => {
  return (
    <div className='solarContainer'>
        <h2 className='title'>Solar System Visualizer</h2>
        <SolarSystem />
    </div>
  )
}

export default SolarSystemPage
