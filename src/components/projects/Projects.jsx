import React from 'react'
import Carousel from './Carousel'

export default function Projects() {

    return (
    <div id="projects" className="bg-base-200 flex flex-col items-center justify-evenly h-[100vh]" >
        <h1 className='text-[2rem] font-bold'>Projects</h1>
        <Carousel />
    </div>
  )
}
