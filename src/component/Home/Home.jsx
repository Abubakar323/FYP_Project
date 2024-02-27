import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faSnapchat, faMicrosoft, faInstagram, faLinkedin, faSpotify, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTruckFast, faShieldHalved, faAnchor, faAward, } from '@fortawesome/free-solid-svg-icons'
// import FeatureProduct from "../FeatureProduct";

function Home() {
  return (
    <>


      <br /><br /><br />
      <div className="container">
        <div className="row" >
          <div className="col-lg-6 col-md-12 col-sm-12 mb-3" style={{ padding: "20px" }}>
            <br />
            <p>Welcome to</p>
            <div className="animated-text">
              <div className="row">
                <div className="col-sm-12">
                  <h1 style={{ fontSize: "30px" }}><b><span></span></b></h1>

                </div>

              </div>

            </div>
<br />
            <p>Immerse yourself in the latest fashion trends with our carefully curated collection. From chic apparel to statement accessories, we have everything you need to elevate your style. <br /> Shop with confidence knowing that your privacy and security are our top priorities. Our website employs state-of-the-art encryption to safeguard your personal information, providing a worry-free online shopping experience.</p>
            <br />
            <button className="Shopbtn" ><b>Shop Now</b></button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12" ><br /><br />
            <img src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-80 w-100" classNameName=" img-fluid" alt="" />
          </div>

        </div>
      </div>

      {/* .................. */}


      <br /><br /><br />

{/* <FeatureProduct /> */}

      <br /><br /><br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>What We Offer!</h1>
            <p>The Purpose Of Online Shopping Center</p>

          </div>

        </div>

      </div>
      <br /><br />
      <div className="container px-4">
        <div className="row gx-4 ">
          <div className="col-lg-3 col-md-6 col-sm-12 "   >
            <div className="p-3 border mb-3  bg-light border-dark border-4 border-top-0 border-end-0 border-start-0" id="row2" >
              <br />
              <FontAwesomeIcon icon={faTruckFast} size="2x" style={{ color: "" }} />
              <br />
              <p>Super Fast and Free Deleivery</p>
              <br />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 "  >
            <div className="p-3 border mb-3  bg-light border-dark border-4 border-top-0 border-end-0 border-start-0" id="row2" >
              <br />
              <FontAwesomeIcon icon={faShieldHalved} size="2x" style={{ color: "" }} />
              <br />
              <br />
              <p>Non-contact Shipping</p>
              <br />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 "  >
            <div className="p-3 border mb-3 border-dark border-4 border-top-0 border-end-0 border-start-0 bg-light" id="row2" >
              <br />
              <FontAwesomeIcon icon={faAnchor} size="2x" style={{ color: "" }} />
              <br />
              <br />
              <p>Super Secure Payment</p>
              <br />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 "  >
            <div className="p-3 border mb-3 border-dark border-4 border-top-0 border-end-0 border-start-0 bg-light" id="row2" >
              <br />
              <FontAwesomeIcon icon={faAward} size="2x" style={{ color: "" }} />
              <br />
              <br />
              <p>Money-Back Guarenteed</p>
              <br />
            </div>
          </div>
        </div>
      </div>


      <br /><br /> <br /><br />

      <div className="container">
        <div className="row" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <br />
          <div className="col-lg-6 col-md-12 col-sm-12" ><br /><br />
            <img src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-80 w-100" classNameName=" img-fluid" alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12" > <br />
            <h1>New Features of Trending Products</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <hr />
            <p>All the Lorem Ipsum generators on the Internet tend.</p>
            <hr />
            <p>There are many variations of passages of Lorem Ipsum available.</p>
            <hr />
            <p>There are many variations of passages available.</p>
            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" id="btn1" class="btn  gx-2">Buy Now</button>
                <button type="button" id="btn2" class="btn  gy-2 ms-3">View Detail</button>

              </div>
            </div>
            <br /><br />
          </div>

        </div>
      </div>


      <br /><br />
<br /><br /><br />


<div className="container-fluid">
  <div className="row">
<div className="col text-center" id="one"><br /><br /><br /><br />
<h1><b>Get Latest Update by <br />
Subscribe Our Newslater</b></h1>

<div className="row">
  <div className="col-3 ">

  </div>
  <div className="col-sm-12 col-md-12 col-lg-6 "><br />
  <div class="input-group mb-3 ">
 <br />
  <input type="text" style={{border:"2px solid black",backgroundColor:"transparent",borderRadius:"0px",padding:"10px 25px"}} class="form-control" placeholder="Email" aria-label="" aria-describedby="basic-addon1"/>
</div>
<button type="button" id="subscribebtn"  class=" btn-lg btn-block">Subscribe</button>
<br /><br /><br /><br /><br />

</div>
<div className="col-3">

</div>

</div>

</div>
  </div>

</div>






      {/* ....................................... */}
      <br /><br /> <br /><br />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="Companies"><b>Trusted By 100+ Companies</b></h1>
          </div>
        </div>
      </div>
      <br /><br />






      <div className="container px-4">
        <div className="row gx-3 ">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faFacebookF} />&nbsp;&nbsp; <span>Facebook</span></div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faSnapchat} />&nbsp;&nbsp; <span>Snapchat</span></div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faMicrosoft} />&nbsp;&nbsp; <span>Microsoft</span></div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp; <span>Linkdin</span></div>
          </div>
        </div>

        <div className="row gx-3">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp; <span>Instagram</span>
            </div>

          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faSpotify} />&nbsp;&nbsp; <span>Spotify</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faWhatsapp} />&nbsp;&nbsp; <span>Whatsapp</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp; <span>Twitter</span>
            </div>
          </div>

        </div>
      </div>

      <br /><br /> <br />





    </>
  )
}
export default Home

