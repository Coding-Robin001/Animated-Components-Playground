import React, { useState } from 'react'
import Pendulum from "../coreComponents/pendulumComponents/pendulum/Pendulum"
import PendulumControl from '../coreComponents/pendulumComponents/pendulum/PendulumControl'
import PendulumBobColorChanger from '../coreComponents/pendulumComponents/pendulum/PendulumBobColorChanger'
import "./pageStyles/PendulumPage.css"

const PendulumPage = () => {

  const [swingSpeed, setSwingSpeed] = useState(2);
  const [bobColor, setBobColor] = useState("yellow")
  const [singlePendulum, setSinglePendulum] = useState(true)

  return (
    <section className='pendulumSection'>
      <h2 className='head'>Pendulum Swing</h2>
      <Pendulum
        swingSpeed={swingSpeed}
        bobColor={bobColor}
        singlePendulum={singlePendulum}
      />
      <div className="box-flex">
        <PendulumControl
          setSwingSpeed={setSwingSpeed}
          swingSpeed={swingSpeed}
        />
        <PendulumBobColorChanger
          setBobColor={setBobColor}
          bobColor={bobColor}
        />
      </div>
    </section>
  )
}

export default PendulumPage;
