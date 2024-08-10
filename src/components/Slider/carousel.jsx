import React, { useState } from 'react';
import img1 from './img1.png';
import img2 from './img1.png';
import img3 from './img1.png'; // Make sure to import your images correctly
import img4 from './img1.png';
import img5 from './img1.png';
import img6 from './img1.png';
import img7 from './img1.png';
import img8 from './img1.png';


const Gallery = () => {
    const [degrees, setDegrees] = useState(0);

    const prevSlide = () => {
        setDegrees(degrees + 45);
    };

    const nextSlide = () => {
        setDegrees(degrees - 45);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 px-4">
            <h1 className="text-3xl text-gray-300 font-sans mb-8 sm:mb-16">GALLERY</h1>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 transform-style-3d transition duration-1500" style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}>
                {[img1, img2, img3, img4, img5, img6, img7, img8].map((image, index) => (
                    <span key={index} className="absolute w-full h-full transform-origin-center transform-style-3d" style={{ transform: `rotateY(${index * 45}deg) translateZ(12rem)` }}>
                        <img src={img1} alt={`img${index + 1}`} className="absolute w-full h-full object-cover select-none" />
                    </span>
                ))}
            </div>
            <div className="flex gap-8 mt-10 sm:mt-16">
                <button onClick={prevSlide} className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white">
                    <span className="absolute w-3.5 h-3.5 border-t-2 border-r-2 border-white transform rotate-[225deg] -translate-x-1 translate-y-1"></span>
                </button>
                <button onClick={nextSlide} className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white">
                    <span className="absolute w-3.5 h-3.5 border-t-2 border-r-2 border-white transform rotate-[45deg] -translate-x-1 translate-y-1"></span>
                </button>
            </div>
        </div>
    );
};

export default Gallery;
