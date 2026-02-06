import React from 'react'
import HeroPage from './pages/HeroPage'
import Technical from './pages/Technical'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Navigation from './components/Navigation'


const App = () => {
  return (
    <>
      <Navigation />
      <HeroPage />
      <Technical id="skills" />
      <Projects />
      
    
    
    </>
  )
}

export default App