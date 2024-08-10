import React from "react";
import edclogo from "../../assets/edclogo.png";
import '../Teamspage/timeline.css';

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
                    <div class="teamstext-box">
                <h2>EDC President</h2>
                <small>2017-2018</small>
                <p>Narendra Modi</p>
                <span class="left-container-arrow"></span>
            </div>
            </div>
      <div className="teamscontainer teamsright-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="teamstext-box">
          <h2>EDC President</h2>
          <small>2018-2019</small>
          <p>Narendra Modi</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="teamscontainer teamsleft-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="teamstext-box">
          <h2>EDC President</h2>
          <small>2019-2020</small>
          <p>Narendra Modi</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="teamscontainer teamsright-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="teamstext-box">
          <h2>EDC President</h2>
          <small>2020-2021</small>
          <p>Narendra Modi</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="teamscontainer teamsleft-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="teamstext-box">
          <h2>EDC President</h2>
          <small>2021-2022</small>
          <p>Narendra Modi</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="teamscontainer teamsright-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="teamstext-box">
          <h2>EDC President</h2>
          <small>2022-2023</small>
          <p>Narendra Modi</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
    
}

export default Timeline