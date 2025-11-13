import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightFromCircleIcon, GithubIcon } from "lucide-react";

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
      className="bg-slate-900/70 rounded-2xl flex flex-col
       items-center justify-between max-md:justify-center flex-wrap-reverse overflow-hidden md:w-[48%]"
    >
      <Image src={data.imgUrl} className="h-auto contain m-auto" alt="" />

      <div className="rounded-lg p-4 flex gap-5 flex-col">
        <div style={{ fontWeight: 700 }} className="text-2xl text-white">
          {data.Name}
        </div>
        <p className="text-slate-400">{data.Description.slice(0, 150)}...</p>

        <div className="flex flex-wrap gap-2">
          {data?.Technologies?.map(
            (Skill: { name: string; link: string }, index: number) => {
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
            }
          )}
        </div>

        <div className="flex gap-3">
          <Link href={data.url} target="_blank">
            <Button
              variant={"secondary"}
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <ArrowUpRightFromCircleIcon size={17} /> &nbsp; Visit
            </Button>
          </Link>
          {data.GithubLink && (
            <Link href={data.GithubLink} target="_blank">
              <Button
                variant={"secondary"}
                className="bg-gray-700 hover:bg-gray-600 text-white"
              >
                <GithubIcon size={17} /> &nbsp; Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
