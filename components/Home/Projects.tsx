"use client";
import { FEATURED_PROJECTS } from "@/constants";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MagicButton } from "../MagicButton";

export default function Projects() {
  const projects = FEATURED_PROJECTS;
  return (
    <div id="Projects" className="md:px-28 max-md:px-5 py-24 pb-16 bg-black">
      <div className="pb-16 flex flex-col gap-2">
        <h2 className="text-4xl md:text-5xl font-black text-white ">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-slate-500 font-medium">
          Focused on the experience, driven by the engineering.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            target={project.reverse ? "_blank" : ""}
            key={index}
            className="block"
          >
            <div
              className={`flex rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-900 bg-[#0a0a0a] transition-all duration-500 hover:border-slate-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group ${
                project.reverse ? "flex-row-reverse" : "flex-row"
              } max-lg:flex-col items-stretch`}
            >
              <div className="flex flex-col w-1/2 max-lg:w-full p-6 md:p-10 justify-center gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-4xl font-black text-white leading-tight group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.skills.map((Skill, i) => (
                    <span
                      key={i}
                      className="gap-2 flex justify-center items-center rounded-full py-2 px-4 bg-black/40 border border-slate-800/50 group-hover:border-slate-700 transition-colors"
                    >
                      {Skill.link && (
                        <Image
                          src={Skill.link}
                          width={14}
                          height={14}
                          className="aspect-square transition-all"
                          alt={Skill.name}
                        />
                      )}
                      <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">
                        {Skill.name}
                      </p>
                    </span>
                  ))}
                </div>

                <MagicButton icon={ExternalLink} className="w-fit">
                  {project.buttonText}
                </MagicButton>
              </div>

              <div className="relative w-1/2 max-lg:w-full overflow-hidden bg-slate-900/20">
                <Image
                  src={project.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-6">
        <Link href={"/Projects"}>
          <MagicButton variant="outline" icon={ArrowRight}>
            View More Projects
          </MagicButton>
        </Link>
      </div>
    </div>
  );
}
