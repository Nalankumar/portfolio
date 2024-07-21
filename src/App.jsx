import React from 'react'
import Nav from './components/nav/Nav.jsx'
import Herosection from './components/herosection/Herosection.jsx'
import Projects from './components/projects/Projects.jsx'
function App() {
  return (
    <div className='w-full text-white bg-gradient-to-bl from-[#1639b8] to-[#070F2B] grid cols-1 font-poppins'>
      <Nav />  
      <Herosection />
      <Projects />
    </div>
  )
}

export default App
