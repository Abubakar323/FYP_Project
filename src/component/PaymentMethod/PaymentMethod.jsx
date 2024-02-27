import React from "react";

function PaymentMethod() {
    return (
        <><br /><br /><br />
            <h1 className="text-center" style={{ fontSize: "35px" }}> <b>Payment Method</b> </h1>
            <br />
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="p-3 border bg-light">
                            <br />
                            <form>
                                <p style={{ fontSize: "25px" }}><b>Credit / Debit Card</b></p><hr /><br />

                                <div class="row ">
                                    <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                                        <input type="number" class="form-control bg-light" placeholder="Card Number" style={{ border: "2px solid black", borderRadius: "0px", padding: "10px 20px" }} />
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <input type="text" class="form-control bg-light" placeholder="Name on Card" style={{ border: "2px solid black", borderRadius: "0px", padding: "10px 20px" }} />
                                    </div>
                                </div><br />
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                                        <input type="email" class="form-control bg-light" placeholder="Validity (MM/YY)" style={{ border: "2px solid black", borderRadius: "0px", padding: "10px 20px" }} />
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <input type="number" class="form-control bg-light" placeholder="CCV" style={{ border: "2px solid black", borderRadius: "0px", padding: "10px 20px" }} />
                                    </div>
                                </div>
                                <br />
                            </form>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-center">
                                    <button style={{ backgroundColor: "black", padding: "10px 90px", color: "white" }} type="button">Pay Now</button>

                                </div>

                            </div>
                            <br /> <br />
                            <h3 className="text-center" style={{ fontFamily: "allura" }}>OR</h3>
                            <br />
                            <p style={{ fontSize: "25px" }}><b>Cash On Delivery</b></p><hr /><br />
                            <p className="text-center">I would like to pay after product delivery</p><br /><br />
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-center">
                                    <button style={{ backgroundColor: "black", padding: "10px 90px", color: "white" }} type="button">Place Order</button>

                                </div>

                            </div>
                            <br />

                        </div>
                    </div>
                    <div class="col-lg-4 col-d-12 col-sm-12">
                        <div class="p-3 border bg-light">
                            <br />
                            <div className="row gx-3">
                                <div className="col">
                                    <p style={{ fontSize: "25px" }}><b>Order Summary</b></p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col">
                                    <p>Bag Total</p>
                                </div>
                                <div className="col text-center">
                                    <p>value</p>
                                </div>
                            </div>
                            <hr /><br />
                            <div className="row">
                                <div className="col">
                                    <p>Bag discount</p>
                                </div>
                                <div className="col text-center">
                                    <p>value</p>
                                </div>
                            </div>
                            <hr /><br />
                            <div className="row">
                                <div className="col">
                                    <p>Delivery</p>
                                </div>
                                <div className="col text-center">
                                    <p>Value</p>
                                </div>
                            </div>
                            <hr /><br />
                            <div className="row">
                                <div className="col">
                                    <p><b>Total Amount</b></p>
                                </div>
                                <div className="col text-center">
                                    <p>value</p>
                                </div>
                                <hr />
                            </div><br /><br />


                        </div>

                    </div>
                </div>
            </div>
<br /><br />
        </>
    )
}
export default PaymentMethod