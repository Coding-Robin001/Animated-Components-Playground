import React, { useState } from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'

const SideBar = () => {

  const sidEbarLinks = [
    { id: 0, name: "Fan Simulator", link: "/fanSimulator" },
    { id: 1, name: "Pendulum Swing", link: "/swingingPendulum" },
    { id: 2, name: "Animated hex Color Generator", link: "/colorGenerator" },
  ]

  const [active, setActive] = useState(0)

  const handleChangeActive = (currentActive) => {
    setActive(currentActive)
  }

  return (
    <div className='SideBarContainer'>
      <Link to="/"><p>playlogo</p></Link>
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

