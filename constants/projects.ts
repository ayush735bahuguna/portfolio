import { StaticImageData } from "next/image";
import { TECH } from "./tech";

import project1 from "@/app/assets/projects/MERN notes.png";
import project2 from "@/app/assets/projects/Magic-pictures.png";
import project3 from "@/app/assets/projects/Nextjs notes.png";
import project5 from "@/app/assets/projects/movie-adda.png";
import project7 from "@/app/assets/projects/Event website.png";
import project9 from "@/app/assets/projects/Google form.png";
import project10 from "@/app/assets/projects/auth.png";
import project11 from "@/app/assets/projects/wallywals.png";
import project12 from "@/app/assets/projects/food recipie.png";
import BLEImage from "@/app/assets/BLE.png";
import SocialMediaImage from "@/app/assets/Social media.png";

import SplitzyImage from "@/app/assets/splitzy.png";
import OverShareImage from "@/app/assets/overshare.png";
import Feed4MeImage from "@/app/assets/FEED4ME.png";

export interface Project {
  Name: string;
  Description: string;
  imgUrl: StaticImageData | string | any;
  liveLink?: string;
  caseStudy?: string;
  GithubLink?: string;
  Technologies: { name: string; link: string }[];
}

export const PROJECTS: Project[] = [
  {
    Name: "BLE Connect",
    Description:
      "A mobile app built with React Native and Expo for monitoring AC units via Bluetooth. BLE Connect displays real-time data like temperature, phase voltages (R, Y, B), and system health indicators. It features color-coded alerts, secure OTP-based authentication via Firebase, and easy Bluetooth pairing with QR codes.",
    Technologies: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.FIREBASE,
    ],
    caseStudy: "/Project?slug=ble-connect",
    GithubLink: "",
    imgUrl: BLEImage,
  },
  {
    Name: "Social media app",
    Description:
      "Developed a full-stack social media web application utilizing the MongoDB, Express.js, Node.js, Next js. This application allows users to create and manage profiles, posts, likes, comments, and follow others.",
    Technologies: [
      TECH.NEXT_JS,
      TECH.NODE_JS,
      TECH.TAILWIND,
      TECH.TYPESCRIPT,
      TECH.MONGO_DB,
      TECH.EXPRESS_JS,
    ],
    liveLink: "https://social-link-app.vercel.app",
    GithubLink: "",
    imgUrl: SocialMediaImage,
  },
  {
    Name: "Custom Authentication MERN",
    Description:
      "Secure, custom authentication system using the MERN stack. Features JWT-based session management, password encryption, and role-based access control.",
    imgUrl: project10,
    liveLink: "https://login-intern.vercel.app/auth",
    Technologies: [
      TECH.REACT_JS,
      TECH.NODE_JS,
      TECH.EXPRESS_JS,
      TECH.TAILWIND,
      TECH.MONGO_DB,
      TECH.JAVASCRIPT,
    ],
    GithubLink: "https://github.com/ayush735bahuguna/login-next-js",
  },
  {
    Name: "Event website",
    Description:
      "A comprehensive event management website built with Next.js and Tailwind CSS, focusing on performance and user experience.",
    imgUrl: project7,
    liveLink: "https://colosseum24.vercel.app/",
    Technologies: [TECH.NEXT_JS, TECH.TAILWIND, TECH.TYPESCRIPT],
    GithubLink: "https://github.com/ayush735bahuguna/colosseum",
  },
  {
    Name: "Next js Notes app",
    Description:
      "A robust note-taking application built with Next.js, featuring a clean UI and efficient data handling.",
    imgUrl: project3,
    liveLink: "https://notes-next-js-pink.vercel.app/",
    Technologies: [
      TECH.REACT_JS,
      TECH.NODE_JS,
      TECH.EXPRESS_JS,
      TECH.BOOTSTRAP,
      TECH.MONGO_DB,
      TECH.JAVASCRIPT,
    ],
    GithubLink: "https://github.com/ayush735bahuguna/Notes-nextJs",
  },
  {
    Name: "Magic Pictures",
    Description:
      "Explore and download high-quality images via Unsplash API. Features sorting, filtering, and high-res downloads.",
    imgUrl: project2,
    liveLink: "https://magic-pictures.netlify.app/",
    Technologies: [TECH.REACT_JS, TECH.BOOTSTRAP, TECH.JAVASCRIPT],
    GithubLink: "https://github.com/ayush735bahuguna/picture",
  },
  {
    Name: "Movie-adda",
    Description:
      "A dynamic movie discovery app powered by TMDB API. Search, browse trending, and view detailed info about films and TV series.",
    imgUrl: project5,
    liveLink: "https://movie-adda.netlify.app/",
    Technologies: [TECH.REACT_JS, TECH.BOOTSTRAP, TECH.JAVASCRIPT],
    GithubLink: "https://github.com/ayush735bahuguna/movie-adda",
  },
  {
    Name: "Food Recipe App",
    Description:
      "A React Native mobile application for discovering and managing food recipes, built with Expo and Tailwind CSS.",
    imgUrl: project12,
    liveLink: "https://expo.dev/@ayushbahuguna1122/foodApp",
    Technologies: [TECH.REACT_NATIVE, TECH.TAILWIND],
    GithubLink: "https://github.com/ayush735bahuguna/foodApp-reactNative",
  },
  {
    Name: "Wallywalls wallpaper app",
    Description:
      "Android app for high-res wallpapers from Unsplash. Features a sleek UI and easy-to-browse categories.",
    imgUrl: project11,
    liveLink: "#",
    Technologies: [TECH.REACT_NATIVE, TECH.TAILWIND],
    GithubLink: "https://github.com/ayush735bahuguna/wallywalls",
  },
  {
    Name: "Custom Google form",
    Description:
      "A custom-built form application using core web technologies for a tailored user experience.",
    imgUrl: project9,
    liveLink: "https://acknowledgment.netlify.app/",
    Technologies: [TECH.HTML, TECH.CSS, TECH.JAVASCRIPT],
    GithubLink: "https://github.com/ayush735bahuguna/Google-Form--Custom",
  },
  {
    Name: "React js Notes App",
    Description:
      "Feature-rich MERN stack note-taking application with user profiles, search, and secure storage.",
    imgUrl: project1,
    liveLink: "https://note-quick.netlify.app/",
    Technologies: [
      TECH.REACT_JS,
      TECH.NODE_JS,
      TECH.EXPRESS_JS,
      TECH.BOOTSTRAP,
      TECH.MONGO_DB,
      TECH.JAVASCRIPT,
    ],
    GithubLink: "https://github.com/ayush735bahuguna/MERN-Notes",
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Feed4Me - Digital Food Ecosystem",
    description:
      "Feed4Me is an end-to-end digital platform connecting farmers, consumers, NGOs, and storage providers to streamline crop trade, food waste management, and storage solutions.",
    skills: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.EXPO,
      TECH.AWS,
      TECH.DOCKER,
      TECH.MONGO_DB,
    ],
    link: "Project?slug=feed4me",
    buttonText: "Open Project Page",
    reverse: false,
    image: Feed4MeImage,
  },
  {
    title: "OverShare - Wallpaper notes for productivity",
    description:
      "A productivity-focused wallpaper app that allows users to create, customize, and display notes directly on their home screen.",
    skills: [TECH.REACT_NATIVE, TECH.EXPO, TECH.REANIMATED, TECH.TAILWIND],
    link: "Project?slug=overshare",
    buttonText: "Open Project Page",
    reverse: true,
    image: OverShareImage,
  },
  {
    title: "Splitzy - Simplify expenses",
    description:
      "Splitzy is a feature-rich mobile app designed to make group expense management hassle-free, from splitting bills to tracking payments.",
    skills: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.FIREBASE,
      TECH.EXPO,
      TECH.REANIMATED,
    ],
    link: "Project?slug=splitzy",
    buttonText: "Open Project Page",
    reverse: false,
    image: SplitzyImage,
  },
];
