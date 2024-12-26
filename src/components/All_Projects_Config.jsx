import { CONSTANT_EVENTS, CONSTANT_PARTY, CONSTANT_PORTRAITS } from './configs/constants';

import bg from "../images/backgrounds/bg.jpeg";

import party from "../images/party/pp1.jpg";
import party1 from "../images/party/pp2.jpg";
import party2 from "../images/party/pp3.jpg";
import party3 from "../images/party/pp4.jpg";
import party4 from "../images/party/pp5.jpg";
import party5 from "../images/party/pp6.jpg";
import party6 from "../images/party/pp7.jpg";

import people from "../images/portraits/p1.jpg";
import people1 from "../images/portraits/p2.jpg";
import people2 from "../images/portraits/p3.jpg";
import people3 from "../images/portraits/p4.jpg";
import people4 from "../images/portraits/p5.jpg";
import people5 from "../images/portraits/p6.jpg";
import people6 from "../images/portraits/p7.jpg";
import people7 from "../images/portraits/p8.jpg";

import graduation from "../images/events/g1.jpg";
import graduation1 from "../images/events/g2.jpg";
import graduation2 from "../images/events/g3.jpg";


{/************************** Header Data *************************/ }
const headerData = {
  bgImage: bg,
  title: "All Projects",
  date: "2018 - Present",
  desc: "Snapshots through the Years",
  // style: "TEST"
};

{/************************** Project Data *************************/ }

const imageArray = [
  {
    title: "Nina Sky",
    date: "September 2019",
    coverImage: party,
    thumbnail: party,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "dark",
    style: "ap-mobile-cover-Ninasky"
  }, {
    title: "New Orleans 2019",
    date: "February 2019",
    coverImage: graduation,
    link: "/graduation",
    category: CONSTANT_EVENTS,
    bannerStyle: "light"
  },
  {
    title: "Jeremy + Jessica's Proposal",
    date: "January 2019",
    coverImage: party1,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "dark"
  },
  {
    title: "Aymand + Amanda's Wedding",
    date: "January 2019",
    coverImage: party2,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "light"
  },
  {
    title: "Sister's Double Wedding",
    date: "December 2018",
    coverImage: party3,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "dark"
  },
  {
    title: "Ginger's 1st Halloween",
    date: "October 2018",
    coverImage: people,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "light"
  }, {
    title: "Antoine + Ayton Wedding",
    date: "October 2018",
    coverImage: party4,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "dark"
  }, {
    title: "Lauren and Lychee",
    date: "October 2018",
    coverImage: people1,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "light",
    style: "ap-mobile-cover-Lauren_Lychee"
  }, {
    title: "Urban San Francisco",
    date: "August 2018",
    coverImage: people2,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "dark"
  }, {
    title: "Sebastian + Becca Wedding",
    date: "August 2018",
    coverImage: party5,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "light"
  }, {
    title: "Suzzane's Graduation",
    date: "June 2018",
    coverImage: people3,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "dark"
  }, {
    title: "Lauren at the Pier",
    date: "May 2018",
    coverImage: people4,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "light"
  },
  // }, {
  //   title: "Europe 2018",
  //   date: "April-May 2018",
  //   coverImage: require('../images/2018_Europe/Europe-36.jpg'),
  //   link: "/europe_2018",
  //   category: CONSTANT_EVENTS,
  //   bannerStyle: "dark"
  // }, {
  {
    title: "March 4 Our Lives SF",
    date: "March 2018",
    coverImage: people5,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "light"
  }, {
    title: "Kristina at the Boardwalk",
    date: "November 2024",
    coverImage: people6,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "dark"
  }, {
    title: "Lilly's LinkedIn Headshots",
    date: "October 2024",
    coverImage: people7,
    link: "/portraits",
    category: CONSTANT_PORTRAITS,
    bannerStyle: "light",
    style: "ap-mobile-cover-Lilly_Linkedin"
  }, {
    title: "Yvonne + Jason Wedding",
    date: "September 2024",
    coverImage:  party6,
    link: "/party",
    category: CONSTANT_PARTY,
    bannerStyle: "dark"
  },
  // {
  //   title: "Brielle of Tarth",
  //   date: "May 1st, 2024",
  //   coverImage: require('../images/05.01.17_Brielle_of_Tarth/Brielle-cover.jpg'),
  //   link: "/brielle_of_tarth",
  //   bannerStyle: "light"
  // },
  {
    title: "South American Adventures",
    date: "Summer 2024",
    coverImage: graduation1,
    link: "/graduation",
    category: CONSTANT_EVENTS,
    bannerStyle: "light"
  },
  {
    title: "S.E.Asia Backpacking",
    date: "Spring 2024",
    coverImage: graduation2,
    link: "/graduation",
    category: CONSTANT_EVENTS,
    bannerStyle: "dark"
  }
];


{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: imageArray,
  projectHeader: headerData,
}

export default projectData;