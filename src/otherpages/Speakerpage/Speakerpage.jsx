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
            <div className="mt-12">
                <h1 className="text-[35px] font-bold">E-Summit’24</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 md:p-2'>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={akshay} className='' alt="" />
                <h1>Akshay Makar</h1>
                <h2>founder</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={vatsal} alt="" />
                <h1>Vatsal Kanakiya</h1>
                <h2>founder</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={ravi} alt="" />
                <h1>Ravi K Ranjan</h1>
                <h2>founder</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={jyoti} alt="" />
                <h1>Jyoti Agarwal</h1>
                <h2>Executive Exchange</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={pawan} alt="" />
                <h1>Pawan Kumar Rai</h1>
                <h2>founder</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={rahul} alt="" />
                <h1>Rahul Anand </h1>
                <h2>Masterclass</h2>
              </div>
            </div>
            <div className="mt-0">
                <h1 className="text-[35px] font-bold">Previous Speakers</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 md:p-2'>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={aman} alt="" />
                <h1>Aman Dhattarwal</h1>
                <h2>Educator</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={ayush} alt="" />
                <h1>Ayush Jaiswal</h1>
                <h2>Founder-Pesto</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={anshul} alt="" />
                <h1>Anshul Rustaggi</h1>
                <h2>NFT(New Financial Trajectory)</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={anmol} alt="" />
                <h1>Anmol Sharma</h1>
                <h2>Entrepreneur</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={aditya} alt="" />
                <h1 className='text-auto'>Aditya Arora</h1>
                <h2>founder</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={vineet} alt="" />
                <h1>Vineet Barnwal</h1>
                <h2>founder</h2>
              </div>
              <div className='glass-morphism flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={richa} alt="" />
                <h1>Richa Shrivastava</h1>
                <h2>Managing partner -
                Maker's Asylum</h2>
              </div>
            </div>
            
        </div>
        
        </div>
    </>
     )
 }

export default Speakerpage;