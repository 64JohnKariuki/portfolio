import {
  bg,

  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p9,

  pp1,
  pp2,
  pp3,
  pp4,
  pp5,
  pp6,
  pp7,
  pp8,

  g1,
  g2,
  g3 } from "../../images/index";

/************************** Header Data *************************/ 
const headerData = {
  bgImage: bg, //Portfolio_Header
  title: "photos",
  date: "2017 - Present",
  desc: "This is my Gallery",
  style: "featured-header-mobile"
};

{/************************** Gallery Data *************************/ }
let imageArray = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p9,

  pp1,
  pp2,
  pp3,
  pp4,
  pp5,
  pp6,
  pp7,
  pp8,

  g1,
  g2,
  g3,
];


{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: imageArray,
  projectHeader: headerData
}

export default projectData;
