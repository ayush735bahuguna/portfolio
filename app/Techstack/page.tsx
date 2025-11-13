import { SkillJSON, SoftwareJSON } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const SkillItem = ({ Skill }: { Skill: { name: string; link: string } }) => {
  return (
    <div className="gap-2 items-center justify-end p-2 rounded-xl w-24 bg-gray-900 hover:bg-gray-800 flex flex-col">
      {Skill.link && (
        <Image
          src={Skill.link}
          width={50}
          height={50}
          className="aspect-square"
          alt={Skill.name}
        />
      )}
      <p className="text-sm text-center">{Skill.name}</p>
    </div>
  );
};

export default function page() {
  return (
    <div className="md:px-28 max-md:px-5 pt-9">
      <div className="pb-20">
        <p className="text-4xl font-bold text-white">Tech Stack</p>
        <p className=" text-slate-400 pt-1">
          I build impactful digital solutions with modern technologies and
          frameworks.
        </p>
      </div>

      <div className="mb-24">
        <div className="rounded-3xl mb-5">
          <p className="text-2xl text-white">
            Technologies I love to build with
          </p>

          <div className="flex flex-wrap gap-2 py-4">
            {SkillJSON?.map(
              (Skill: { name: string; link: string }, index: number) => (
                <div key={index}>
                  <SkillItem Skill={Skill} />
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-3xl my-5">
          <p className="text-2xl text-white">Software I love to work with</p>

          <div className="flex items-center justify-start flex-wrap gap-2 py-4">
            {SoftwareJSON?.map((Skill, index) => (
              <div key={index}>
                <SkillItem Skill={Skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
