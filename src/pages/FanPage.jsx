import React from 'react'
import FanControls from '../coreComponents/fanComponents/fanControls/FanControls'
import FanHead from '../coreComponents/fanComponents/fanHead/FanHead'
import FanExtra from '../coreComponents/fanComponents/fanExtra/FanExtra'
import { useState } from 'react'
import "./pageStyles/FanPage.css"

const FanPage = () => {

    const [fanSpeed, setFanSpeed] = useState(2)

    return (
        <div>
            <section className='fan-section'>
                <h2 className='head'>Fan Simulator </h2>
                <FanHead
                    fanSpeed={fanSpeed}
                />
                <FanExtra />
                <FanControls
                    setFanSpeen={setFanSpeed}
                    fanSpeed={fanSpeed}
                />
            </section>
        </div>
    )
}

export default FanPage
