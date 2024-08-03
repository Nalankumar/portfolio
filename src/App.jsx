import React from 'react'
import Nav from './components/nav/Nav.jsx'
import Herosection from './components/herosection/Herosection.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className='w-full text-white grid cols-1 font-poppins'>
      <Nav />  
      <Herosection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
