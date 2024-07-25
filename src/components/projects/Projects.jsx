import React from 'react'
import Carousel from './Carousel'

export default function Projects() {

    return (
    <div id="projects" className="w-full h-fit flex flex-col items-center justify-around lg:h-[100dvh]" >
        <h1 className='text-[4vh] mt-[80px] lg:mt-[50px]'>Projects</h1>
        <Carousel />
    </div>
  )
}
