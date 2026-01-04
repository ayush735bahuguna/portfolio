"use client";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Code, ExternalLink, FolderCode, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileImage from "@/app/assets/pic.jpeg";
import { MagicButton } from "../MagicButton";

export default function Hero() {
  return (
    <div
      className="relative md:py-20 max-md:py-10 flex justify-center items-start gap-10 flex-col md:px-28 max-md:px-5 bg-black overflow-hidden"
      id="Home"
    >
      <div className="absolute top-10 right-10 z-20 hidden md:flex items-center gap-8">
        <Link
          href="/Projects"
          className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all"
        >
          <FolderCode
            size={16}
            className="group-hover:text-blue-500 transition-colors"
          />
          <span className="text-sm font-bold uppercase ">Projects</span>
        </Link>
        <Link
          href="/Techstack"
          className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all"
        >
          <Code
            size={16}
            className="group-hover:text-purple-500 transition-colors"
          />
          <span className="text-sm font-bold uppercase ">Stack</span>
        </Link>
        <Link
          href="/Contact"
          className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all"
        >
          <Mail
            size={16}
            className="group-hover:text-pink-500 transition-colors"
          />
          <span className="text-sm font-bold uppercase ">Contact</span>
        </Link>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <Image
            src={ProfileImage}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-slate-800 p-1 hover:border-blue-500 transition-all duration-500 cursor-pointer object-cover"
            alt={`${PERSONAL_INFO.name} - Full-Stack Developer Profile`}
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
                Available for Hire
              </p>
            </div>
            <p className="text-slate-400 ml-2 font-medium">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
          I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {PERSONAL_INFO.name}
          </span>
          <br />
          <span className="text-slate-200">
            Building digital experiences from India.
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-md:text-lg max-w-3xl">
          I specialize in creating seamless experiences, leveraging technologies
          like <span className="text-white font-medium">React Native</span>,{" "}
          <span className="text-white font-medium">Next.js</span>, and{" "}
          <span className="text-white font-medium">MERN Stack</span>. My
          approach combines technical precision with intuitive design.
        </p>

        <div className="flex flex-wrap-reverse items-center gap-8 mt-4">
          <Link href={PERSONAL_INFO.resume} target="_blank">
            <MagicButton icon={ExternalLink}>Download Resume</MagicButton>
          </Link>

          <div className="flex gap-8 items-center">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                title={`Visit ${PERSONAL_INFO.name}'s ${link.platform}`}
                aria-label={`Visit my ${link.platform} profile`}
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110 duration-300"
              >
                {link.platform === "github" && (
                  <GitHubLogoIcon width={24} height={24} />
                )}
                {link.platform === "linkedin" && (
                  <LinkedInLogoIcon width={24} height={24} />
                )}
                {link.platform === "instagram" && (
                  <InstagramLogoIcon width={24} height={24} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
