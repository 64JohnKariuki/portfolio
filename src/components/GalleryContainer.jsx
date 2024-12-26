import React, { useEffect, useState } from 'react';

//Import responsive gallery component 
import ResponsiveGallery from './ResponsiveGallery';
//import DEFAULT_IMAGES from './Images';

import { View } from 'mdbreact'

export default function GalleryContainer(props) {
  const [galleryState, setGalleryState] = useState({
    imageArray: [],
    title: "",
    desc: "",
    showFilter: true,
    style: "",
  });

  useEffect(() => {
    setGalleryState({
      imageArray,
      title,
      desc,
      showFilter,
      style,
    });
  }, props);

  const { imageArray, showFilter, style } = galleryState;
    // console.log("Temp: " + JSON.stringify(DEFAULT_IMAGES));
    return (
      <div>
        {/* Remove Container if you want entire page gallery */}
        <View id="GalleryContainer" className={ style }>
          <section id="gallery">
            <ResponsiveGallery showFilter={showFilter} images={imageArray}/>
          </section>
        </View>

      </div>
    )
  }
