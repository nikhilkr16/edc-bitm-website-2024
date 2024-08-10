import React from "react";
import img from '../Slider/img1.png'
import '../Slider/style.css'

function Carousel() {
    return(
        let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');
        let box= document.querySelector('.box');

        let degrees = 0;

        prev.addEventListener('click',function(){
            degrees +=45;
            box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
        })
        next.addEventListener('click',function(){
            degrees -=45;
            box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
        })
        <div>
            <h1>GALLERY</h1>
    <div class="container">
        <div class="box">
            <span style="--i:1;"><img src={img}/></span>
            <span style="--i:2;"><img src={img}/></span>
            <span style="--i:3;"><img src={img}/></span>
            <span style="--i:4;"><img src={img}/></span>
            <span style="--i:5;"><img src={img}/></span>
            <span style="--i:6;"><img src={img}/></span>
            <span style="--i:7;"><img src={img}/></span>
            <span style="--i:8;"><img src={img}/></span>
           
        </div>
        <div class="btns">
            <div class="btn prev"></div>
            <div class="btn next"></div>
        </div>
    </div>
</div>
    )
}