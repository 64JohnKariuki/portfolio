import React from "react";

const Testimonial = () => {
    return (
      <>
        {/* -- TESTIMONIALS  -- */}
        <div className="py-7 py-md-9 border-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 text-center">
                {/* -- Heading  -- */}
                <h2 className="mb-2">What clients say about us</h2>
    
                {/* -- Subheading  -- */}
                <p className="mb-6">
                  We have the besst clients.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* -- Slider  -- */}
                <div data-flickity=''>
                  <div className="w-100">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-8 col-md-3 order-md-1">
                        {/* -- Avatar  -- */}
                        <img
                          className="img-fluid rounded-circle mb-5 mb-md-0"
                          src="assets/img/about2.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7 order-md-0">
                        {/* -- Blockquote  -- */}
                        <figure className="mx-auto mb-0 max-w-500">
                          <blockquote className="blockquote mb-0">
                            <p className="font-serif text-black mb-5">
                            "Exceptional technical and design skills — with the added bonus of being extremely kind, patient, and customer focused!"
                            </p>
                          </blockquote>
                          <figcaption className="blockquote-footer text-xs mb-0">
                            Erick
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-8 col-md-3 order-md-1">
                        {/* -- Avatar  -- */}
                        <img
                          className="img-fluid rounded-circle mb-5 mb-md-0"
                          src="assets/img/home2.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7 order-md-0">
                        {/* -- Blockquote  -- */}
                        <figure className="mx-auto mb-0 max-w-500">
                          <blockquote className="blockquote mb-0">
                            <p className="font-serif text-black mb-5">
                            "I'm absolutely blown away.
                            Exactly what I was hoping for, but even better!"
                            </p>
                          </blockquote>
                          <figcaption className="blockquote-footer text-xs mb-0">
                            Nancy
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-8 col-md-3 order-md-1">
                        {/* -- Avatar  -- */}
                        <img
                          className="img-fluid rounded-circle mb-5 mb-md-0"
                          src="assets/img/home1.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7 order-md-0">
                        {/* -- Blockquote  -- */}
                        <figure className="mx-auto mb-0 max-w-500">
                          <blockquote className="blockquote mb-0">
                            <p className="font-serif text-black mb-5">
                            "It was as if John read my mind.
                            Clarity, function, clear direction, and a boutique quality."
                            </p>
                          </blockquote>
                          <figcaption className="blockquote-footer text-xs mb-0">
                            Leah
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
};
export default Testimonial;