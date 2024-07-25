import React from 'react'
import {data} from '../../data/data'
import Card from './Card'
import netflix from '../../assets/projects/netflix.png'
import number_guessing_game from '../../assets/projects/ngg.jpg'
export default function Carousel() {
    return (
      <div className='carousel gap-3 md:gap-8'>
          <div className='carousel-item'>
              <Card name={data.projects[0].name} imgurl={netflix} githuburl={data.projects[0].github}/>
          </div>
          <div  className='carousel-item'>
              <Card name={data.projects[1].name} imgurl={netflix} githuburl={data.projects[1].github}/>
          </div>
          <div  className='carousel-item'>
              <Card name={data.projects[2].name} imgurl={number_guessing_game} githuburl={data.projects[2].github}/>
          </div>
          <div  className='carousel-item'>
              <Card name={data.projects[3].name} imgurl={netflix} githuburl={data.projects[3].github}/>
          </div>
        </div>
  )
}
