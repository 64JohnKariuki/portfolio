import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectTemplate from '../../components/Projects/ProjectTemplate';
import { connect, useDispatch, useSelector } from "react-redux";
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectContainer from '../../components/Projects/ProjectContainer'
import Featured from '../../components/Projects/Featured';
import LazyLoad from 'react-lazy-load';

const galleryImages = [
  { id: 1, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg", alt: "About 1" },
  { id: 2, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image3.jpg", alt: "Home 2" },
  { id: 3, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image1.jpg", alt: "Place 3" },
  { id: 4, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image5.jpg", alt: "Fashion" },
  { id: 5, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image3.jpg", alt: "About 2" },
  { id: 6, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image1.jpg", alt: "Corporate" },
  { id: 7, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image5.jpg", alt: "Discover 1" },
  { id: 8, src: "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg", alt: "Discover 2" },
];

const Gallery = () => {
  const [images, setImages] = useState([]);

  // Fetch or retrieve Featured images (assuming `Featured` provides them)
  useEffect(() => {
    if (Featured.hasOwnProperty('imageArray')) { // Check if `Featured` has `imageArray`
      setImages(Featured.imageArray);
    } else {
      // Handle case where Featured doesn't provide images
      console.warn('Featured component does not provide imageArray');
    }
  }, []); // Empty dependency array to run only once

  const renderGallery = (images) => {
    if (!images || images.length === 0) return null;
    console.table(images)

    const gallery = images.map((obj, i) => (
      <LazyLoad key={i}>
        <div className={`view overlay zoom ${obj.category}`} data-category={obj.category}>
          <img
            alt=""
            src={obj.src}
            style={{ width: "100%", height: "auto", display: "block" }}
            onClick={() => trackGA("image: " + i)}
          />
          <div className="mask flex-center rgba-white-light" onClick={(e) => openLightbox(i, e)} />
        </div>
      </LazyLoad>
    ));

    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1.5px">
          {gallery}
        </Masonry>
      </ResponsiveMasonry>
    );
  };

  return (
    <div>
      {/* Remove Container if you want entire page gallery */}
      {renderGallery(images)}
      
    </div>
  );
};

export default Gallery;

