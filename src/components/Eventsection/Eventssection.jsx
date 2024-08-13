import React from "react";
import {Link} from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { IoCalendarOutline } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import img1 from '../Eventsection/E1.jpg';
import img2 from '../Eventsection/E2.jpg';
import img3 from '../Eventsection/E3.jpg';

function Eventsection() {
    return(
        <div className="glass-morphic lg:m-20 m-4 p-4 lg:p-12 shadow-2xl rounded-2xl ">
            <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Events</h1>
            </div>
            <div className="mt-12">
                <h1 className="text-[35px] font-bold">Our Flagship Events</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-16">
                <div className="flex md:flex-row flex-col justify-center items-center mb-4 md:gap-2 gap-4">
                <div className="flex flex-col justify-center items-center text-center md:p-8 rounded-2xl ">
                <div>
                    <img src={img1} alt="" srcset="" className="rounded-full" />
                <h1 className="font-bold md:text-[20px]">E-SUMMIT</h1>
                </div>
            <div className="flex flex-col justify-center items-center text-center mt-4">
            <div className="grid grid-cols-3">
                <div className="flex md:flex-row flex-col justify-center items-center">
                <IoCalendarOutline />
                    <h1 className="font-bold">Date</h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                <IoTimerOutline />
                    <h1 className="font-bold">Time</h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                <CiLocationOn />
                    <h1 className="font-bold">Venue</h1>
                </div>
            </div>
            <p>Premier entrepreneurial fest</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center md:p-8 rounded-2xl ">
                <div>
                    <img src={img2} alt="" srcset="" className="rounded-full" />
                <h1 className="font-bold md:text-[20px]">BIT NISHAN</h1>
                </div>
            <div className="flex flex-col justify-center items-center text-center mt-4">
            <div className="grid grid-cols-3">
                <div className="flex md:flex-row flex-col justify-center items-center">
                <IoCalendarOutline />
                    <h1 className="font-bold">Date</h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                <IoTimerOutline />
                    <h1 className="font-bold">Time</h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                <CiLocationOn />
                    <h1 className="font-bold">Venue</h1>
                </div>
            </div>
            <p>Cultivate inventive startups</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center md:p-8 rounded-2xl ">
                <div>
                    <img src={img3} alt="" srcset="" className="rounded-full" />
                <h1 className="font-bold md:text-[20px]">INNOVATE-A-THON</h1>
                </div>
            <div className="flex flex-col justify-center items-center text-center mt-4">
            <div className="grid grid-cols-3">
                <div className="flex md:flex-row flex-col justify-center items-center">
                <IoCalendarOutline />
                    <h1 className="font-bold">Date</h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                <IoTimerOutline />
                    <h1 className="font-bold">Time</h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center">
                <CiLocationOn />
                    <h1 className="font-bold">Venue</h1>
                </div>
            </div>
            <p>Encourage problem-solving</p>
            </div>
            </div>   
                </div>
                <Link spy={true} smooth={true} to="/Events">
                <button className="p-4 rounded-xl bg-[#FED853] font-bold">Know More</button>
                </Link>
            </div>
        </div>
    )
    
}

export default Eventsection
