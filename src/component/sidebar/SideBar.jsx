import React, { useState } from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
import { PiGooglePlayLogoThin } from "react-icons/pi";

const SideBar = () => {

  const sidEbarLinks = [
    { id: 0, name: "Fan Simulator", link: "/fanSimulator" },
    { id: 1, name: "Pendulum Swing", link: "/swingingPendulum" },
    { id: 2, name: "Animated hex Color Generator", link: "/colorGenerator" },
    { id: 3, name: "Solar System Visualizer", link: "/solarSystem" },
    { id: 4, name: "3D Scene", link: "/scene" },
    { id: 5, name: "3D fox", link: "/3dFox" },
  ]



  const [active, setActive] = useState(0)

  const handleChangeActive = (currentActive) => {
    setActive(currentActive)
  }

  return (
    <div className='SideBarContainer'>
      <div className='sidebarNav'>
        {
          sidEbarLinks.map((singleLink) => (
            <Link
              key={singleLink.id}
              to={singleLink.link}
              onClick={() => handleChangeActive(singleLink.id)}
            >
              <h3
                className={active == singleLink.id ? "active" : null}
              >
                {singleLink.name}
              </h3>
            </Link>
          ))
        }
      </div>
    </div >
  )
}

export default SideBar

