import React from 'react'
import Logo from './Logo'
export default function Nav() {
  return (
    <div id="home" className="navbar bg-base-100 w-full fixed z-20">
      <div className="flex-1">
        <Logo />
      </div>
      {/*Navbar for smaller screens*/}
      <div className="flex justify-end drawer drawer-end w-[80vw] z-10 md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-circle drawer-button">
            <svg
            className="fill-current drawer-button"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
           </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <div  className="btn btn-md btn-ghost">
              <div className="indicator">
                <a href="#home" className="text-[1rem]">Home</a>
              </div>
            </div>
            <div  className="btn btn-ghost">
              <div className="indicator">
                <a href="#projects" className="text-[1rem]">Projects</a>
              </div>
            </div>
            <div  className="btn btn-ghost">
              <div className="indicator">
                <a href="#contact" className="text-[1rem]">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar for large screens*/}
      <div className="hidden md:block menu menu-horizontal">
        <div className="btn btn-ghost mx-[3vw]">
              <div className="indicator">
                <a href="#home" className="md:text-xl">Home</a>
              </div>
            </div>
            <div  className="btn btn-ghost mx-[3vw]">
              <div className="indicator">
                <a href="#aboutme" className="md:text-xl">About me</a>
              </div>
            </div>
            <div  className="btn btn-ghost mx-[3vw]">
              <div className="indicator">
                <a href="#projects" className="md:text-xl">Projects</a>
              </div>
            </div>
            <div  className="btn btn-ghost mx-[3vw]">
              <div className="indicator">
                <a href="#contact" className="md:text-xl">Contact</a>
              </div>
            </div>
      </div>
    </div>
  )
}

