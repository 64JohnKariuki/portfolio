import React, { useEffect } from "react";
import Swiper from "swiper";

const Hero = () => {

  const bg1 = "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg";

  useEffect(() => {
    // Initialize Swiper
    Swiper.use([]);
    new Swiper(".swiper-container", {
      // loop: true, This is crucial for the loop mode
      // slidesPerView: 3, Adjust this value
      // slidesPerGroup: 3, Adjust this value
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

return (
    <>
     {/* -- HERO SECTION  -- */}
     
    <header
      className="swiper-container hero-slider section section-top section-full"
      data-parallax="scroll"
    >
      <div className="swiper-wrapper">
        {/* -- Slide 1 -- */}
        <div
            className="swiper-slide d-flex flex-column min-vh-100 bg-black-50 pt-10 pt-md-8 pb-7 pb-md-0"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          <div className="container my-auto">
            <div className="row justify-content-left">
              <div className="col-12 col-md-8 col-lg-6 text-center">
                {/* -- Preheading -- */}
                <h6 className="text-xs text-white-75">
                  La<span className="text-primary">Unit</span> / Creatives
                </h6>
                {/* -- Heading -- */}
                <h1 className="display-1 text-white mb-4">Launit</h1>
                {/* -- Subheading -- */}
                <p className="text-center text-white-75 mb-7">
                  A unique café located in the heart of Los Angeles. Always
                  fresh coffee and biscuits. Open for indoor dining and to-go
                  orders.
                </p>
                {/* -- Button -- */}
                <a
                  className="btn btn-outline-primary text-white text-primary-hover mb-7 mb-md-0"
                  href="#reservation"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* -- Add more slides as needed -- */}
      </div>
      {/* -- Add Pagination -- */}
      <div className="swiper-footer">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="swiper-pagination overflow-x-hidden"></div>
            </div>
            {/* -- Add Navigation -- */}
            <div className="col-lg-6 text-right">
              <div className="swiper-navigation">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* -- End Hero Section -- */}
    </>
);
}
export default Hero;