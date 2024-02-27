import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
export default function SavedAddress() {
  return (
    <>
      <br /><br />
      <br /><br /><br />

      <div className="container">
        <div className="row border">
          <div className="col-lg-3 col-md-5 col-sm-12 d-flex align-items-center justify-content-center mb-3">
            <div class=" p-3 border bg-light">
            <NavLink to="/dashboard"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Dashboard</button></NavLink>
            <NavLink to=""><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Orders</button></NavLink>
            <NavLink to="/myProfile"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Profile</button></NavLink>
            <NavLink to="/Editprofile"><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Edit Profile</button></NavLink>
            <NavLink to="/saveaddress"><button className="w-100 bg-dark text-white mb-3" style={{ padding: "10px 25px" }}>Save Address</button></NavLink>
            <NavLink to=""><button className="w-100 border border-dark mb-3 text-dark" style={{ padding: "10px 25px" }}>Logout</button></NavLink>
            </div>

          </div>

          <div className="col-lg-9 col-md-7 col-sm-12">
            <div class="container ">
              <div style={{ backgroundColor: "gray", color: "white" }} class="row  d-flex align-items-center justify-content-center">
                <div class="col-lg-9 col-md-9 col-sm-12 p-3" >
                  <b style={{ fontSize: "15px" }}>Saved Address</b>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-2 d-flex align-items-center justify-content-center ">
                  <button type="button" style={{ padding: "7px 30px", border: "2px solid white" }}><FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;Add New</button>
                </div>
              </div>
            </div>
            <br />
            <div class="container">
              <div class="row  d-flex align-items-center justify-content-center">
                <div style={{ backgroundColor: "gray" }} className="col-lg-10 col-md-12 col-sm-12 p-3  " >
                  <h1 style={{ fontSize: "20px", color: "white" }}> <b>Default Address</b> </h1>
                </div>
              </div>
              <br />
              <div class="container">
                <div class="row border p-4">
                  <div class="col-9 col-md-9 col-sm-12">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        <h3 style={{ fontSize: "20px" }}><b>Name</b> </h3>
                        <p>47-A, US Road, New York <br />
                          United Kingdom, 201001</p>
                        <p>Mobile: +91-xxxxxxxxxx</p>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 mt-3 ">
                    <div class="d-grid gap-2 mx-auto">
                      <button type="button" style={{ backgroundColor: "black", color: "white", padding: "10px 25px", borderRadius: "0px" }}><b>Remove</b> </button>
                      <button style={{ backgroundColor: "transparent", border: "2px solid black", color: "black", padding: "10px 25px", borderRadius: "0px" }} type="button"><b>Edit</b></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <br />
            <div class="container">
              <div class="row  d-flex align-items-center justify-content-center">
                <div style={{ backgroundColor: "gray" }} className="col-lg-10 col-md-12 col-sm-12 p-3  " >
                  <h1 style={{ fontSize: "20px", color: "white" }}> <b>Other Address</b> </h1>
                </div>
              </div>
              <br />
              <div class="container">
                <div class="row border p-4">
                  <div class="col-lg-9 col-md-9 col-sm-12">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        <h3 style={{ fontSize: "20px" }}><b>Name</b> </h3>
                        <p>47-A, US Road, New York <br />
                          United Kingdom, 201001</p>
                        <p>Mobile: +91-xxxxxxxxxx</p>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 mt-3 ">
                    <div class="d-grid gap-2 mx-auto">
                      <button type="button" style={{ backgroundColor: "black", color: "white", padding: "10px 25px", borderRadius: "0px" }}><b>Remove</b> </button>
                      <button style={{ backgroundColor: "transparent", border: "2px solid black", color: "black", padding: "10px 25px", borderRadius: "0px" }} type="button"><b>Edit</b></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />


            <div class="container">
              <div class="container">
                <div class="row border p-4">
                  <div class="col-lg-9 col-md-9 col-sm-12">
                    <button type="button" style={{ backgroundColor: "black", color: "white", padding: "10px 25px", borderRadius: "0px" }}><b>Add New Address</b> </button>

                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>


        </div>

      </div>
<br /><br />
    </>
  )
}