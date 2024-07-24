import React from 'react'
import Project from "./Project"
import {data} from '../../data/data'
import Card from './Card'
export default function Carousel() {
    return (
    <div className='flex justify-center items-center w-[80vw]'>
      <div className='grid gap-3 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2'>
            {data.projects.map((d)=>(
              <div>
                  <Card name={d.name} imgurl={d.img} githuburl={d.github}/>
              </div>
              ))}
        </div>
    </div>
  )
}
