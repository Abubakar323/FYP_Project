import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFirstOrder } from '@fortawesome/free-brands-svg-icons'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

// d-flex align-items-center justify-content-center
function Dashboard() {
    return (

        <>
            <br /><br /><br />
            <br /><br /><br />
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col-lg-3 col-md-5 col-sm-12 mb-3 ">
                        <div class=" p-3 border bg-light">
                            <NavLink to="/dashboard"><button className="w-100 bg-dark text-white mb-3" style={{ padding: "10px 25px" }}>Dashboard</button></NavLink>
                            <NavLink><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Orders</button></NavLink>
                            <NavLink to="/myProfile"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Profile</button></NavLink>
                            <NavLink to="/Editprofile"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Edit Profile</button></NavLink>
                            <NavLink to="/saveaddress"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Save Address</button></NavLink>
                            <NavLink><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Logout</button></NavLink>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div class="p-3 border border-dark bg-light">
                            <div class="p-3 text-center" style={{ fontSize: "30px" }}><FontAwesomeIcon icon={faFirstOrder} /> <br /><br /><b>Orders</b></div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div class="p-3 border border-dark bg-light">
                            <div class="p-3  text-center" style={{ fontSize: "30px" }}><b><FontAwesomeIcon icon={faUser} /> <br /><br />Profile Details</b> </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div class="p-3 border border-dark bg-light">
                            <div class="p-3  text-center" style={{ fontSize: "30px" }}><FontAwesomeIcon icon={faLocationDot} /><br /><br /><b>Addresss</b></div>

                        </div>
                    </div>

                </div>

            </div>

            <br /><br /><br />

        </>


    )
}
export default Dashboard