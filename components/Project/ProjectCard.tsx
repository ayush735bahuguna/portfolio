"use client";
import { Project } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MagicButton } from "../MagicButton";
import { ExternalLink, GithubIcon } from "lucide-react";

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <div
      className="
        group relative
        bg-[#0a0a0a] 
        rounded-[2rem]
        overflow-hidden
        flex flex-col
        border border-slate-900
        transition-all duration-500
        hover:border-slate-800 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]
        h-full w-full
      "
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={data.imgUrl}
          alt={data.Name}
          className="
            object-cover w-full h-full
            transition-transform duration-700
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-8 max-md:p-4 flex flex-col gap-6 -mt-12 relative z-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none group-hover:text-blue-400 transition-colors">
            {data.Name}
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm font-medium">
            {data.Description.slice(0, 120)}...
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.Technologies?.map((Skill, index) => (
            <span
              key={index}
              className="
                flex items-center gap-2
                bg-slate-900/50 border border-slate-800/50
                rounded-full py-1.5 px-3
                hover:border-slate-700 transition-colors
              "
            >
              {Skill.link && (
                <Image
                  src={Skill.link}
                  width={14}
                  height={14}
                  alt={Skill.name}
                  className="aspect-square grayscale group-hover:grayscale-0 transition-all"
                />
              )}
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {Skill.name}
              </p>
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          {data.caseStudy && (
            <Link href={data.caseStudy} className="flex-1">
              <MagicButton
                icon={ExternalLink}
                className="w-full h-12 rounded-xl"
              >
                Open Project Page
              </MagicButton>
            </Link>
          )}

          {data.liveLink && (
            <Link href={data.liveLink} target="_blank" className="flex-1">
              <MagicButton
                variant={data.caseStudy ? "secondary" : "primary"}
                className="w-full h-12 rounded-xl"
                icon={ExternalLink}
              >
                {data.liveLink.includes("expo.dev") ||
                data.liveLink.includes("play.google")
                  ? "View App"
                  : "Live Link"}
              </MagicButton>
            </Link>
          )}

          {data.GithubLink && data.GithubLink !== "" && (
            <Link href={data.GithubLink} target="_blank">
              <MagicButton
                variant="secondary"
                className="h-12 w-12 rounded-xl p-0"
                icon={GithubIcon}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
