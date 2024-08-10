import React from "react";
import img1 from '../Eventspage/img1.png'

function Card() {
    return(
        <div className="flex flex-col justify-center items-center text-center shadow-2xl shadow-black p-4 pt-8 gap-6 rounded-2xl card1">
            <h1 className="font-bold text-2xl text-white">Formal events</h1>
            <p className="text-xl text-white">Elevating Experiences with Distinguished Events</p>
            <button className="bg-white p-2 pr-4 pl-4  rounded-3xl">Explore More</button>
            <img src={img1} alt="" srcset="" />
        </div>
    )
}

export default Card;