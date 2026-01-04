"use client";
import ProjectCard from "@/components/Project/ProjectCard";
import { PROJECTS, FEATURED_PROJECTS, Project } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState<"All" | "Mobile" | "Web">("All");

  const normalizedFeatured: Project[] = FEATURED_PROJECTS.map((p) => {
    const isInternal = p.link.startsWith("Project");
    const isExternal = p.link.startsWith("http");

    if (p.title.toLowerCase().includes("overshare")) {
      return {
        Name: p.title,
        Description: p.description,
        imgUrl: p.image,
        caseStudy: "/Project?slug=overshare",
        liveLink: p.link,
        Technologies: p.skills,
        GithubLink: "",
      };
    }

    return {
      Name: p.title,
      Description: p.description,
      imgUrl: p.image,
      caseStudy: isInternal ? `/${p.link}` : undefined,
      liveLink: isExternal ? p.link : undefined,
      Technologies: p.skills,
      GithubLink: "",
    };
  });

  const allProjects = [...normalizedFeatured, ...PROJECTS];

  const filteredProjects = allProjects.filter((project) => {
    if (filter === "All") return true;
    const isMobile = project.Technologies.some(
      (t) =>
        t.name.toLowerCase().includes("react native") ||
        t.name.toLowerCase().includes("expo")
    );
    if (filter === "Mobile") return isMobile;
    if (filter === "Web") return !isMobile;
    return true;
  });

  return (
    <div className="bg-black relative min-h-screen overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="md:px-28 max-md:px-5 relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Curated <span className="text-slate-500 italic">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            A collection of my recent projects across mobile development,
            full-stack web applications, and technical experiments.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {["All", "Mobile", "Web"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as "All" | "Mobile" | "Web")}
              className={cn(
                "px-6 md:px-8 py-2 md:py-3 rounded-full border text-xs md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                filter === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-transparent text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((item: Project) => (
            <div key={item.Name} className="h-full">
              <ProjectCard data={item} />
            </div>
          ))}
        </div>

        {/* Footer Filler Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
}
