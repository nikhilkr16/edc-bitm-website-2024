import React from "react";
import "./footer.css";
import edclogo from "../../assets/edclogo.png";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding flex flex-col justify-center items-center">
        <div className="sb__footer-links ">
          <div className="sb__footer-links_edc scale-125">
            <div className="sb__footer-links_edc_upper">
              <p>
                <img src={edclogo} className="img01" alt="" />{" "}
              </p>
              <h4>Entrepreneurship Development Cell</h4>
            </div>
            <div className="para">
              <p>
                Our aim is to ignite the flame of entrepreneurship in the minds
                of youth.
              </p>
              <div className="socialmedia">
                <p>
                  <FaFacebook className="facebookIcon" />
                </p>
                <p>
                  <FaInstagram className="instagramIcon"></FaInstagram>
                </p>
                <p>
                  <FaLinkedinIn className="linkedinIcon"></FaLinkedinIn>
                </p>
              </div>
            </div>
          </div>
          <div className="sb__footer-links_div">
            <h3>QUICK LINK</h3>
            <a href="/Dean">
              <p>Dean of RIE</p>
            </a>
            <a href="/FA">
              <p>Faculty Advisor</p>
            </a>
            <a href="/hall of Fame">
              <p>Hall of Fame</p>
            </a>
          </div>

          <div className=" sb__footer-links_div ">
            <h3 className="text-lg font-semibold mb-4 items-start">Contact Us</h3>

            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className=" min-w-[150px] md:min-w-[100px]">
              <h6>For Official</h6>
                <a
                  href="mailto: president.edc@bitmesra.ac.in"
                  className="block mb-2 hover:scale-100"
                >
                  <p>President</p>
                </a>
                <a href="mailto:team.edc@bitmesra.ac.in" className="block mb-2 ">
                  <p>EDC Team</p>
                </a>
              </div>
              <div className="min-w-[150px] md:min-w-[100px]">
                <h6>For Queries</h6>
                <a
                  href="mailto:btech10947.22@bitmesra.ac.in"
                  className="block mb-2 "
                >
                  <p>Pranav Srivastava</p>
                </a>
                <a
                  href="mailto:btech10731.22@bitmesra.ac.in"
                  className="block mb-2"
                >
                  <p>Anshuman Tomar</p>
                </a>
              </div>
              <div className=" min-w-[200px]">
                {/* <!-- Add more links if needed --> */}
                <h6>For Enquiries</h6>
                <a
                  href="mailto:nikhilkr3000@gmail.com "
                  className="block mb-2 "
                >
                  <p>Nikhil Kumar</p>
                </a>

                <a
                  href="mailto: vaibhavkgupta.2004@gmail.com"
                  className="block mb-2"
                >
                  <p>Vaibhav Kr Gupta</p>
                </a>

                <a
                  href="mailto: btech10962.22@bitmesra.ac.in"
                  className="block mb-2 "
                >
                  <p>Krishnanshu Jha</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              Copyright @{new Date().getFullYear()} EDC, BIT Mesra. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
