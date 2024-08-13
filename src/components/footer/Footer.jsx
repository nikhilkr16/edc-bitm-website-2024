import React from "react";
import "./footer.css";
import edclogo from "../../assets/edclogo3d.png";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer">
			<div className="sb_footer section_padding flex flex-col justify-center items-center">
				<div className="sb__footer-links flex md:gap-40 mt-12">
					<div className="sb__footer-links_edc scale-125">
						<Link to="/">
							<div className="sb__footer-links_edc_upper">
								<img src={edclogo} className="logo3d" alt="" />{" "}
								<h4>Entrepreneurship Development Cell</h4>
							</div>
						</Link>
						<div className="para ml-4">
							<p>
								Our aim is to ignite the flame of entrepreneurship in the minds
								of youth.
							</p>
							<div className="socialmedia ml-4">
								<a href="https://www.facebook.com/edcbitmesra">
									<button>
										<FaFacebook className="facebookIcon" />
									</button>
								</a>
								<a href="https://www.instagram.com/edcbitmesra">
									<button>
										<FaInstagram className="instagramIcon"></FaInstagram>
									</button>
								</a>
								<a href="https://www.linkedin.com/company/edcbitmesra/">
									<button>
										<FaLinkedinIn className="linkedinIcon"></FaLinkedinIn>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="flex  ml-8 lg:gap-20 lg:w-1.5/3 ">
						<div className="sb__footer-links_div md:w-48  ">
							<h3>QUICK LINK</h3>
							<a href="https://www.linkedin.com/in/jeganathan-chockalingam-126003306/?originalSubdomain=in">
								<p className="hover:text-yellow-400">Dean of RIE</p>
							</a>
							<a href="https://linkedin.com/in/vishal-hshah/?originalSubdomain=in">
								<p className="hover:text-yellow-400">Faculty Advisor</p>
							</a>
							<a href="/Team">
								<p className="hover:text-yellow-400">Hall of Fame</p>
							</a>
						</div>

						<div className=" sb__footer-links_div ">
							<h3 className="text-lg font-semibold mb-4 items-start">
								CONTACT US
							</h3>

							<div className="flex flex-col md:flex-row justify-center gap-8">
								<div className="">
									<h6 className="md:w-32">For Official</h6>
									<a
										href="mailto: president.edc@bitmesra.ac.in"
										className="block mb-2 hover:scale-100"
									>
										<p className="hover:text-yellow-400">President</p>
									</a>
									<a
										href="mailto:team.edc@bitmesra.ac.in"
										className="block mb-2 "
									>
										<p className="hover:text-yellow-400">EDC Team</p>
									</a>
								</div>
								<div className="">
									<h6 className="md:w-32">For Queries</h6>
									<a
										href="mailto:btech10947.22@bitmesra.ac.in"
										className="block mb-2 "
									>
										<p className="hover:text-yellow-400">Pranav Raj Srivastav</p>
									</a>
									<a
										href="mailto:btech10731.22@bitmesra.ac.in"
										className="block mb-2"
									>
										<p className="hover:text-yellow-400">Anshuman Tomar</p>
									</a>
								</div>
								<div className="">
									{/* <!-- Add more links if needed --> */}
									<h6 className="md:w-32">For Enquiries</h6>
									<a
										href="mailto:nikhilkr3000@gmail.com "
										className="block mb-2 "
									>
										<p className="hover:text-yellow-400">Nikhil Kumar</p>
									</a>

									<a
										href="mailto: vaibhavkgupta.2004@gmail.com"
										className="block mb-2"
									>
										<p className="hover:text-yellow-400">Vaibhav Kr Gupta</p>
									</a>

									<a
										href="mailto: btech10962.22@bitmesra.ac.in"
										className="block mb-2 "
									>
										<p className="hover:text-yellow-400">Krishnanshu Jha</p>
									</a>
								</div>
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