"use client";
import { PROJECT_DETAILS, ProjectDetail } from "@/constants";
import Coursoul from "@/components/Project/Coursoul";
import { MagicButton } from "@/components/MagicButton";
import {
  ExternalLink,
  Target,
  Lightbulb,
  PenTool,
  Cpu,
  AlertCircle,
  Users,
  CheckCircle2,
  ArrowLeft as BackIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function ProjectPageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const AppDetails: ProjectDetail | null = slug ? PROJECT_DETAILS[slug] : null;

  if (!slug || !AppDetails) {
    return (
      <div className="flex items-center justify-center w-full h-dvh bg-black text-white">
        <p>Oops! project not found</p>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen bg-black text-white p-5 pt-32 md:px-28 max-md:px-5 overflow-x-clip">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Link
        href="/Projects"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group relative z-20"
      >
        <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
          <BackIcon size={18} />
        </div>
        <span className="font-medium">Back to Projects</span>
      </Link>

      <div className="relative z-10 mb-16">
        <div className="max-w-4xl">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
            {AppDetails?.title.split(/[:\s]-|:/)[0]}{" "}
            <span className="text-slate-500 italic">
              {AppDetails?.title.split(/[:\s]-|:/)[1] || "Project"}
            </span>
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            {AppDetails?.Technologies?.map((Skill, index) => (
              <span
                key={index}
                className="gap-2 flex justify-center items-center bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1.5 hover:border-slate-600 transition-colors"
              >
                {Skill.link && (
                  <Image
                    src={Skill.link}
                    width={16}
                    height={16}
                    className="aspect-square transition-all"
                    alt={Skill.name}
                  />
                )}
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {Skill.name}
                </p>
              </span>
            ))}
          </div>

          {AppDetails?.link && (
            <Link href={AppDetails?.link} target="_blank" className="w-fit">
              <MagicButton icon={ExternalLink}>Download App</MagicButton>
            </Link>
          )}
        </div>
      </div>

      <Coursoul Data={AppDetails?.images} landscape={slug === "feed4me"} />

      <div className="flex mt-20 relative">
        <aside className="hidden lg:block w-52 shrink-0 sticky top-10 h-fit">
          <div className="flex flex-col gap-4 border-l border-slate-800 pl-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
              On this page
            </p>
            <a
              href="#description"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
            >
              Description
            </a>
            {AppDetails.problem && (
              <a
                href="#problem"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
              >
                The Problem
              </a>
            )}
            {AppDetails.solution && (
              <a
                href="#solution"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
              >
                The Solution
              </a>
            )}
            <a
              href="#features"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
            >
              Key Features
            </a>
            {AppDetails.architecture && (
              <a
                href="#architecture"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
              >
                Architecture
              </a>
            )}
            {AppDetails.challenges && (
              <a
                href="#challenges"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
              >
                Challenges
              </a>
            )}
            {AppDetails.audience && (
              <a
                href="#audience"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
              >
                Target Audience
              </a>
            )}
            {AppDetails.conclusion && (
              <a
                href="#conclusion"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-1"
              >
                Conclusion
              </a>
            )}
          </div>
        </aside>

        {/* Content Sections Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Vertical Journey Line */}
          <div className="absolute left-[23px] top-6 bottom-32 w-px bg-gradient-to-b from-slate-800 via-slate-800 to-transparent hidden md:block" />

          <section
            id="description"
            className="mb-20 flex flex-col gap-4 relative"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl group-hover:border-blue-500 transition-colors">
                <PenTool size={22} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Description</h2>
            </div>
            <div className="md:pl-16">
              <p className="text-slate-300 leading-relaxed text-lg font-medium">
                {AppDetails?.description}
              </p>
            </div>
          </section>

          {AppDetails.problem && (
            <section
              id="problem"
              className="mb-20 flex flex-col gap-4 relative"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl">
                  <AlertCircle size={22} className="text-red-400" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <div className="md:pl-16">
                <div className="p-6 md:p-8 bg-slate-900/30 rounded-3xl md:rounded-[2rem] border border-slate-800/50 backdrop-blur-sm">
                  {AppDetails.problem}
                </div>
              </div>
            </section>
          )}

          {AppDetails.solution && (
            <section
              id="solution"
              className="mb-20 flex flex-col gap-4 relative"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl">
                  <Lightbulb size={22} className="text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <div className="md:pl-16">
                <div className="p-6 md:p-8 bg-slate-900/30 rounded-3xl md:rounded-[2rem] border border-slate-800/50 backdrop-blur-sm transition-all hover:bg-slate-900/40">
                  {AppDetails.solution}
                </div>
              </div>
            </section>
          )}

          <section id="features" className="mb-20 flex flex-col gap-6 relative">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl">
                <Target size={22} className="text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            <div className="md:pl-16">{AppDetails?.features}</div>
          </section>

          {AppDetails.architecture && (
            <section
              id="architecture"
              className="mb-20 flex flex-col gap-6 relative"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl">
                  <Cpu size={22} className="text-green-400" />
                </div>
                <h2 className="text-2xl font-bold">Technical Architecture</h2>
              </div>
              <div className="md:pl-16">{AppDetails.architecture}</div>
            </section>
          )}

          {AppDetails.challenges && (
            <section
              id="challenges"
              className="mb-20 flex flex-col gap-4 relative"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl">
                  <Cpu size={22} className="text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">Challenges & Privacy</h2>
              </div>
              <div className="md:pl-16">
                <div className="p-6 md:p-8 bg-slate-900/30 rounded-3xl md:rounded-[2rem] border border-slate-800/50 backdrop-blur-sm">
                  {AppDetails.challenges}
                </div>
              </div>
            </section>
          )}

          {AppDetails.audience && (
            <section
              id="audience"
              className="mb-10 flex flex-col gap-4 relative"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl z-10 border border-slate-800 shadow-xl">
                  <Users size={22} className="text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold">Target Audience</h2>
              </div>
              <div className="md:pl-16">
                <div className="p-6 md:p-8 bg-slate-900/30 rounded-3xl md:rounded-[2rem] border border-slate-800/50 backdrop-blur-sm">
                  {AppDetails.audience}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      {AppDetails.conclusion && (
        <section
          id="conclusion"
          className="my-24 p-6 md:p-10 bg-gradient-to-br from-slate-900 to-black rounded-3xl md:rounded-[3rem] border border-slate-800 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity">
            <CheckCircle2 size={150} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3 text-white tracking-tight">
              Conclusion
            </h2>
            {AppDetails.conclusion}
          </div>
        </section>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-dvh">
          <p>Loading...</p>
        </div>
      }
    >
      <ProjectPageContent />
    </Suspense>
  );
}
