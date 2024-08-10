import React from "react";
import img from '../Apppage/header1.png'

function Apppage() {
    return(
        <div className="bg-gray-300 flex flex-col justify-center items-center p-40 text-3xl">
            <div className="bg-slate-200 flex flex-col justify-center items-center p-40 font-bold">
            <img src={img} alt="" />
            <h1>Coming Soon .....</h1>
            </div>
        </div>
    )
}

export default Apppage