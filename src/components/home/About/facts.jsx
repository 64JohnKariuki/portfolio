import React, { useEffect } from "react";
import AOS from 'aos'; // Import AOS

const Facts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

    // Initialize PureCounter
    
  }, []);

  return (
    <>
      {/* -- ======= Facts Section ======= -- */}
      <section id="facts">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              {/* -- Heading -- */}
              <h2 className="mb-2">Facts</h2>

              {/* -- Subheading -- */}
              <p className="mb-6">
                These are our stats.
              </p>
            </div>
          </div>

          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              >232</span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="421"
                data-purecounter-duration="1"
                className="purecounter"
              >421</span>
              <p>Projects</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1364"
                data-purecounter-duration="1"
                className="purecounter"
              >1364</span>
              <p>Hours Of Support</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="38"
                data-purecounter-duration="1"
                className="purecounter"
              >38</span>
              <p>Hard Workers</p>
            </div>
          </div>

          <div className="facts-img">
            <img src="assets/img/facts-img.png" alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* -- End Facts Section -- */}
    </>
  );
};

export default Facts;