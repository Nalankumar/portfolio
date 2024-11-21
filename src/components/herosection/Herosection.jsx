import React from 'react'
import photo from '../../assets/photo.jpg'
import {data} from '../../data/data.js'
import Social from './Social.jsx'

export default function Herosection() {
  return (
    <div id="home" className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col-reverse md:justify-evenly md:flex-row">
      <div className="content flex flex-col text-center pb-[10vh] px-10 md:text-left md:max-w-[50vw] md:px-0">
         <div className="md:w-[40vw]">
           <p className="text-70 hidden md:block md:text-[1.5rem] ">Hi,</p>
           <p className='text-[1rem] md:text-[2rem] flex justify-center md:flex-none md:justify-start'><span className='hidden md:block'>I'm</span><span className='font-bold md:text-[2rem]'>&nbsp; {data.name}</span></p>
           <p className='text-[1rem] md:text-[1.5rem]'>{data.role}</p>
           <p className='text-[3vw] py-[1vh] md:text-[2vh]'>{data.description}</p>
           <div className='flex justify-center items-center gap-3 flex-col md:justify-start md:items-start md:p-0 md:gap-2'>
             <button className='rounded-[10px] bg-slate-500 p-3 mt-[3vh] text-[2vh]'><a href={data.resume} target="_blank">Resume</a></button>
             <Social /> 
           </div>
          </div>       
      </div>
       <div>
         <img className='aspect-auto h-[30vh] md:h-[40vh] md:mx-[20px] rounded-tr-[55%] rounded-tl-[60%] rounded-bl-[66%] rounded-br-[70%] mt-[10vh] md:mt-0 shadow-[0_3px_0_5px_#535C91]' src={photo} alt="" />
       </div>       
      </div>
    </div>
  )
}
