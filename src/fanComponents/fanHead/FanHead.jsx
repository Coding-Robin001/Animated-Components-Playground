import React from 'react'
import "./FanHead.css"
import SingleFanBlade from '../fanBlade/SingleFanBlade'

const FanHead = ({fanSpeed}) => {
  return (
    <div className='fanhead-container'>
      <SingleFanBlade fanSpeed={fanSpeed}/>
    </div>
  )
}

export default FanHead
