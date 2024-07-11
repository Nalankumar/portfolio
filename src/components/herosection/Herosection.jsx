import React from 'react'
import photo from '../../assets/photo.jpg'
import {data} from '../../data/data.js'
import Social from './Social.jsx'

export default function Herosection() {
  return (
    <div id="home" className='h-dvh flex  items-center flex-col-reverse justify-evenly bg-gradient-to-bl from-[#1639b8] to-[#070F2B] md:flex-row md:px-16'>
      <div className="content text-center pb-[10vh] px-10 md:text-left md:max-w-[50vw] md:px-0">
        <div>
          <p className="text-[4vw] hidden md:block md:text-[4vh]">Hi,</p>
          <p className='text-[5vw] md:text-[5vh] flex justify-center md:flex-none md:justify-start'><span className='hidden md:block'>I'm</span><span className='font-bold'>{" "+data.name}</span></p>
          <p className='text-[4vw] md:text-[4vh]'>{data.role}</p>
          <p className='text-[3vw] py-[1vh] md:text-[2vh]'>{data.description}</p>
          <div className='flex justify-center items-center gap-3 flex-col md:justify-start md:items-start md:p-0 md:gap-2'>
            <button className='rounded-[10px] bg-slate-500 p-3 mt-[3vh] text-[2vh]'><a href={data.resume} target="_blank">Resume</a></button>
            <Social /> 
          </div>
          
        </div>       
      </div>
      <div>
        <img className='aspect-auto h-[30vh] md:h-[40vh] rounded-tr-[55%] rounded-tl-[60%] rounded-bl-[66%] rounded-br-[70%] mt-[10vh] md:mt-0 shadow-[0_3px_0_5px_#535C91]' src={photo} alt="" />
      </div>

    </div>
  )
}
