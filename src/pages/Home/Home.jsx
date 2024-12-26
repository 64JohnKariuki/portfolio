import React, { useEffect } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Hero from "../../components/home/Hero/hero";
import Carousel from "../../components/home/Hero/CarouselIntro";
import Discover from "../../components/home/Discover/discover";
import About from "../../components/home/About/about";
import Facts from "../../components/home/About/facts";
import Testimonial from "../../components/home/Footer/Testimonial";
import NewsLetter from "../../components/home/Footer/NewsLetter";
import GalleryContainer from '../../components/GalleryContainer';
import ProjectContainer from '../../components/Projects/ProjectContainer';
import LazyLoad from 'react-lazy-load';
import ResponsiveGallery from "../../components/ResponsiveGallery";
import Photos from '../../components/Projects/Photos';
import Featured from '../../components/Projects/Featured';
import Feat from '../../components/Projects/Feat';
import All_Projects from "../../components/Projects/All_Projects";

const Home = () => {
  
  useEffect(() => {
    window.scroll({
      top: 0.5,
      behavior: "smooth"
    });
    console.log("HOME SCROLL_______Did Mount"); 
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
    console.log("HOME SCROLL_______");
  });

  return (
    <div>
      <ScrollAnimation delay={700} animateIn="fadeIn">
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation delay={700} animateIn="fadeIn">
        <Discover />
      </ScrollAnimation>

      <About />

      <Facts />

      {/* -- PROJECTS -- */}
      <div id="section2">
          <ScrollAnimation animateIn="fadeIn">
              <ProjectContainer
                  showFilter={true}
                  imageArray={All_Projects.imageArray}
                  headerInfo={All_Projects.projectHeader}
                  renderType="allprojects"
                  // SHOW SMALLER MARGINS FOR GALLERY
              // style={"container containerMarginTopFeature"}
              />
          </ScrollAnimation>
      </div>
      
      {/* -- GALLERY -- */}
      <div id="section2">
          <ScrollAnimation animateIn="fadeIn">
              <ProjectContainer
                  showFilter={true}
                  imageArray={Featured.imageArray}
                  headerInfo={Featured.projectHeader}
                  renderType="feature"
                  // SHOW SMALLER MARGINS FOR GALLERY
              // style={"container containerMarginTopFeature"}
              />
          </ScrollAnimation>
      </div>

      {/* -- GALLERY  -- */}
      <div className="py-7 py-md-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h2 className="mb-2">Our Gallery</h2>
              <p className="mb-6">
                Our work over the years.
              </p>
            </div>
          </div>
          <div className="row gx-3">
            Gallery
          </div>
        </div>
      </div>

      <Testimonial />

      <NewsLetter/>
    </div>
    );
  }
  
  export default Home;
  