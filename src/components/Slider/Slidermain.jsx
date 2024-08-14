import React from "react";
import Slider from "./Slider";
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"


function Slidermain() {

    const handleClick = () => {
        window.open(
            "https://drive.google.com/drive/folders/1UR_3rWjMEXwj9dTGYKmUvXwDJIsesuMg?usp=sharing",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="w-screen">
            <div className="glass-morphic lg:m-20 p-4 lg:p-12 m-4 shadow-2xl rounded-2xl my-16">
                <div className="flex flex-row justify-start items-center">
                    <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                    <h1 className="text-[25px] ml-[-30px] font-bold">Gallery</h1>
                </div>
                <div className="mt-12">
                    <h1 className="text-[35px] font-bold">Captured Moments</h1>
                </div>
                <div className="flex justify-center items-center mt-8 md:px-32">
                    <Slider />
                </div>

                <div className="flex items-center justify-center">

                    <a href="https://drive.google.com/drive/folders/1UR_3rWjMEXwj9dTGYKmUvXwDJIsesuMg?usp=sharing" target="_blank">
                        <button className="sm:mt-0 mt-8 p-4 rounded-xl bg-[#FED853] font-bold" onClick={handleClick}>View More</button>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Slidermain