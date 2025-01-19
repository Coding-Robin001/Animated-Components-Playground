import React, { useState } from 'react'
import "./PendulumBobColorChanger.css"

const PendulumBobColorChanger = ({ bobColor, setBobColor }) => {

    const [active, setActive] = useState(bobColor)

    const handleBobColorChange = (color) => {
        setBobColor(color)
        setActive(color)
        // alert(speed)
    }

    return (
        <div>
            <div className='control-box-bob'>
                <h2>Bob color</h2>
                <div className='btn-box'>

                    {
                        ["yellow", "red", "chocolate", "burlywood", "purple"].map((color, index) => {
                            return (
                                <span
                                    key={index}
                                    onClick={() => handleBobColorChange(color)}
                                    className={`${color == "red" ? "bgRed" :
                                        color == "yellow" ? "bgYellow" :
                                            color == "burlywood" ? "bgBwood" :
                                                color == "purple" ? "bgPurple" :
                                                    color == "chocolate" ? "bgChoc" : null
                                        } ${active == color ? "active" : null}`}
                                >
                                    {color}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PendulumBobColorChanger
