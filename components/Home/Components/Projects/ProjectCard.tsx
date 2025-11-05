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
    <Link href={slug ? "/Project?slug=" + slug : link}>
      <div className=" bg-slate-800 rounded-2xl p-5 my-4 flex flex-row items-center justify-between max-md:justify-center flex-wrap-reverse md:mx-10">
        <div className="md:w-1/2 max-md:w-full">
          <p className="text-2xl font-semibold text-white">{name}</p>
          <p className="text-slate-400 py-2">{description}</p>
          <div className="flex flex-wrap">
            {Technologies?.map((Skill, index) => {
              return (
                <span
                  key={index}
                  className="m-2 gap-2 flex justify-center items-center bg-slate-900 rounded-md w-fit px-2 py-1"
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
        <Image
          src={imageUrl}
          className="md:w-1/2 max-md:w-full h-auto max-w-[500px]"
          alt=""
        />
      </div>
    </Link>
  );
}
