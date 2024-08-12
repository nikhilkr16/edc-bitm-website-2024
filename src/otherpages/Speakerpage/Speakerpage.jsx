import React from 'react'

import akshay from './akshay.png'
import vatsal from './vatsal.png'
import ravi from './ravi.png'
import jyoti from './jyoti.jpg'
import pawan from './pawan.png'
import rahul from './rahul.png'
import aman from './aman.png'
import vineet from './vineet.png'
import ayush from './ayush.png'
import anshul from './anshul.png'
import anmol from './anmol.png'
import aditya from './aditya.png'
import richa from './richa.png'
import sreedhar from './sreedhar.png'
import adityaRanjan from './adityaRanjan.png'
import rishavJain from './Rishabh Jain.png'
import prateek from './prateek.png'
import sanjeev from './sanjeev.png'


import '../Speakerpage/speakerpage.css'


function Speakerpage() {
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <div className="speakerbg h-screen text-white bg-cover ">
          <div className="h-screen md:text-[50px] backdrop-brightness-50 flex flex-col justify-center items-center text-center">
            <h1 className="lg:px-48 uppercase font-bold">noteworthy Entrepreneurs who graced our events</h1>
          </div>
        </div>
        <div className="lg:m-20 pl-12 pr-12 lg:pl-12 lg:pr-12 w-full">
          <div className="flex flex-row justify-start items-center">
            <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
            <h1 className="text-[25px] ml-[-35px] font-bold">Notable Past Speakers</h1>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 mt-12 md:p-2 gap-8'>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={akshay} className='' alt="" />
              <h1 className=' text-xl md:text-2xl'>Akshay Makar</h1>
              <h2 className='text-sm md:text-lg'>Founder</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={vatsal} alt="" />
              <h1 className=' text-lg md:text-2xl'>Vatsal Kanakiya</h1>
              <h2 className='text-sm md:text-lg' >Founder</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={ravi} alt="" />
              <h1 className=' text-lg md:text-2xl'>Ravi K Ranjan</h1>
              <h2 className='text-sm md:text-lg'>founder</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={jyoti} alt="" />
              <h1 className=' text-lg md:text-2xl'>Jyoti Agarwal</h1>
              <h2 className='text-sm md:text-lg'>Executive Exchange</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={pawan} alt="" />
              <h1 className=' text-lg md:text-2xl'>Pawan Kumar Rai</h1>
              <h2 className='text-sm md:text-lg'>Founder</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={rahul} alt="" />
              <h1 className=' text-lg md:text-2xl'>Rahul Anand </h1>
              <h2 className='text-sm md:text-lg'>Masterclass</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={aman} alt="" />
              <h1 className=' text-lg md:text-2xl'>Aman Dhattarwal</h1>
              <h2 className='text-sm md:text-lg'>Educator</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={ayush} alt="" />
              <h1 className=' text-lg md:text-2xl'>Ayush Jaiswal</h1>
              <h2 className='text-sm md:text-lg'>Founder-Pesto</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={anshul} alt="" />
              <h1 className=' text-lg md:text-2xl'>Anshul Rustaggi</h1>
              <h2 className='text-sm md:text-lg'>NFT(New Financial Trajectory)</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={anmol} alt="" />
              <h1 className=' text-lg md:text-2xl'>Anmol Sharma</h1>
              <h2 className='text-sm md:text-lg'>Entrepreneur</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={aditya} alt="" />
              <h1 className=' text-lg md:text-2xl'>Aditya Arora</h1>
              <h2 className='text-sm md:text-lg'>Startups in the age of recession</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={vineet} alt="" />
              <h1 className=' text-lg md:text-2xl'>Vineet Barnwal</h1>
              <h2 className='text-sm md:text-lg'>Leading Campus trainer and coach</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={richa} alt="" />
              <h1 className=' text-lg md:text-2xl'>Richa Shrivastava</h1>
              <h2 className='text-sm md:text-lg'>Managing partner-
                Maker's Asylum</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={sreedhar} alt="" />
              <h1 className=' text-lg md:text-2xl'>Sridhar Jeychandran</h1>
              <h2 className='text-sm md:text-lg'>Co-founder - Crio.do</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={adityaRanjan} alt="" />
              <h1 className=' text-lg md:text-2xl'>Aditya Ranjan</h1>
              <h2 className='text-sm md:text-lg'>Journey of an IAS</h2>
            </div>
            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={rishavJain} alt="" />
              <h1 className=' text-lg md:text-2xl'>Rishav Jain</h1>
              <h2 className='text-sm md:text-lg'>Fireside Chat</h2>
            </div>

            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={prateek} alt="" />
              <h1 className=' text-lg md:text-2xl'>Pratik Gauri</h1>
              <h2 className='text-sm md:text-lg'>Innovating Education with Web 3.0</h2>
            </div>

            <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
              <img src={sanjeev} alt="" />
              <h1 className=' text-lg md:text-2xl'>Sanjeev Mohanty</h1>
              <h2 className='text-sm md:text-lg'>MD - Levi Strauss and & Co.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Speakerpage;