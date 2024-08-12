import React from "react"
//import Card from "./Card"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";
import '../Eventspage/Eventspage.css'
import event1 from '../Eventspage/Image(EVENT)/event1.png'
import event2 from '../Eventspage/Image(EVENT)/event2.png'
import event3 from '../Eventspage/Image(EVENT)/event3.png'
import event4 from '../Eventspage/Image(EVENT)/event4.png'
import event5 from '../Eventspage/Image(EVENT)/event5.png'
import event6 from '../Eventspage/Image(EVENT)/event6.png'
import event7 from '../Eventspage/Image(EVENT)/event7.png'
import event8 from '../Eventspage/Image(EVENT)/event8.png'
import event9 from '../Eventspage/Image(EVENT)/event9.png'
import event10 from '../Eventspage/Image(EVENT)/event10.png'
import event11 from '../Eventspage/Image(EVENT)/event11.png'
import event12 from '../Eventspage/Image(EVENT)/event12.png'
import event13 from '../Eventspage/Image(EVENT)/event13.png'
import event14 from '../Eventspage/Image(EVENT)/event14.png'
import leaf1 from '../Eventspage/leaf.png'
import leaf2 from '../Eventspage/leaf2.png'
import Slidermain from '/src/components/Slider/Slidermain.jsx'
import Socials from "../../components/socials/socials"
import iatweblogo from '../Eventspage/iatweblogo.png'
import eventsbg from '../Eventspage/eventsbg.png'
import img1 from '../Eventspage/img1.png'

function Eventspage() {
  return (
    <>
      <div className="h-auto w-full text-black">
        <div>
          <img src={eventsbg} alt="" />
          {/* <div className="h-screen md:text-[50px] backdrop-brightness-50 flex flex-col justify-center items-center text-center"> */}
          {/* <h1 className="lg:px-48">Experience Exclusivity : Join Premium Club Events</h1> */}
          {/* </div> */}
        </div>
        <div className="flex justify-center recbox1">
          <div className="glass-morphism w-[80%] p-8">
            <div className="flex flex-row justify-start items-center">
              <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
              <h1 className="text-[25px] ml-[-25px] font-bold">About Innovate-A-Thon</h1>
            </div>
            <div className="mt-12">
              <p>Innovate-a-Thon is an annual event hosted by the Entrepreneurship Development Cell at BIT Mesra, offering budding innovators a chance to explore their technical talents and create something innovative during a 24-hour product development hackathon. With additional speaker sessions and workshops, the event aims to cultivate ideas and discussions, ultimately making a significant impact and driving transformative change.</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="p-4 rounded-xl bg-[#FED853] font-bold">Register Now!</button>
            </div>
          </div>
        </div>

        <div className="bg-white w-screen overflow-hidden mt-32">
          <div className="flex lg:flex-row bg-white p-20 text-center justify-center items-center">
            <img src={leaf1} alt="" className="md:h-56" />
            <p className="md:text-[32px]">Our Events are more than just gatherings. They are opportunities to transform your entrepreneurial journey. Unleash the Entrepreneur in you and connect with us for the latest updates and exclusive announcements.!</p>
            <img src={leaf2} alt="" className="md:h-56" />
          </div>
        </div>
        <div className="md:m-20 m-4 mt-20">
          <div className="flex flex-col justify-center items-center lg:m-4 p-4 md:p-2 shadow-2xl rounded-2xl">
            <h1 className="font-bold text-[32px] uppercase">Past Events</h1>
            <div className="flex md:flex-row flex-col justify-center ">
              <div className="event-card-container">
                <div className="event-card">
                  <img src={event6} alt="Event" className="event-image" />
                  <div className="event-details">
                    <div className="event-header">
                      <h2>STOCK STOCISM</h2>
                      <button className="participate-button">PARTICIPATE</button>
                    </div>
                    <p>VENUE: ROOM 312</p>
                    <h4>DATE: 24/03/24</h4>
                  </div>
                </div>
              </div>
              <div className="event-card-container">
                <div className="event-card">
                  <img src={event1} alt="Event" className="event-image" />
                  <div className="event-details">
                    <div className="event-header">
                      <h2>STARTUP MELA</h2>
                      <button className="participate-button">PARTICIPATE</button>
                    </div>
                    <p>VENUE: ROOM 312</p>
                    <h4>DATE: 24/03/24</h4>
                  </div>
                </div>
              </div>
              <div className="event-card-container">
                <div className="event-card">
                  <img src={event3} alt="Event" className="event-image" />
                  <div className="event-details">
                    <div className="event-header">
                      <h2>INNOVATE-A-THON</h2>
                      <button className="participate-button">PARTICIPATE</button>
                    </div>
                    <p>VENUE: ROOM 312</p>
                    <h4>DATE: 24/03/24</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center">
              <div className="event-card-container">
                <div className="event-card">
                  <img src={event14} alt="Event" className="event-image" />
                  <div className="event-details">
                    <div className="event-header">
                      <h2>IPL AUCTION</h2>
                      <button className="participate-button">PARTICIPATE</button>
                    </div>
                    <p>VENUE: ROOM 312</p>
                    <h4>DATE: 24/03/24</h4>
                  </div>
                </div>
              </div>
              <div className="event-card-container">
                <div className="event-card">
                  <img src={event4} alt="Event" className="event-image" />
                  <div className="event-details">
                    <div className="event-header">
                      <h2>MARKETING SPINOFF</h2>
                      <button className="participate-button">PARTICIPATE</button>
                    </div>
                    <p>VENUE: ROOM 312</p>
                    <h4>DATE: 24/03/24</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Slidermain />
        <Socials />
      </div>
    </>
  )
}

export default Eventspage