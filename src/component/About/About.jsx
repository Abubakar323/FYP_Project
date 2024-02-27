import React from "react";
import img from '../../images/two.jpg'
// import img2 from '../../images/one.jpg'
import img2 from '../../images/One.jpg'
import img3 from '../../images/mobile.jpg'
import perfume from '../../images/perfume.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { useProductContext } from "../../context/ProductContext";


export default function About() {
    // const{myName}=useProductContext()
    return (
        <>
            <br /><br /><br /><br />
            {/* {myName} */}

            <div class="container" >
                <div class="row">
                    <div class="col text-center" style={{ marginTop: "80px;" }}>
                        <h1><b>JOURNEY START FROM</b></h1><br />
                        <p>
                            Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                            "pain itself."                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                            visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                            "pain itself."</p>
                        <br /><br />
                        <img src={img} class="image-fluid" width="100%" alt="" />
                    </div>
                </div>
            </div>

            <div class="container" >
        <div class="row">
        <div class="col text-center" style={{marginTop: "80px;"}}> <br /><br />
                <h1><b>2022</b></h1><br/>
                <p>
                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                    visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                    "pain itself."                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                    visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                    "pain itself."</p>
                    <br/><br/>

                    <video src={perfume} controls className="h-60 w-100"></video>
            </div>
        </div>
    </div>

    <br /><br /> <br />
<br />

    <div class="container-fluid">
        <div class="row" >
          <div class="col-sm-12 col-md-6 col-lg-4  mt-4 mb-3" > <br /><br />
          <FontAwesomeIcon icon={faInstagram} style={{fontSize:"70px"}}/>
          <br /><br /><h1><b>GET INSPIRED WITH INSTAGRAM</b></h1><br />
            <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or
                visual presentation.</p><br />
                <a href="" style={{backgroundColor:"black",color:"white",padding:"10px 25px ",borderRadius:"50px",textDecoration:"none"}}>DISCOVER MORE</a>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4  mt-4 mb-3 " >
              <img src={img2} width="100%" height="100%" alt=""/>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 mb-3 mt-4">
              <img src={img3} width="90%" height="100%" alt=""/>
          </div>
        </div>
      </div>
 <br /><br />
        </>
    );
}