import shuffle from '../configs/shuffle';
import { p4 } from "../../images/index";

/************************** Header Data *************************/ 
const headerData = {
  bgImage: p4, 
  title: "Featured Portfolio",
  date: "2017 - Present",
  desc: "This is my Gallery",
  style: ""
};

const MAX_IMAGES = 35; // Define constant for max images

const loadImages = async (category) => {
  const images = [];
  for (let i = 1; i <= MAX_IMAGES; i++) {
    try {
      const module = await import(/* @vite-ignore */ `../../images/${category}/${i}.jpg`);
      images.push({
        src: module.default, 
        thumbnail: module.default, 
        caption: '', 
        category: [category]
      });
    } catch (error) {
      console.error(`Error loading ${category} image ${i}:`, error); 
    }
  }
  return images;
};

const featuredImages = [1, 3, 4, 6, 8, 14, 21, 26, 27, 28, 31, 35]; 

const addFeaturedMarker = (images) => {
  return images.map((image, index) => {
    if (featuredImages.includes(index + 1)) {
      image.category.push('*');
    }
    return image;
  });
};

const [eventsArray, portraitsArray, partyArray] = await Promise.all([
  loadImages('events'),
  loadImages('portraits'),
  loadImages('party'),
]);

const allImages = [
  ...addFeaturedMarker(eventsArray),
  ...addFeaturedMarker(portraitsArray),
  ...addFeaturedMarker(partyArray),
];

const imageArray = shuffle(allImages);

const projectData = {
  imageArray,
  projectHeader: headerData,
};

export default projectData;
