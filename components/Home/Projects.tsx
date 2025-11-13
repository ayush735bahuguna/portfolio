import React from "react";
import ProjectCard from "./Components/Projects/ProjectCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SplitzyImage from "@/app/assets/splitzy.png";
// import OverShareImage from "@/app/assets/overshare.png";
import Feed4MeImage from "@/app/assets/FEED4ME.png";

export default function Projects() {
  return (
    <div id="Projects" className="md:px-28 max-md:px-5 pt-10 bg-black">
      <div className="pb-20">
        <p className="text-4xl text-white">Featured Projects</p>
        <p className=" text-slate-400 pt-1">
          Focused on the experience, driven by the engineering.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center flex-row">
        <ProjectCard
          name="Feed4Me - Digital Food Ecosystem"
          slug={"feed4me"}
          description="Feed4Me is an end-to-end digital platform connecting farmers, consumers, NGOs, and storage providers to streamline crop trade, food waste management, and storage solutions. It features real-time communication, multilingual support, weather alerts, a Crop Encyclopedia, news updates, and learning resources, promoting transparency, sustainability, and collaboration throughout the food supply chain."
          Technologies={[
            {
              name: "React Native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "TypeScript",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
            },
            {
              name: "Tailwind CSS",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "Expo",
              link: "",
            },
            {
              name: "AWS",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            },
            {
              name: "Docker",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            },
            {
              name: "MongoDB",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            },
          ]}
          link=""
          imageUrl={Feed4MeImage}
        />

        {/* <ProjectCard
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
          link="https://play.google.com/store/apps/details?id=com.ayushbahuguna1122.overshare"
          imageUrl={OverShareImage}
        /> */}

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
          link=""
          imageUrl={SplitzyImage}
        />
      </div>

      <Link
        href={"/Projects"}
        className="flex p-5 justify-center items-center flex-row my-10 hover:underline gap-3 cursor-pointer text-white"
      >
        <p>More Projects</p>
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}
