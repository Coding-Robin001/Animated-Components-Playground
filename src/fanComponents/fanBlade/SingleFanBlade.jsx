import React, { useState } from 'react'
import "./SingleFanBlade.css"

const SingleFanBlade = ({fanSpeed}) => {
 
    return (
        <>
            <div className={fanSpeed == 0 ? "blade-box"
                : fanSpeed == 1 ? "blade-box animate-slow"
                    : fanSpeed == 2 ? "blade-box animate-mid"
                        : fanSpeed == 3 ? "blade-box animate-fast" : null}
            >
                <div className="flex-top">
                    <div className="bladex"></div>
                    <div className="bladey"></div>
                </div>
                <div className="flex-mid">
                    <div className='dot'></div>
                </div>
                <div className="flex-bottom">
                    <div className="bladez"></div>

                </div>
            </div>
        </>
    )
}

export default SingleFanBlade
