import './App.css'
import FanPage from './pages/fanPage'
import SideBar from './component/sidebar/SideBar'
import PendulumPage from './pages/PendulumPage'
import AnimatedColorCodeGenerator from "./coreComponents/AnimatedColorGenerator/ColorCodeGenerator"


function App() {

  return (
    <>
      <div className="app-wrapper">
        <SideBar />
        <div className="componentContainer">
          <FanPage />
          <PendulumPage/>
          <AnimatedColorCodeGenerator/>
        </div>
      </div>
    </>

  )
}

export default App
