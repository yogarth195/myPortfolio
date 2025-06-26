import Drag from './components/BallPointer'
import { UpOrDown } from './components/downOrUp'
import { Navbar } from './components/Navbar'
import { useResponsiveTitle } from './hooks/useResponsiveTitle'
import AboutMePage from './pages/AboutMe'
import { AboutMeSkills } from './pages/AboutSkills'
import { HomePage } from './pages/Home'
import LetsConnect from './pages/LetsConnect'
import { ProjectPage } from './pages/Projects'
import { Temp } from './pages/Temp'

function App() {
  useResponsiveTitle();
  

  return (
    <>
    <div className=''>
      <UpOrDown/>
      <Navbar/>
      
      <HomePage/>
      <ProjectPage/>
      {/* <AboutMeSkills/> */}
      <AboutMePage/>
      <LetsConnect/>
    </div>
    </>
  )
}

export default App
