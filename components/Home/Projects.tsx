import React from "react";
// import ProjectCard from "./Components/Projects/ProjectCard";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import SplitzyImage from "@/app/assets/splitzy.png";
import OverShareImage from "@/app/assets/overshare.png";
import Feed4MeImage from "@/app/assets/FEED4ME.png";
import Image from "next/image";
import { Button } from "../ui/button";
// projectsData.ts or inside the same file

export default function Projects() {
  const projects = [
    {
      title: "Feed4Me - Digital Food Ecosystem",
      description:
        "Feed4Me is an end-to-end digital platform connecting farmers, consumers, NGOs, and storage providers to streamline crop trade, food waste management, and storage solutions. It features real-time communication, multilingual support, weather alerts, a Crop Encyclopedia, news updates, and learning resources, promoting transparency, sustainability, and collaboration throughout the food supply chain.",
      skills: [
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
        { name: "Expo", link: "" },
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
      ],
      link: "Project?slug=feed4me",
      buttonText: "Open Project Page",
      reverse: false,
      image: Feed4MeImage,
    },

    {
      title: "OverShare - Wallpaper notes for productivity",
      description:
        "A productivity-focused wallpaper app that allows users to create, customize, and display notes directly on their home screen. Features include note pinning, custom colors, search, and sharing, along with personalized wallpapers using gallery images or color themes. Built with a user-friendly UI, smooth animations, and light/dark mode support.",
      skills: [
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
      ],
      link: "https://play.google.com/store/apps/details?id=com.ayushbahuguna1122.overshare",
      buttonText: "Downlod from Playstore",
      reverse: true,
      image: OverShareImage,
    },

    {
      title: "Splitzy - Simplify expenses",
      description:
        "Splitzy is a feature-rich mobile app designed to make group expense management hassle-free. From splitting bills to tracking payments and settling debts, it offers a user-friendly solution to keep finances organized within groups, Easy Bill Splitting: Share expenses equally or customize shares, Payment Tracking: Record payments and monitor balances in real time, Expense Summaries: Detailed reports for better financial clarity, Secure and Private: User data is securely managed to ensure privacy.",
      skills: [
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
        { name: "Expo", link: "" },
        {
          name: "Reanimated",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
      ],
      link: "Project?slug=splitzy",
      buttonText: "Open Project Page",
      reverse: false,
      image: SplitzyImage,
    },
  ];
  return (
    <div id="Projects" className="md:px-28 max-md:px-5 pt-10 bg-black">
      <div className="pb-5">
        <p className="text-4xl text-white">Featured Projects</p>
        <p className=" text-slate-400 pt-1">
          Focused on the experience, driven by the engineering.
        </p>
      </div>

      {projects.map((project, index) => (
        <Link
          href={project.link}
          target={project.reverse ? "_blank" : ""}
          key={index}
        >
          <div
            className={`flex mt-3 ${
              project.reverse ? "flex-row-reverse" : "flex-row"
            } max-lg:flex-col-reverse items-center group border border-slate-800 hover:border-slate-700 cursor-pointer transition-all rounded-xl overflow-hidden`}
          >
            <div className="flex flex-col w-1/2 max-lg:w-full  p-7 max-lg:p-5 max-lg:pt-5 items-start justify-center gap-5">
              <p className="text-3xl font-semibold text-white">
                {project.title}
              </p>

              <p className="text-slate-400">{project.description}</p>

              <div className="flex gap-2 flex-wrap">
                {project.skills.map((Skill, i) => (
                  <span
                    key={i}
                    className="gap-2 flex justify-center items-center rounded-full py-1 w-fit px-2 bg-slate-900"
                  >
                    {Skill.link && (
                      <Image
                        src={Skill.link}
                        width={15}
                        height={15}
                        className="aspect-square"
                        alt={Skill.name}
                      />
                    )}
                    <p className="text-[12px] text-slate-400">{Skill.name}</p>
                  </span>
                ))}
              </div>

              <Button
                variant={"secondary"}
                className="bg-slate-800 hover:bg-slate-700 text-white"
              >
                <ExternalLink size={17} />
                &nbsp; {project.buttonText}
              </Button>
            </div>

            <div className="overflow-hidden w-1/2 max-lg:w-full">
              <Image
                src={project.image}
                className="h-auto contain group-hover:scale-105 transition-all"
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}

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
