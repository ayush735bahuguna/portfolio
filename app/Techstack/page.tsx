import { SKILLS, SOFTWARE } from "@/constants";
import Image from "next/image";
import React from "react";

const SkillItem = ({ Skill }: { Skill: { name: string; link: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-3xl bg-slate-900/40 backdrop-blur-sm border-2 border-slate-900 hover:border-slate-500 hover:bg-slate-900/80 transition-all duration-500 group cursor-pointer w-28 h-28 md:w-32 md:h-32 text-center">
      {Skill.link && (
        <div className="relative w-12 h-12 mb-3 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={Skill.link}
            fill
            className="object-contain group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all"
            alt={Skill.name}
          />
        </div>
      )}
      <p className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-tighter transition-colors">
        {Skill.name}
      </p>
    </div>
  );
};

export default function page() {
  return (
    <div className="relative min-h-screen bg-black text-white md:px-28 max-md:px-5 pt-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Abilities
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Tech <span className="text-slate-500 italic">Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            I build impactful digital solutions with modern technologies and
            frameworks, focusing on performance, scalability, and user-centric
            design.
          </p>
        </div>

        <div className="flex flex-col gap-20 pb-20">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-800" />
              <h2 className="font-bold text-slate-200 uppercase tracking-[0.2em] text-sm">
                Technologies
              </h2>
              <div className="h-px flex-1 bg-slate-800" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {SKILLS?.map((Skill, index) => (
                <SkillItem key={index} Skill={Skill} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-800" />
              <h2 className="font-bold text-slate-200 uppercase tracking-[0.2em] text-sm">
                Software & Tools
              </h2>
              <div className="h-px flex-1 bg-slate-800" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {SOFTWARE?.map((Skill, index) => (
                <SkillItem key={index} Skill={Skill} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
