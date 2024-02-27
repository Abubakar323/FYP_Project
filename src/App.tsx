// import { useEffect, useState } from 'react';
// import {  NavLink } from "react-router-dom";

// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [searchActive, setSearchActive] = useState(false);
//   const [sidebarActive, setSidebarActive] = useState(false);

//   // Check local storage for saved mode on component mount
//   useEffect(() => {
//     const savedMode = localStorage.getItem('mode');
//     if (savedMode === 'dark-mode') {
//       setDarkMode(true);
//     }
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('mode', newMode ? 'dark-mode' : 'light-mode');
//     // Toggle dark mode class on body
//     document.body.classList.toggle('dark');
//   };

//   // Toggle search box
//   const toggleSearch = () => {
//     setSearchActive(!searchActive);
//   };

//   // Toggle sidebar
//   const toggleSidebar = () => {
//     setSidebarActive(!sidebarActive);
//   };

//   // Close sidebar if clicked outside
//   const handleClickOutside = (e: any) => {
//     if (e && !e.target.classList.contains('sidebarOpen') && !e.target.classList.contains('menu')) {
//       setSidebarActive(false);
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener('click', handleClickOutside);
//     return () => {
//       document.body.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <nav className={sidebarActive ? 'active' : ''}>
//         <div className="nav-bar">
//           <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
//           <span className="logo navLogo"><a href="#">CodingLab</a></span>

//           <div className="menu">
//             <div className="logo-toggle">
//               <span className="logo"><a href="#">CodingLab</a></span>
//               <i className='bx bx-x siderbarClose' onClick={toggleSidebar}></i>
//             </div>

//             <ul className="nav-links">
//               <li><NavLink to="/">Home</NavLink></li>
//               <li><NavLink to="/about">About</NavLink></li>
//               <li><NavLink to="/contact">Contact</NavLink></li>
//               <li><NavLink to="#">Services</NavLink></li>
//               <li><NavLink to="#">Contact</NavLink></li>
//             </ul>
//           </div>

//           <div className="darkLight-searchBox">
//             <div className="dark-light" onClick={toggleDarkMode}>
//               {darkMode ? (
//                 <>
//                   <i className='bx bx-sun '></i>
//                 </>
//               ) : (
//                 <>
//                   <i className='bx bx-moon '></i>
//                 </>
//               )}
//             </div>

//             <div className="searchBox">
//               <div className="searchToggle" onClick={toggleSearch}>
//                 <i className={`bx ${searchActive ? 'bx-x ' : 'bx-search search'}`}></i>
//               </div>

//               <div className={`search-field ${searchActive ? 'active' : ''}`}>
//                 <input type="text" placeholder="Search..." />
//                 <i className='bx bx-search'></i>
//               </div>

//             </div>
//           </div>
//         </div>
//       </nav>

//     </>
//   );
// }

// export default App;
