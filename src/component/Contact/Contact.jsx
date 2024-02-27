import React from "react";




const Contact = () => {
    return (
        <>

<div class="container px-4">
  <div class="row gx-5">
    <div class="col-lg-12"><br /><br /><br /><br />
        <h1 style={{fontSize:"40px",textAlign:"center"}}> <b>Find Us Map </b> </h1><br />
        <hr />
     <div class="p-3 "><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27281.61740771713!2d72.33536000000001!3d31.270502399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1707851016003!5m2!1sen!2s"  style={{border:"0",height:"60vh",width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  </div>
</div>



        <br /><br /><br />
{/* <div class="container px-4">
  <div class="row gx-2" style={{padding:"20px"}}>
    <div class="col-2">
     <div class="p-3 "> </div>
    </div>
    <div class="col-lg-8 col-md-12 col-sm-12" style={{border:"2px solid black",borderRadius:"10px"}} >
      <div class="p-3 ">
      <div className="card mt-2 "style={{border:"none"}}>

    <div className="row" >
        <div className="col text-center">
            <h2 style={{fontSize:"30px"}}>  <b>Contact Us</b></h2>
        </div>
    </div>
    <br />
    <form>

        <div className="row mt-5">
            <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputEmail1" class="form-label"><b>First Name:</b></label>
                <input type="text" className="form-control"  placeholder=" Enter First Name" name="FirstName" />
            </div>
            <div className="col-12 col-md-6">
                <label for="exampleInputEmail1" class="form-label"><b>Second Name:</b></label>
                <input type="text" className="form-control"  placeholder=" Enter Second Name" name="secondName" />
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputEmail1" class="form-label"><b>Email:</b></label>
                <input type="email" className="form-control"  placeholder=" Enter Email" name="title" />
            </div>
            <div className="col-12 col-md-6">
                <label for="exampleInputEmail1" class="form-label"><b>Password:</b></label>

                <input type="password" className="form-control"  placeholder=" Enter Passwoard" name="location" />
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputEmail1" class="form-label"><b>Phone:</b></label>
                <input type="text" className="form-control"  placeholder=" Enter Phone Number" name="phone" />
            </div>

            <div className="col-12 col-md-6">
                <label for="exampleInputEmail1" class="form-label"><b>Gender:</b></label>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>


            </div>
        </div>


        <div className="row mt-5 mb-4">
            <div className="col-12 ">
                <textarea className="form-control" name="description"  placeholder="Description" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>

        <div className="row mt-3 mb-3 " >
            <div className="col d-flex align-items-center justify-content-center" >
                <button className="btn btn-danger w-50" >Submit</button>
                <br /> <br />
            </div>
        </div>
    </form>


</div>
</div>



      </div>
    </div>
    <div class="col-2">
      <div class="p-3 "></div>
    </div>
  </div>
 */}



<div class="container ">
    <div class="row ">
        <div class="col-sm-12 col-md-12 col-lg-12 " id="col1">
            <h1 className="text-center"><b>Get in Touch</b></h1>
            <hr /><br />
            <div class="form-group ">

                <textarea class="form-control rounded-0" placeholder="Enter Message" id="exampleFormControlTextarea1" rows="8"></textarea>
              </div>
              <form class="row g-3 mt-3">
                <div class="col-md-6 ">
                  <input type="text" placeholder="Enter Your Name" class="form-control rounded-0" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                  <input type="email"placeholder="Enter Your Email" class="form-control rounded-0" id="inputPassword4"/>
                </div>
                <div class="col-12 ">
                  <input type="text" class="form-control rounded-0 mt-2" id="inputAddress" placeholder="Enter Subject"/>
                </div>
              </form> <br/>
              {/* <a href="" className=" w-30" id="btn" style={{backgroundColor:"black",padding:"10px 25px ",borderRadius:"50px",color:"white",textDecoration:"none"}} >SEND</a>
                       */}
              <div class="d-grid gap-2 col-6 mx-auto">
  <button style={{backgroundColor:"black",color:"white",border:"none" ,padding:"10px 25px",borderRadius:"50px"}} type="button">Button</button>

</div>
              <br /><br /><br />     
        </div> 
       
      </div>

</div>



        </>
    )
}
export default Contact;













