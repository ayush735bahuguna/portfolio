import project1 from "@/app/assets/projects/MERN notes.png";
import project2 from "@/app/assets/projects/Magic-pictures.png";
import project3 from "@/app/assets/projects/Nextjs notes.png";
import project4 from "@/app/assets/projects/chat-link.png";
import project5 from "@/app/assets/projects/movie-adda.png";
// import project6 from "@/app/assets/projects/dropbox-clone1.png";
import project7 from "@/app/assets/projects/Event website.png";
// import project8 from "@/app/assets/projects/image gallary.png";
import project9 from "@/app/assets/projects/Google form.png";
import project10 from "@/app/assets/projects/auth.png";
import project11 from "@/app/assets/projects/wallywals.png";
import project12 from "@/app/assets/projects/food recipie.png";
// import project13 from "@/app/assets/projects/messanger ui.png";
import { StaticImageData } from "next/image";

export const SkillJSON: { name: string; link: string }[] = [
  {
    name: "Next Js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React Native",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "React Js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Typescript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "AWS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Node Js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "express Js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Tailwind",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material ui",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "Mongo DB",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Html",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "Socket.io",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  },
  {
    name: "Css",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Github",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  { name: "REST APIs", link: "" },
  { name: "Expo", link: "" },
  { name: "GSAP", link: "" },
];

export const SoftwareJSON: { name: string; link: string }[] = [
  {
    name: "Photoshop",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Canva",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  {
    name: "Netlify",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },
  {
    name: "Github",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "VS code",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  { name: "Render", link: "" },
];

export const ProjectData: {
  Name: string;
  Description: string;
  imgUrl: StaticImageData;
  url: string;
  GithubLink: string;
  Technologies: { name: string; link: string }[];
}[] = [
  {
    Name: "BLE Connect",
    Description:
      "A mobile app built with React Native and Expo for monitoring AC units via Bluetooth. BLE Connect displays real-time data like temperature, phase voltages (R, Y, B), and system health indicators. It features color-coded alerts, secure OTP-based authentication via Firebase, and easy Bluetooth pairing with QR codes. The app also allows users to customize the Bluetooth module name and provides comprehensive error handling for system diagnostics.",
    Technologies: [
      {
        name: "React Native",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Typescript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      },
      {
        name: "Tailwind",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "firebase",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
    ],
    url: "/Project?slug=ble-connect",
    GithubLink: "",
    imgUrl: require("@/app/assets/BLE.png"),
  },
  {
    Name: "Social media app",
    Description:
      "Developed a full-stack social media web application utilizing the MongoDB, Express.js, Node.js ,Next js. This application allows users to: Create and manage profiles -    Create, edit, and delete posts - Like and comment on other users' posts - Follow , Unfollow other users - Search for  users and posts",
    Technologies: [
      {
        name: "Next Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },

      {
        name: "Tailwind",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Typescript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      },
      {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "express Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
    ],
    url: "https://social-link-app.vercel.app",
    GithubLink: "",
    imgUrl: require("@/app/assets/Social media.png"),
  },
  {
    Name: "MERN Chat App",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
    imgUrl: project4,
    url: "https://chat-link.netlify.app/",
    Technologies: [
      {
        name: "React Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Node Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "express Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/MERN-chat-app",
  },
  {
    Name: "Custom Authentication MERN",
    Description:
      "This project involves building a secure, custom authentication system using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system allows users to: Register and log in using secure password encryption (bcrypt) Authenticate users via JWT (JSON Web Tokens) for secure session management Protect routes and ensure only authenticated users can access certain features Implement role-based access control for different user permissions Secure user data with validation and input sanitization This project showcases my expertise in building secure, full-stack authentication systems with the MERN stack, focusing on security best practices and scalability.",
    imgUrl: project10,
    url: "https://login-intern.vercel.app/auth",
    Technologies: [
      {
        name: "React Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Node Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "express Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Tailwind",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/login-next-js",
  },
  {
    Name: "Event website",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
    imgUrl: project7,
    url: "https://colosseum24.vercel.app/",
    Technologies: [
      {
        name: "Next Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Typescript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/colosseum",
  },

  // {
  //   Name: "SafeDrive",
  //   Description:
  //     "The SafeDrive is a cloud storage web application designed to mimic the core functionalities of Dropbox. Built using modern web technologies, it allows users to securely store, manage, and access files online. Key features include: User authentication for secure file management Upload, download, and delete files with ease Organize files in folders for better management Real-time file synchronization across devices Responsive design for a seamless experience on both desktop and mobile This project demonstrates my full-stack development capabilities, focusing on file management, cloud storage solutions, and user authentication.",
  //   imgUrl: project6,
  //   url: "https://dropbox-clone-mocha-nu.vercel.app",
  //   Technologies: [
  //     {
  //       name: "Next Js",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //     },
  //     {
  //       name: "firebase",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  //     },
  //     {
  //       name: "JavaScript",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  //     },
  //     {
  //       name: "Tailwind",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     },
  //   ],
  //   GithubLink: "https://github.com/ayush735bahuguna/dropbox-clone",
  // },
  {
    Name: "Next js Notes app",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
    imgUrl: project3,
    url: "https://notes-next-js-pink.vercel.app/",
    Technologies: [
      {
        name: "React Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Node Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "express Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/Notes-nextJs",
  },
  {
    Name: "Magic Pictures",
    Description:
      "Magic Pictures is a visually captivating web app that allows users to explore and download high-quality images through the Unsplash API. The site offers an intuitive search and browsing experience with features such as: Search for images by keyword with real-time results Sort images by popularity, date (new), and other criteria Filter images by orientation (landscape, portrait, square, etc.) Click on individual images to open a detailed view in a modal and download high-resolution versions This project showcases my skills in front-end development, API integration, and delivering user-focused web experiences.",
    imgUrl: project2,
    url: "https://magic-pictures.netlify.app/",
    Technologies: [
      {
        name: "React Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/picture",
  },
  {
    Name: "Movie-adda",
    Description:
      "Movie-Adda is a dynamic web application built with React that allows users to explore and discover movies and TV series. Powered by TMDB (The Movie Database) API, the app provides a seamless experience for film enthusiasts with features such as: Search movies and TV series by title, genre, or keyword Browse trending movies and TV series based on real-time TMDB data View detailed information including title, overview, poster, cast, crew, and ratings Receive personalized movie recommendations based on preferences This project showcases my front-end development skills and my ability to integrate third-party APIs for dynamic content.",
    imgUrl: project5,
    url: "https://movie-adda.netlify.app/",
    Technologies: [
      {
        name: "React Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/movie-adda",
  },
  {
    Name: "Food Recipe App",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
    imgUrl: project12,
    url: "https://expo.dev/@ayushbahuguna1122/foodApp",
    Technologies: [
      {
        name: "React Native",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/foodApp-reactNative",
  },
  {
    Name: "Wallywalls wallpaper app",
    Description:
      "Wallywalls is an Android app that provides users with access to a curated collection of high-resolution wallpapers sourced from the Unsplash API. With a sleek and user-friendly interface, the app offers the following features: Browse a vast collection of stunning wallpapers in various categories Search for specific wallpapers by keyword or category to personalize your device This project highlights my expertise in mobile app development using React Native and API integration to deliver dynamic content.",
    imgUrl: project11,
    url: "#",
    Technologies: [
      {
        name: "React Native",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/wallywalls",
  },
  {
    Name: "Custom Google form",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
    imgUrl: project9,
    url: "https://acknowledgment.netlify.app/",
    Technologies: [
      {
        name: "Html",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "Css",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/Google-Form--Custom",
  },
  {
    Name: "React js Notes App",
    Description:
      "Developed a feature-rich single-page note-taking application using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app enables users to effortlessly manage their notes and profiles with key features including:User profile creation and management Ability to create, edit, and delete notes Search functionality to find notes by title Secure storage of notes in a MongoDB database This project highlights my expertise in full-stack development, focusing on user-friendly design, security, and scalability.",
    imgUrl: project1,
    url: "https://note-quick.netlify.app/",
    Technologies: [
      {
        name: "React Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Node Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "express Js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    GithubLink: "https://github.com/ayush735bahuguna/MERN-Notes",
  },
  // {
  //   Name: "Chat App UI",
  //   Description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
  //   imgUrl: project13,
  //   url: "https://messenger-mern-next.vercel.app/",
  //   Technologies: [
  //     {
  //       name: "Next Js",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //     },
  //     {
  //       name: "Tailwind",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     },
  //     {
  //       name: "Typescript",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  //     },
  //   ],
  //   GithubLink: "https://github.com/ayush735bahuguna/messenger-nextjs",
  // },
  // {
  //   Name: "Chat Bot UI",
  //   Description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia voluptate eaque quo sequi quod autem quibusdam provident, reiciendis cumque nobis nihil earum deleniti incidunt laborum, soluta cum, accusamus amet dolor? Blanditiis nobis ullam aut dolores voluptate vel quae repellat doloremque perspiciatis rem corrupti, unde voluptatem quas quos sapiente voluptas tenetur ad hic excepturi aperiam eos dignissimos consequuntur, vero itaque. Deleniti sint ullam iure reiciendis, iste voluptatem. Praesentium, distinctio maxime, porro nesciunt neque ipsum sapiente dicta quam aliquam dolorem maiores dolores. In, ducimus aperiam",
  //   imgUrl: project13,
  //   url: "https://chat-bot-ui-two.vercel.app/",
  //   Technologies: [
  //     {
  //       name: "Next Js",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //     },
  //     {
  //       name: "Tailwind",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     },
  //     {
  //       name: "Typescript",
  //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  //     },
  //   ],
  //   GithubLink: "https://github.com/ayush735bahuguna/chat-bot---ui",
  // },
];
