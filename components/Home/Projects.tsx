import React from "react";
import ProjectCard from "./Components/Projects/ProjectCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BLEImage from "@/app/assets/BLE.png";
import SplitzyImage from "@/app/assets/splitzy.png";
import OverShareImage from "@/app/assets/overshare.png";
import SocialMediaImage from "@/app/assets/Social media.png";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="min-h-screen w-screen border-b-2 border-gray-800 bg-black"
    >
      <div className="py-20">
        <p className="text-4xl text-center font-bold text-white">
          Featured Projects
        </p>
        <p className="text-center text-slate-300 p-4">
          Focused on the experience, driven by the engineering.
        </p>
      </div>

      <div className="px-5">
        <ProjectCard
          name="Splitzy - Simplify expenses"
          slug={"splitzy"}
          description="Splitzy is a feature-rich mobile app designed to make group expense management hassle-free. From splitting bills to tracking payments and settling debts, it offers a user-friendly solution to keep finances organized within groups, Easy Bill Splitting: Share expenses equally or customize shares, Payment Tracking: Record payments and monitor balances in real time, Expense Summaries: Detailed reports for better financial clarity, Secure and Private: User data is securely managed to ensure privacy
          "
          Technologies={[
            {
              name: "React Native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "Typescript",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
            },
            {
              name: "Tailwind css",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "firebase",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            },
            {
              name: "Expo",
              link: "",
            },
            {
              name: "Reanimated",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
          ]}
          GithubLink=""
          link=""
          imageUrl={SplitzyImage}
          visiblity="private"
        />

        <ProjectCard
          name="OverShare - Wallpaper notes for productivity"
          slug={"overshare"}
          description="A productivity-focused wallpaper app that allows users to create, customize, and display notes directly on their home screen. Features include note pinning, custom colors, search, and sharing, along with personalized wallpapers using gallery images or color themes. Built with a user-friendly UI, smooth animations, and light/dark mode support."
          Technologies={[
            {
              name: "React native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "Expo",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
            },
            {
              name: "Reanimated",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
            {
              name: "nativewind (tailwind css)",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
            },
          ]}
          GithubLink=""
          link=""
          imageUrl={OverShareImage}
          visiblity="private"
        />

        <ProjectCard
          name="BLE Connect"
          slug={"ble-connect"}
          description="A mobile app built with React Native and Expo for
          monitoring AC units via Bluetooth. BLE Connect displays real-time data
          like temperature, phase voltages (R, Y, B), and system health
          indicators. It features color-coded alerts, secure OTP-based
          authentication via Firebase, and easy Bluetooth pairing with QR codes.
          The app also allows users to customize the Bluetooth module name and
          provides comprehensive error handling for system diagnostics."
          Technologies={[
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
          ]}
          GithubLink=""
          link=""
          imageUrl={BLEImage}
          visiblity="private"
        />

        <ProjectCard
          name="Social media app"
          description="Developed a full-stack social media web application   
        utilizing the MongoDB, Express.js, Node.js ,Next js. This 
        application allows users to: Create and manage profiles -   
        Create, edit, and delete posts - Like and comment on other 
        users' posts - Follow , Unfollow other users - Search for 
        users and posts"
          Technologies={[
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
          ]}
          GithubLink=""
          link="https://social-link-app.vercel.app"
          imageUrl={SocialMediaImage}
          visiblity="private"
        />
      </div>

      <Link
        href={"/Projects"}
        className="flex p-5 justify-center items-center flex-row my-10 w-screen hover:underline gap-3 cursor-pointer text-white"
      >
        <p>More Projects</p>
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}
