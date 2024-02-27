import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import "bootstrap/dist/js/bootstrap.bundle"
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'

import { NavLink } from 'react-router-dom'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossorigin="anonymous"></link>

import './Header1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping ,faSearch} from '@fortawesome/free-solid-svg-icons'

function Header() {
    // const [searchActive, setSearchActive] = useState(false);
 
    // const toggleSearch = () => {
    //     setSearchActive(!searchActive);
    //   };
  return (
    <>
          <nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor:"#006d77"}}>
        <div className="container">
          <a className="navbar-brand me-auto" href="#">LOGO</a>
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">LOGO</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" style={{backgroundColor:"#006d77"}}>
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link active mx-lg-2 text-white" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2 text-white" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link mx-lg-2 text-white" to="/contact">Contact</NavLink>
                  </li>
                <li className="nav-item dropdown " >
                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                    <ul className="dropdown-menu mx-lg-2" style={{padding:"10px 5px ",borderRadius:"0px"}}>
                    <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/shop/billingdetail">Billing Detail</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/shop/paymentMethod" >Payment Method</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/shop/ProductDetail">Product Detail</NavLink></li>
                    </ul>
                  </li>
                    
                  <li className="nav-item">
                    <NavLink className="nav-link mx-lg-2 text-white" to="#">Product</NavLink>
                  </li>
                  
                <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </a>
                  <ul className="dropdown-menu mx-lg-2" style={{padding:"10px 5px ",borderRadius:"0px"}}>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/myprofile">My Profile</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/Editprofile">Edit Profile</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/saveaddress">Address</NavLink></li><hr />
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/">Login</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/">Sign Up</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "#006d77", color: "white" }} to="/">Forgot Password</NavLink></li>

                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
          <NavLink to=""> <FontAwesomeIcon style={{color:"white",marginLeft:"15px",fontSize:"25px"}} icon={faCartShopping} /></NavLink>
          <NavLink to=""> <FontAwesomeIcon style={{color:"white",marginLeft:"15px",fontSize:"25px"}} icon={faHeart} /></NavLink>
          <NavLink to=""> <FontAwesomeIcon style={{color:"white",marginLeft:"15px",fontSize:"25px"}} icon={faSearch} /></NavLink>
          {/* <div className="searchBox">
              <div className="searchToggle" onClick={toggleSearch}>
                <i className={`bx ${searchActive ? 'bx-x ' : 'bx-search search'}`}></i>
              </div>

              <div className={`search-field ${searchActive ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." />
                <i className='bx bx-search'></i>
              </div>
              <div className="">


              </div>
            </div> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{color:"white"}}></span>
          </button>
          
        </div>
      </nav>

    </>
  )
}

export default Header
