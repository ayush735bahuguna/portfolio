import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ExternalLink, GithubIcon } from "lucide-react";

export default function ProjectCard({
  data,
}: {
  data: {
    Name: string;
    Description: string;
    imgUrl: StaticImageData;
    url: string;
    GithubLink: string;
    Technologies: { name: string; link: string }[];
  };
}) {
  return (
    <div
      className="
        bg-slate-900/60 backdrop-blur-md
        rounded-2xl
        overflow-hidden
        flex flex-col justify-between
        border border-slate-800
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-800/20
        w-[48%] max-lg:w-full
      "
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={data.imgUrl}
          alt={data.Name}
          className="
            object-cover w-full h-full
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          {data.Name}
        </h2>

        <p className="text-slate-400 leading-relaxed text-sm">
          {data.Description.slice(0, 150)}...
        </p>

        <div className="flex flex-wrap  gap-2 mt-1">
          {data.Technologies?.map((Skill, index) => (
            <span
              key={index}
              className="
                flex items-center gap-2
                bg-slate-950/60 border border-slate-800
                rounded-full py-1 px-3
              "
            >
              {Skill.link && (
                <Image
                  src={Skill.link}
                  width={15}
                  height={15}
                  alt={Skill.name}
                  className="aspect-square opacity-80"
                />
              )}
              <p className="text-xs text-slate-400">{Skill.name}</p>
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <Link href={data.url} target="_blank">
            <Button className="bg-slate-700 hover:bg-slate-600 text-white flex items-center gap-2">
              <ExternalLink size={16} />
              Visit project
            </Button>
          </Link>

          {data.GithubLink && (
            <Link href={data.GithubLink} target="_blank">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white flex items-center gap-2">
                <GithubIcon size={16} />
                Github link
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
