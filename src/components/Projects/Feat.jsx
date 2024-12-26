import shuffle from '../configs/shuffle';
import { p4 } from "../../images/index";

/************************** Header Data *************************/ 
const headerData = {
  bgImage: p4, // Portfolio_Header
  title: "Featured Portfolio",
  date: "2017 - Present",
  desc: "This is my Gallery",
  style: ""
};

/************************** Helper Functions *************************/

let imageArray = [];

// Helper function to generate image objects dynamically
const getData = async (category, count, featured) => {
  const imageArray = [];
  for (let i = 1; i <= count; i++) {
    const image = await import(`../../images/${category}/${i}.jpg`);
    const obj = {
      src: image, // Access the default export
      thumbnail: image,
      caption: '',
      category: [category],
    };

    if (featured.includes(i)) {
      obj.category.push('*');
    }

    imageArray.push(obj);
  }
  return imageArray;
};

// Function to load all image categories
const loadImages = async () => {
  try {
    const graduationArray = await getData('graduation', 5, [1, 2, 5]);
    const peopleArray = await getData('people', 10, [1, 2, 5, 7, 9, 10]);
    const partyArray = await getData('party', 10, [1, 2, 5, 7, 9, 10]);

    /* Combine and Shuffle Arrays */
    if (!graduationArray.length || !peopleArray.length || !partyArray.length) {
      console.log("Error, No images fetched for any category.");
    } else {
      imageArray = [
        ...shuffle(graduationArray),
        ...shuffle(peopleArray),
        ...shuffle(partyArray),
      ];
    }

    // Ensure imageArray is set in the state or context if needed
    return imageArray;
  } catch (error) {
    console.error("Error loading images:", error);
    throw error;
  }
};

/************************** Export Data *************************/

// Export a function that returns the project data dynamically
export const projectData = async () => {
  const imageArray = await loadImages();
  return {
    imageArray,
    projectHeader: headerData,
  };
};

export default projectData;
