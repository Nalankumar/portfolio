import React from 'react'
import Logo from './Logo'
export default function Nav() {
  return (
    <div id="home" className="navbar bg-base-100">
      <div className="flex-1">
        <Logo />
      </div>
      <div  className="btn btn-ghost">
        <div className="indicator">
          <a href="#home">Home</a>
        </div>
      </div>
      <div  className="btn btn-ghost">
        <div className="indicator">
          <a href="#aboutme">About me</a>
        </div>
      </div>
      <div  className="btn btn-ghost">
        <div className="indicator">
          <a href="#projects">Projects</a>
        </div>
      </div>
      <div  className="btn btn-ghost">
        <div className="indicator">
          <a href="#contact">Contact</a>
        </div>
      </div> 
    </div>
    // <nav className="fixed w-full h-[10vh] bg-[#1B1A55] flex justify-between items-center">
    //   <div className='items-center m-[10px]'>
    //     <Logo />
    //   </div>
    //   <div>
    //   <ul className='flex items-center space-x-6 mx-[20px]'>
    //     <li className='hover:bg-[black] text-[2.5vw] md:text-xl px-[1vw] md:px-[2vw] cursor-pointer'><a href="#home">Home</a></li>
    //     <li className='hover:bg-[black] text-[2.5vw] md:text-xl px-[1vw] md:px-[2vw] cursor-pointer'>About me</li>
    //     <li className='hover:bg-[black] text-[2.5vw] md:text-xl px-[1vw] md:px-[2vw] cursor-pointer'><a href="#projects">Projects</a></li>
    //     <li className='hover:bg-[black] text-[2.5vw] md:text-xl px-[1vw] md:px-[2vw] cursor-pointer'>Contact</li>
    //   </ul>
    //   </div>      
    // </nav>
  )
}
