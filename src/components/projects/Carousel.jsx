import React from 'react'
import {data} from '../../data/data'
import Card from './Card'
import netflix from '../../assets/projects/netflix.png'
import number_guessing_game from '../../assets/projects/ngg.jpg'
import hrms from '../../assets/projects/hrms.png'

export default function Carousel() {
    return (
      <div className='carousel w-full max-w-[100vw] md:gap-8 justify-center *:mx-[5px] *:rounded-xl'>
          <div className='carousel-item bg-base-100'>
              <Card name={data.projects[0].name} imgurl={netflix} githuburl={data.projects[0].github}/>
          </div>
          <div  className='carousel-item bg-base-100'>
              <Card name={data.projects[1].name} imgurl={hrms} githuburl={data.projects[1].github}/>
          </div>
          <div  className='carousel-item bg-base-100'>
              <Card name={data.projects[2].name} imgurl={number_guessing_game} githuburl={data.projects[2].github}/>
          </div>
          <div  className='carousel-item bg-base-100'>
              <Card name={data.projects[3].name} imgurl={netflix} githuburl={data.projects[3].github}/>
          </div>
        </div>
  )
}