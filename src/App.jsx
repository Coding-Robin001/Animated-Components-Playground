import './App.css'
import FanPage from './pages/fanPage'
import SideBar from './component/sidebar/SideBar'
import PendulumPage from './pages/PendulumPage'
import AnimatedColorCodeGenerator from "./coreComponents/AnimatedColorGenerator/ColorCodeGenerator"
import { Routes, Route } from 'react-router-dom'
import ScenePage from './pages/3dScenePage'
// import BouncingBall from './pages/bouncingBall'
// import MorphingShape from './pages/MorphinShaoes'
// import FloatingBubbles from './pages/FloatingBubbles'
import SolarSystemPage from './pages/SolarSystemPage'
import FighterPage from './pages/3dFighterPage'
import FoxPage from './pages/FoxPage'

function App() {

  return (
    <>
      <div className="app-wrapper">
        <SideBar />
        <div className="componentContainer">
          <div className='app-container'>
            <Routes>
              <Route path="/" element={<FanPage />} />
              <Route path="/fanSimulator" element={<FanPage />} />
              <Route path="/swingingPendulum" element={<PendulumPage />} />
              <Route path="/colorGenerator" element={<AnimatedColorCodeGenerator />} />
              <Route path="/solarSystem" element={<SolarSystemPage />} />
              <Route path="/scene" element={<ScenePage />} />
              <Route path="/3dFox" element={<FoxPage/>} />
              <Route path="/3dFighter" element={<FighterPage/>} />
            </Routes>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
