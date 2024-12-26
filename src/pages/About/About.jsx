import React, { useState} from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value || '');
  };
  
  return (
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
                Featured on:
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
      
      <div>Web-design & consulting services
        <span>for photographers</span>
        <p>Want to be hired as an expert photographer? Then you need to hire an expert web-designer.
        Let's work together to build a killer website for your photography business.</p>
      </div>
      <div>
      <title>Complete web-design services</title>
      <p>Get noticed & sell more work with my affordable and effective design & development services. I'll help you build or improve your online photography presence, regardless if you're an amateur photographer just starting out, or a large photo agency looking to better target your audience. Anything from full website redesigns to SEO reviews & maintenance.</p>
      <button>button</button>
      </div>
      {/* -- NEWSLETTER  -- */}
      <div className="py-7 py-md-9 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              {/* -- Heading  -- */}
              <h2 className="mb-2">Newsletter</h2>
  
              {/* -- Subheading  -- */}
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
                illo praesentium sequi in cum, beatae maiores quae qui.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* -- Begin Mailchimp Signup Form  -- */}
              <div id="mc_embed_signup">
                <form
                  action="https://gmail.us6.list-manage.com/subscribe/post?u=c7b7808bb5a16b9f09c4e1fe0&amp;id=96b8442f9a"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div
                    className="row justify-content-center gx-3"
                    id="mc_embed_signup_scroll"
                  >
                    <div className="col">
                      <label className="visually-hidden" for="mce-EMAIL"
                        >Email Address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        value={inputValue}
                        onChange={handleInputChange}
                        name="EMAIL"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div className="visually-hidden" id="mce-responses">
                      <div
                        className="response d-none"
                        id="mce-error-response"
                      ></div>
                      <div
                        className="response d-none"
                        id="mce-success-response"
                      ></div>
                    </div>
                    {/* -- real people should not fill this in and expect good things - do not remove this or risk form bot signups -- */}
                    <div className="absolute"
                      aria-hidden=""
                    >
                      <input
                        type="text"
                        name="b_c7b7808bb5a16b9f09c4e1fe0_96b8442f9a"
                        tabindex="-1"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-auto">
                      <input
                        className="btn btn-outline-primary"
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/* --End mc_embed_signup -- */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>John is a really solid designer that I have the opportunity to work & collaborate with on a regular basis. Specialized in tweaking photographer websites, he has a great understanding of WordPress, is fast, reliable, fair and communicative. Really impressed by how fast he works btw.</p>
        <p>John is one of the nicest guys and an absolute whiz when it comes to IT. There is a ton of information John shares that can be immediately implemented to improve the effectiveness of your website with some simple changes. It's worthwhile subscribing to his email updates - always full of great info.</p>
        <p>If you wanna see a guy that's at the cutting edge of building websites for photographers, he is it.
        And he's got some great content on his website as well.</p>
        <p>If you are a photographer and looking for help in building a killer, responsive website - look no further! The best here! John is a custom website builder that understands photographers.
        And nice job on this newsletter - so much interesting content, it got my head spinning.</p>

      </div>
    </>
  );
};

export default About;
