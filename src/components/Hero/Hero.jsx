import React, { useState } from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { GiFootprint } from "react-icons/gi";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import img1 from '../Hero/Idea.png'
import img2 from '../Hero/Event.png'
import img3 from '../Hero/People.png'
import img4 from '../Hero/Feet.png'

function Hero() {
   const[counterOn,setCounterOn] = useState(false)

  return (
   <div className='w-screen p-4'>
      
    <div className='min-h-min w-full p-10 mt-40 hero-1'>
       <div className='flex shadow-2xl h-auto glass-morphic w-full rounded-2xl about_us2'>
       <div className='w-3/5 p-10 hero-2'>
       <div className='p-1'> <h3 className='text-xl font-semibold mb-4'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>ED</span>C BIT ,MESRA</h3>
             <h2 className='text-2xl font-bold mb-4 '>Our Stats</h2>
             <p className='text-start text-sm content1 mb-4'>With a team of dedicated experts and passionate empowering entrepreneurs, we bring a wealth of experience and knowledge to every proposal. Our expertise helps to enhance one's fostered growth and supports each entrepreneurial journey.</p>
       </div>
       <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
       <div className=' w-full h-1/2 flex mt-2 flex-col gap-8'>
         
         <div className=' flex items-center pt-5 justify-center gap-24 hero-3'>  
             <div className=' w-24 flex flex-col items-center text-xl font-semibold'>
            <div className=''>  <span className=' text-3xl decoration-yellow-300'> <img src={img1} alt="" /> </span></div>
         <h1 >{counterOn && <CountUp start={0} end={30} duration={2} delay={0.25}/> }+</h1>
         <h5 className=''>startups</h5>
         </div>
         <div className=' w-24  flex flex-col items-center text-xl font-semibold '>
            <div className='text-3xl'> <img src={img2} alt="" /> </div>
         <h1 >{counterOn && <CountUp start={0} end={60} duration={2} delay={0.25}/> }+</h1>
         <h5 className=''> events</h5>
         </div>
      </div>
      
      <div className='flex gap-24 hero-3 justify-center text-xl font-semibold'>  
          <div className=' w-24  flex flex-col items-center'>
            <div className='text-3xl'> <img src={img3} alt="" /> </div>
         <h1 > {counterOn && <CountUp start={0} end={80} duration={2} delay={0.25}/> }+</h1>
         <h5 className=''>Members</h5>
         </div>
         <div className=' w-24  flex flex-col items-center text-xl font-semibold'>
            <div className=''> <img src={img4} alt="" /></div>
         <h1 > {counterOn && <CountUp start={0} end={7000} duration={2} delay={0.25}/> }+</h1>
         <h5 className=''>footfalls</h5>
         </div>
</div>

       </div>
       </ScrollTrigger>
       </div>
        <div className='w-2/5 p-8 flex flex-col gap-6 hero-2 justify-center items-center'>
        <img  className='w-64 h-40 rounded-xl' src="https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className=' w-64 h-40' src="https://plus.unsplash.com/premium_photo-1667516621165-d2b848cc7587?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        </div>
       </div>
    </div>
    </div>
  )
}

export default Hero