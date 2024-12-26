import React, { useState, useEffect } from 'react';
import Lightbox from 'react-images';
import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazy-load';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import shuffle from './configs/shuffle';
import ReactGA from 'react-ga';

function trackGA(action) {
  console.log("clicked Action: ", action);
  ReactGA.event({
    category: 'Clicked: ' + action,
    action: 'Clicked Portfolio Image/Filter ' + action,
  });
}

const ResponsiveGallery = ({ location = { pathname: '/' }, images = [], showFilter }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [showFilterState, setShowFilter] = useState(showFilter);

  useEffect(() => {
    if (!Array.isArray(images) || images.length === 0) {
      console.warn('Images array is empty or not defined:', images);
      // Handle empty image array gracefully (e.g., display a message)
      setImageArray([]); 
      return; 
    }

    console.table('Images loaded:', images);

    if (location.pathname === '/') {
      const featArray = images.filter((img) => img.category.includes('*'));
      setImageArray(shuffle(featArray));
    } else {
      setImageArray(images);
    }
  }, [images, location.pathname, showFilter]);

  useEffect(() => {
    if (!showFilterState) {
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [showFilterState]);

  const cursorStyle = { cursor: "pointer" };

  // Lightbox Handlers
  const openLightbox = (index, event) => {
    trackGA("clicked_image: " + index);
    event.preventDefault();
    setCurrentImage(index);
    setLightboxIsOpen();
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage((prev) => Math.max(prev - 1, 0));
  };

  const gotoNext = () => {
    if (currentImage + 1 < imageArray.length) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const gotoImage = (index) => {
    setCurrentImage(index);
  };

  const handleClickImage = () => {
    if (currentImage !== imageArray.length - 1) {
      gotoNext();
    }
  };

  // Filter Images
  const filterImage = (filter) => {
    trackGA(filter);

    if (filter === "*") {
      setImageArray(shuffle(images));
    } else {
      const filteredImages = images.filter((img) =>
        img.category.includes(filter)
      );
      setImageArray(filteredImages);
    }
  };

  const renderGallery = (images) => {
    if (!images || images.length === 0) {
      return (
        <p>No images available to display.</p>
      );
    }

    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1.5px">
          {images.map((obj, i) => (
            <LazyLoad key={i}>
              <ScrollAnimation delay={i * 15} animateIn="fadeIn" animateOnce>
                <div
                  className={`view overlay zoom ${obj.category}`}
                  data-category={obj.category}
                >
                  <img
                    alt=""
                    src={obj.src}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    onClick={(e) => openLightbox(i, e)}
                  />
                  <div
                    style={cursorStyle}
                    className="mask flex-center rgba-white-light"
                    onClick={(e) => openLightbox(i, e)}
                  />
                </div>
              </ScrollAnimation>
            </LazyLoad>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  };

  const renderFilter = (showFilter) => {
    const cursorStyle = { cursor: "pointer" };
    if (showFilter) {
      return (
        <Tabs id="Tab" defaultTab="one" className="GalleryContainer">
          <TabList className="TabList" style={{ border: 'none', margin: '0em 0 1em 0em' }}>
            <Tab style={cursorStyle} tabFor="one" onClick={() => filterImage("*")}>Featured</Tab>
            <Tab style={cursorStyle} tabFor="two" onClick={() => filterImage("travel")}>Travel</Tab>
            <Tab style={cursorStyle} tabFor="three" onClick={() => filterImage("ppl")}>People</Tab>
            <Tab style={cursorStyle} tabFor="four" onClick={() => filterImage("urb")}>Urban & Street</Tab>
            <Tab style={cursorStyle} tabFor="five" onClick={() => filterImage("wed")}>Weddings</Tab>
            <Tab style={cursorStyle} tabFor="six" onClick={() => filterImage("concert")}>Concert</Tab>
            {/* <Tab style={this.cursorStyle} tabFor="six" onClick={() => this.filterImage("all")}>All</Tab> */}
            <Tab tabFor="sevon">
              <Dropdown>
                <DropdownToggle className="brand colorBlackLink" nav caret>Projects</DropdownToggle>
                <DropdownMenu>
                  <NavbarNav>
                    <NavItem className="nav-format">
                      <NavLink className="brand nav-format" to="/projects">All Projects</NavLink>
                      {/* <NavLink className="brand nav-format" to="/laurenlychee"> > Lauren Lychee</NavLink> */}
                    </NavItem>
                  </NavbarNav>
                </DropdownMenu>
              </Dropdown>
            </Tab>
          </TabList>
        </Tabs>
      );
    }
  };


  // Initialization and cleanup
  useEffect(() => {
    const initializeImages = () => {
      if (location.pathname === '/') {
        const featArray = images.filter((img) => img.category.includes('*'));
        setImageArray(shuffle(featArray));
      } else {
        setImageArray(images);
      }
    };

    initializeImages();

    if (!showFilter) {
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [images, location.pathname, showFilter]);

  return (
    <div className="content page-section spad center">
      {renderFilter(showFilter)}
      {renderGallery(imageArray)}

      {imageArray && imageArray.length > 0 ? (
        <Lightbox
          currentImage={currentImage}
          images={imageArray}
          isOpen={lightboxIsOpen}
          onClickImage={handleClickImage}
          onClickNext={gotoNext}
          onClickPrev={gotoPrevious}
          onClickThumbnail={gotoImage}
          onClose={closeLightbox}
          showThumbnails={true}
          backdropClosesModal
          width={2048}
        />
      ) : (
        <p>No images available to display</p>
      )}

    </div>
  );
};

ResponsiveGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showFilter: PropTypes.bool,
  location: PropTypes.object.isRequired,
  theme: PropTypes.object,
};

export default ResponsiveGallery;