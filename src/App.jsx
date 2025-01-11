import { useState } from 'react'
import './App.css'
import FanHead from './fanComponents/fanHead/FanHead'
import FanExtra from "./fanComponents/fanExtra/FanExtra"
import FanControls from "./fanComponents/fanControls/FanControls"

function App() {

  const [fanSpeed, setFanSpeed] = useState(2)

  return (
    <>
      <div className="app-wrapper">
        <section className='fan-section'>
          <FanHead fanSpeed={fanSpeed} />
          <FanExtra />
          <FanControls
            setFanSpeen={setFanSpeed}
            fanSpeed={fanSpeed}
          />
        </section>
      </div>
    </>

  )
}

export default App
