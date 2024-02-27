import React from "react";
import { NavLink } from "react-router-dom";

export default function EditProfile() {
    return (
        <>
            <br /><br />
            <br /><br /><br />
            <div class="container overflow-hidden">
                <div class=" p-3 border bg-light">

                    <div class="row gx-5 ">
                        <div className="col-lg-3 col-md-5 col-sm-12 mb-3 d-flex align-items-center justify-content-center">
                            <div class=" p-3 border bg-light">
                            <NavLink to="/dashboard"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Dashboard</button></NavLink>
                               <NavLink to=""> <button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Orders</button></NavLink>
                                <NavLink to="/myProfile"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Profile</button></NavLink>
                                <NavLink to="/Editprofile"><button className="w-100 bg-dark text-white mb-3" style={{ padding: "10px 25px" }}>Edit Profile</button></NavLink>
                                <NavLink to="/saveaddress"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Save Address</button></NavLink>
                                <NavLink to=""><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Logout</button></NavLink>

                            </div>

                        </div>
                        <div class="col-lg-9 col-md-7 col-sm-12">
                            <div class="p-3 border bg-light">
                                <h1 className="text-center" style={{ fontSize: "35px" }}> <b>Edit Details</b> </h1><br /><hr />
                                <br />
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Name" aria-label="Username" style={{ borderRadius: "0px", padding: "15px 10px" }} aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control" placeholder="Mobile Number" aria-label="Username" style={{ borderRadius: "0px", padding: "15px 10px" }} aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Email" aria-label="Username" style={{ borderRadius: "0px", padding: "15px 10px" }} aria-describedby="basic-addon1" />
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="male" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="male" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">Female</label>
                                </div>

                                <div class="input-group mb-3">
                                    <input type="date" class="form-control" placeholder="" aria-label="Username" style={{ borderRadius: "0px", padding: "15px 10px" }} aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Location" aria-label="Username" style={{ borderRadius: "0px", padding: "15px 10px" }} aria-describedby="basic-addon1" />
                                </div>
                                <br />
                                <button type="button" style={{ backgroundColor: "black", padding: "15px 0px", color: "white" }} class=" w-100">Save Details</button>
                                <br /><br />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
       <br /><br />
        </>
    )
}