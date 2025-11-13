"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
  name,
  description,
  Technologies,
  link,
  imageUrl,
  slug,
}: {
  name: string;
  description: string;
  Technologies: { name: string; link: string }[];
  link: string;
  imageUrl: string | StaticImageData;
  slug?: string | null;
}) {
  return (
    <Link
      href={link ? link : "/Project?slug=" + slug}
      target="_blank"
      className="md:w-1/2 p-2"
    >
      <div
        className="bg-slate-900/70 rounded-2xl flex flex-col
       items-center justify-between max-md:justify-center flex-wrap-reverse overflow-hidden"
      >
        <Image src={imageUrl} className="w-1/2 h-auto contain" alt="" />

        <div className="p-5 gap-3 flex-col flex">
          <p className="text-2xl font-semibold text-white">{name}</p>
          <p className="text-slate-400">{description.slice(0, 150)}...</p>

          <div className="flex flex-wrap gap-2">
            {Technologies?.map((Skill, index) => {
              return (
                <span
                  key={index}
                  className="gap-2 flex justify-center items-center rounded-full py-1 w-fit px-2 bg-slate-950"
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
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
