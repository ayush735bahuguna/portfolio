import { Button } from "@/components/ui/button";
import { SkillJSON, SoftwareJSON } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="md:px-28 max-md:px-5 pt-9">
      <div className="pb-20">
        <p className="text-4xl text-white">Tech Stack</p>
        <p className=" text-slate-400 pt-1">
          I build impactful digital solutions with modern technologies and
          frameworks.
        </p>
      </div>

      <div className="">
        <div className="rounded-3xl bg-black mb-5">
          <p className="text-2xl font-semibold text-white">
            Technologies I love to build with
          </p>

          <div className="flex items-center justify-start flex-wrap py-10">
            {SkillJSON?.map((Skill, index) => {
              return (
                <Button
                  key={index}
                  variant={"secondary"}
                  className="m-2 gap-2 bg-gray-800 hover:bg-gray-700"
                >
                  {Skill.link && (
                    <Image
                      src={Skill.link}
                      width={20}
                      height={20}
                      className="aspect-square"
                      alt={Skill.name}
                    />
                  )}
                  <p className="text-white">{Skill.name}</p>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl bg-black my-5">
          <p className="text-2xl font-semibold text-white">
            Software I love to work with
          </p>

          <div className="flex items-center justify-start flex-wrap py-10">
            {SoftwareJSON?.map((Skill, index) => {
              return (
                <Button
                  key={index}
                  variant={"secondary"}
                  className="m-2 gap-2 bg-gray-800 hover:bg-gray-700"
                >
                  {Skill.link && (
                    <Image
                      src={Skill.link}
                      width={20}
                      height={20}
                      className="aspect-square"
                      alt={Skill.name}
                    />
                  )}
                  <p className="text-white">{Skill.name}</p>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
