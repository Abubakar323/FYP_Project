import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
export default function ProfileDetail() {
    return (
        <><br /><br /><br /><br />
            <div class="container border p-4"><br />
                <h1 className="text-center" style={{ fontSize: "35px" }}><b>Profile Details</b></h1><br /><hr /><br />
               <div className="row">

               
                <div className="col-lg-3 col-md-5 col-sm-12 mb-3 d-flex align-items-center justify-content-center">
                    <div class=" p-3 border bg-light">
                    <NavLink to="/dashboard"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Dashboard</button></NavLink>
                    <NavLink to=""><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Orders</button></NavLink>
                    <NavLink to="/myProfile"> <button className="w-100 bg-dark text-white mb-3" style={{ padding: "10px 25px" }}>Profile</button></NavLink>
                    <NavLink to="/Editprofile"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Edit Profile</button></NavLink>
                    <NavLink to="/saveaddress"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Save Address</button></NavLink>
                    <NavLink> <button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Logout</button></NavLink>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12">
                <div class=" p-4 border bg-light">
                    <div class="row" style={{ backgroundColor: "gray" }}>
                        <div class=" col" style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Full Name
                        </div>
                        <div class="  col" style={{ paddingTop: "23px", fontSize: "20px" }}>
                            value
                        </div>

                    </div>
                    <div class="row" >
                        <div class=" col" style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Mobile Number
                        </div>
                        <div class="  col" style={{ paddingTop: "23px", fontSize: "20px" }}>

                        </div>

                    </div>
                    <div class="row" style={{ backgroundColor: "gray" }}>
                        <div class=" col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Email ID
                        </div>
                        <div class="  col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            value
                        </div>

                    </div>
                    <div class="row">
                        <div class=" col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Gender
                        </div>
                        <div class="  col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            value
                        </div>

                    </div>
                    <div class="row" style={{ backgroundColor: "gray" }}>
                        <div class=" col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Location
                        </div>
                        <div class="  col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Value
                        </div>

                    </div>
                    <div class="row">
                        <div class=" col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            DOB
                        </div>
                        <div class="  col " style={{ paddingTop: "23px", fontSize: "20px" }}>
                            Value
                        </div>

                    </div>
                    <br /><br />
                    <button type="button" style={{ padding: "15px 30px ", backgroundColor: "black", color: "white" }}> <FontAwesomeIcon icon={faPenToSquare} /> &nbsp;&nbsp; Large button</button>
                    <br /><br />
                </div>
                </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}