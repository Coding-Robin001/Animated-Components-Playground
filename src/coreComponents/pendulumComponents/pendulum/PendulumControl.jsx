import React from 'react'
import "./PendulumControl.css"

const PendulumControl = ({ setSwingSpeed, swingSpeed }) => {

    const handleSwingSpeedChange = (speed) => {
        setSwingSpeed(speed)
    }

    return (
        <div>
            <div className='control-box'>
                <h2>Pendulum speed</h2>
                <div className='btn-box'>

                    {
                        [1, 2, 3, 0].map((speed) => {
                            return (
                                <button
                                    key={speed}
                                    onClick={() => handleSwingSpeedChange(speed)}
                                    className={swingSpeed == speed ? "active" : ""}
                                >
                                    {speed == 0 ? "Stop" : speed}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PendulumControl
