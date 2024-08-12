import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

function About_us() {
  return (
    <div className='w-screen p-4'>
      <div className='h-56 w-full bg-transparent flex justify-center items-center absolute -bottom-36 about_us1'>
        <div className='h-56 w-2/3 bg-white shadow-2xl p-7 rounded-xl flex about-morphic about_us2 '>
          <div className='w-2/3 pr-14 about_us3'>
            <div> <h3 className=' text-xl font-bold mb-2 '><span className='bg-[#FED853] pb-1 pt-1 pl-1'>Ab</span>out Us</h3></div>
            <div>
            </div>
            <div className='p-1'> <p className=' text-xs mt-3 content1'>The Entrepreneurship Cell (E-Cell) at BIT MESRA
              is a student-driven initiative dedicated to promoting entrepreneurship among students. Through workshops, events, and mentorship programs, it cultivates a culture of innovation
              and supports budding entrepreneurs in turning their ideas into reality.</p>
            </div>
          </div>
          <div className='w-1/3 h-auto flex flex-col gap-4 about_us4'>
            <div className=' flex items-center gap-2 content1'>
              <div className=' rounded-md border-black border-2 h-9 w-14 flex justify-center items-center text-xl' ><FaGlobe />  </div>
              <h2 className='text-sm content2'>
                We nurture young minds and create brilliance.</h2>
            </div>
            <div className=' flex items-center gap-2 content1'>  <div className='text-4xl ' ><BsFileBarGraph />  </div>
              <h2 className='text-sm content2'>
                The EDC members show exponential growth and immense progress.</h2>
            </div>
            <div className=' flex items-center gap-2 content1'>  <div className=' rounded-md border-black border-2 h-9 w-14 flex justify-center items-center text-2xl' ><AiFillLike />  </div>
              <h2 className='text-sm content2 '>
                Increase the footfool in our exciting events and mark your presence.</h2>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About_us