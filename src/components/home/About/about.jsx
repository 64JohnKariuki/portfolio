import React, { useState } from "react";

const about = () => {

    return(
      <>
        {/* -- ======= Our Clients Section =======  -- */}
        <div id="clients" className="py-7 py-md-9 border-bottom">
          <div className="container" data-aos="zoom-in">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 text-center">
                {/* -- Heading  -- */}
                <h2 className="mb-2">Our Clients</h2>
    
                {/* -- Subheading  -- */}
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* -- Slider  -- */}
                  <div
                    data-flickity=''
                  >
                    <div className="w-100">
                      <div
                        className="slider row align-items-center justify-content-center"
                      >
                        <div className="logos col-8 col-md-3 order-md-1">
                          <img
                            src="assets/img/sponsors1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="logos col-8 col-md-3 order-md-1">
                          <img
                            src="assets/img/sponsors2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="logos col-8 col-md-3 order-md-1">
                          <img
                            src="assets/img/sponsors3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="logos col-8 col-md-3 order-md-1">
                          <img
                            src="assets/img/sponsors4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="logos col-8 col-md-3 order-md-1">
                          <img
                            src="assets/img/sponsors5.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -- End Our Clients Section  -- */}
        <div className="container">
          <p className="mb-2">
            I am so proud of the achievements and the titles, 
            but more than that I'm incredibly grateful for all of 
            the memories and joy that my superhumans create for us and 
            many others... 

          </p>

          <p className="fs-lg lh-lg text-black mb-5 mb-md-0">
            Available for photography shoots in all of Kenya and beyond... 
          </p>

          <hr className="hr-sm bg-primary" />

          <p className="fs-lg lh-lg text-black mb-5 mb-md-0">
            Contact me for a quote.
          </p>
          <button>Request Quote</button>
        </div>
        
      </>
    )
};
export default about;