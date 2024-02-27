import React from 'react'
import Logo from '../../images/Logo.png'
import appstore from '../../images/appstore.png'
import googleplay from '../..//images/googleplay.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'

function Footer1() {
    return (
        <>
            <div className='container-fluid' id='ab' style={{ backgroundColor: "#006d77", color: "white" }}>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3' >
                        <br /><br />

                        <img src={Logo} className='w-50 h-30 ' alt="" />

                        <br />
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                        <br />

                        <button style={{ backgroundColor: "white",border:'none', padding: "10px 25px", color: "black", borderRadius: "25px" }}>See More</button>

                        <br />
                        <br />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3 text-center' >
                        <br /><br />

                        <h1 style={{ fontSize: "25px" }}><b>Explore</b></h1><br />
                        <ul style={{ listStyle: "none" }}>
                            <li className='mb-3 hover-underline-animation'>Fashion</li><br />
                            <li className='mb-3 hover-underline-animation'>Women</li><br />
                            <li className='mb-3 hover-underline-animation'>Furniture</li><br />
                            <li className='mb-3 hover-underline-animation'>Shoes</li><br />
                            <li className='mb-3 hover-underline-animation'>Towear</li><br />
                            <li className='mb-3 hover-underline-animation'>Brand</li><br />
                            <li className='mb-3 hover-underline-animation'>Kids</li><br />
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3 text-center' >
                        <br /><br />

                        <h1 style={{ fontSize: "25px" }}><b>Company</b></h1><br />
                        <ul style={{ listStyle: "none" }}>
                            <li className='mb-3 hover-underline-animation'>About Us</li><br />
                            <li className='mb-3 hover-underline-animation'>Contact Us</li><br />
                            <li className='mb-3 hover-underline-animation'>FAQ</li><br />
                            <li className='mb-3 hover-underline-animation'>Privacy</li><br />
                            <li className='mb-3 hover-underline-animation'>Terms</li><br />
                            <li className='mb-3 hover-underline-animation'>Complaints</li><br />

                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3 text-center' >
                        <br /><br />

                        <h1 style={{ fontSize: "25px" }}><b>Follow Us</b></h1><br />
                        <div className='row d-flex align-items-center justify-content-center'>
                            <div className='col'>
                                <FontAwesomeIcon icon={faFacebookF} id='icon' style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid white" }} />&nbsp;&nbsp; <FontAwesomeIcon id='icon' icon={faInstagram} style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid white" }} />&nbsp;&nbsp; <FontAwesomeIcon id='icon' icon={faLinkedin} style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid white" }} />&nbsp;&nbsp; <FontAwesomeIcon icon={faTwitter} style={{ borderRadius: "50px", height: "20px", width: "20px", padding: "10px 10px", border: "2px solid white" }} id='icon' /> &nbsp;&nbsp;

                            </div>

                        </div>
                        <br />
                        <div>
                            <br />
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase mb-4"><b>Download Apps</b></h2>
                            <ul className="text-gray-500 font-medium" style={{listStyle:"none"}}>
                                <li className="mb-4">
                                    <Link to="/" className="flex items-center">
                                        <img
                                            src={appstore}
                                            className="mr-3 mx-auto d-block" style={{ height: "50px", border: "2px solid white", borderRadius: "5px" }}
                                            alt="Logo"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex items-center">
                                        <img
                                            src={googleplay}
                                            className="mr-3 mx-auto d-block" style={{ height: "50px" }}
                                            alt="Logo"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default Footer1


