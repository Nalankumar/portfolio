import React from 'react'
import {data} from '../../data/data'
import Card from './Card'

export default function Carousel() {
    let projects = data.projects;
    return (
      <div className='carousel carousel-start w-[90vw]'>
          {projects.map(project =>(
              <div className='carousel-item bg-base-100 m-2 rounded-xl'>
                <Card name={project.name} imgurl={project.img} githuburl={project.github}/>
              </div>
          ))}
      </div>
  )
}