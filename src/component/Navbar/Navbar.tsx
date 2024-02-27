import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../images/Logo.png'
import './Navbar.css'
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  // Check local storage for saved mode on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark-mode') {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('mode', newMode ? 'dark-mode' : 'light-mode');
    // Toggle dark mode class on body
    document.body.classList.toggle('dark');
  };

  // Toggle search box
  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  // Close sidebar if clicked outside
  const handleClickOutside = (e: any) => {
    if (e && !e.target.classList.contains('sidebarOpen') && !e.target.classList.contains('menu')) {
      setSidebarActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className={sidebarActive ? 'active' : ''}>
        <div className="nav-bar">
          <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
          <span className="logo navLogo"><a href="#"><img src={logo} style={{ height: "70px" }} alt="" /></a></span>

          <div className="menu">
            <div className="logo-toggle">
              <span className="logo"><a href="#">Online <span style={{ color: "orange" }}>Shopping</span> Center</a></span>
              <i className='bx bx-x siderbarClose' onClick={toggleSidebar}></i>
            </div>
            <br />
            <ul className="nav-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

              <div className="dropdown" onClick={handleDropdownClick}>
                <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "transparent", border: "none" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/shop/billingdetail">Billing Detail</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/shop/paymentMethod" >Payment Method</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/shop/ProductDetail">Product Detail</NavLink></li>
                </ul>
              </div>

              <li><NavLink to="/">products</NavLink></li>
              <div className="dropdown" onClick={handleDropdownClick}>
                <button className="btn btn-secondary dropdown-toggle btn" style={{ backgroundColor: "transparent", border: "none" }} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/myprofile">My Profile</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/Editprofile">Edit Profile</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/saveaddress">Address</NavLink></li><hr />
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/">Login</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/">Sign Up</NavLink></li>
                  <li><NavLink className="dropdown-item mt-2" style={{ backgroundColor: "black", color: "white" }} to="/">Forgot Password</NavLink></li>

                </ul>
              </div>

            </ul>
          </div>

          <div className="darkLight-searchBox">

            <div className="dark-light" onClick={toggleDarkMode}>

              {darkMode ? (
                <>
                  <i className='bx bx-sun '></i>
                </>
              ) : (
                <>
                  <i className='bx bx-moon '></i>
                </>
              )}
            </div>



            <div className="darkLight-searchBox">

              <div className="cart" >
                <NavLink to=""> <FontAwesomeIcon style={{ fontSize: "20px", color: "white", marginTop: "5px", marginLeft: "10px" }} icon={faCartShopping} /></NavLink>
              </div>
            </div>
            <div className="darkLight-searchBox">
              <div className="dark-light" >

                <NavLink to=""> <FontAwesomeIcon style={{ fontSize: "20px", color: "white", marginTop: "5px", marginLeft: "10px" }} icon={faHeart} /></NavLink>
              </div>
            </div>

            <div className="searchBox">
              <div className="searchToggle" onClick={toggleSearch}>
                <i className={`bx ${searchActive ? 'bx-x ' : 'bx-search search'}`}></i>
              </div>

              <div className={`search-field ${searchActive ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." />
                <i className='bx bx-search'></i>
              </div>
              <div className="">


              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default App;




// import React from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css'
// // import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import { NavLink } from 'react-router-dom'
// // import "./Navbar11.css"
// import './Navbar.css'

// function App() {
//   return (
//     <>
//           <nav className="navbar navbar-expand-lg fixed-top">
//         <div className="container">
//           <a className="navbar-brand me-auto" href="#">LOGO</a>
//           <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="offcanvasNavbarLabel">LOGO</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div className="offcanvas-body">
//               <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
//                 <li className="nav-item">
//                   <NavLink className="nav-link active mx-lg-2" aria-current="page" to="#">Home</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link mx-lg-2" to="#">About</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link mx-lg-2" to="#">Contact</NavLink>
//                   </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                       Shop
//                     </a>
//                     <ul className="dropdown-menu mx-lg-2">
//                       <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
//                       <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
//                       <li>
//                       </li>
//                       <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
//                     </ul>
//                   </li>
                    
//                   <li className="nav-item">
//                     <NavLink className="nav-link mx-lg-2" to="#">Product</NavLink>
//                   </li>
                  
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Account
//                   </a>
//                   <ul className="dropdown-menu mx-lg-2">
//                     <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
//                     <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
//                     <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
//                     <li>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
              
//             </div>
//           </div>
//           <a href="" className="login-button ">Login</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
          
//         </div>
//       </nav>

//     </>
//   )
// }

// export default App
