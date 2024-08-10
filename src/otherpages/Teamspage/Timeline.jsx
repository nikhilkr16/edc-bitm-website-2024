import React from "react";
import edclogo from "../../assets/edclogo.png";
import '../Teamspage/timeline.css';
import ujjwalS from '../../assets/ujjalSir.png'
function Timeline(){
    return (
      <div className='teamsparentboxx '>
           <div className='teamsboxx block'>
   <div className='p-1'> <h3 className='text-xl font-semibold ml-7 mb-4 mt-8'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Ha</span>ll of Fame</h3>
       <h2 className='text-2xl font-bold ml-7 mb-4 mt-7 '>Previous Presidents</h2>
    </div>   
    <div className='teamstimeee'>       
    <div className='teamstimeline'>
    <div class="teamscontainer teamsleft-container">
         <img src={edclogo} alt="EDC Logo" />
           <div>
           <div class="teamstext-box">
          <div
      className=" sm:hidden bg-cover bg-center h-24 w-24 relative z-100 mr-20 ml-8 border border-black	rounded-md hidden md:block lg:block xl:block"
      style={{ backgroundImage: `url(${ujjwalS})` }}
         >
      {/* You can add any content here */}
    </div>
            <div>
                <h2>EDC President</h2>
                <small>2017-2018</small>
                <p>Narendra Modi</p>
                <span class="left-container-arrow"></span>
                </div>
            </div>
           </div>
            
            </div>
            <div class="teamscontainer teamsright-container">
         <img src={edclogo} alt="EDC Logo" />
           <div>
           <div class="teamstext-box">
          <div
      className=" bg-cover bg-center h-24 w-24 relative z-100 mr-20 ml-8 border border-black	rounded-md hidden md:block lg:block xl:block"
      style={{ backgroundImage: `url(${ujjwalS})` }}
         >
      {/* You can add any content here */}
    </div>
            <div>
                <h2>EDC President</h2>
                <small>2017-2018</small>
                <p>Narendra Modi</p>
                <span class="right-container-arrow"></span>
                </div>
            </div>
           </div>
            
            </div>
      <div class="teamscontainer teamsleft-container">
         <img src={edclogo} alt="EDC Logo" />
           <div>
           <div class="teamstext-box">
          <div
      className=" bg-cover bg-center h-24 w-24 relative z-100 mr-20 ml-8 border border-black	rounded-md hidden md:block lg:block xl:block"
      style={{ backgroundImage: `url(${ujjwalS})` }}
         >
      {/* You can add any content here */}
    </div>
            <div>
                <h2>EDC President</h2>
                <small>2017-2018</small>
                <p>Narendra Modi</p>
                <span class="left-container-arrow"></span>
                </div>
            </div>
           </div>
            
            </div>
            <div class="teamscontainer teamsright-container">
         <img src={edclogo} alt="EDC Logo" />
           <div>
           <div class="teamstext-box">
          <div
      className=" bg-cover bg-center h-24 w-24 relative z-100 mr-20 ml-8 border border-black	rounded-md hidden md:block lg:block xl:block"
      style={{ backgroundImage: `url(${ujjwalS})` }}
         >
      {/* You can add any content here */}
    </div>
            <div>
                <h2>EDC President</h2>
                <small>2017-2018</small>
                <p>Narendra Modi</p>
                <span class="right-container-arrow"></span>
                </div>
            </div>
           </div>
            
            </div>
      <div class="teamscontainer teamsleft-container">
         <img src={edclogo} alt="EDC Logo" />
           <div>
           <div class="teamstext-box">
          <div
      className=" bg-cover bg-center h-24 w-24 relative z-100 mr-20 ml-8 border border-black	rounded-md hidden md:block lg:block xl:block"
      style={{ backgroundImage: `url(${ujjwalS})` }}
         >
      {/* You can add any content here */}
    </div>
            <div>
                <h2>EDC President</h2>
                <small>2017-2018</small>
                <p>Narendra Modi</p>
                <span class="left-container-arrow"></span>
                </div>
            </div>
           </div>
            
            </div>
    </div>
    </div>
    </div>
    </div>
    )
    
}

export default Timeline