import React from "react";
import img1 from '../Eventspage/img1.png'

function Card() {
    return(
        <div className="flex flex-col justify-center items-center text-center shadow-black shadow-2xl p-4 pt-8 gap-6 rounded-2xl card3">
            <h1 className="font-bold text-2xl text-slate-600">Formal events</h1>
            <p className="text-xl text-slate-600">Elevating Experiences with Distinguished Events</p>
            <button className="bg-white p-2 pr-4 pl-4  rounded-3xl">Explore More</button>
            <img src={img1} alt="" srcset="" />
        </div>
    )
}

export default Card;