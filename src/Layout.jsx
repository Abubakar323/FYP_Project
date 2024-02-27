import React from "react";
import Footer from "./component/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Header from "./component/Header1/Header1.jsx";
// import Navbar from './component/Navbar/Navbar.tsx'
function Layout(){
    return(
    <>

    {/* <Navbar /> */}
    <Header />
    <Outlet />
    <Footer />
    
    </>
    )
}
export default Layout