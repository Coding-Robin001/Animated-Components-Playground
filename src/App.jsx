import './App.css'
import FanPage from './pages/fanPage'
import SideBar from './component/sidebar/SideBar'
import PendulumPage from './pages/PendulumPage'
import AnimatedColorCodeGenerator from "./coreComponents/AnimatedColorGenerator/ColorCodeGenerator"
import { Routes, Route } from 'react-router-dom'
import RotatingCubePage from './pages/rotatingCubePage'
import ScenePage from './pages/3dScenePage'

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
              <Route path="/rotatingCube" element={<RotatingCubePage />} />
              <Route path="/scene" element={<ScenePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
