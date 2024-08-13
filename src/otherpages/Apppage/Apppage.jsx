import React from "react";
import img from '../Apppage/header1.png'

function Apppage() {
    return(
        <>
        <div className="h-16 w-screen bg-slate-600"></div>
        <div className=" flex flex-col justify-center items-center ">
            <div className=" flex flex-col justify-center items-center p-20 font-bold">
            <img className="h-[400px] w-auto" src={img} alt="" />
            </div>
        </div>
        </>
    )
}

export default Apppage