import { Button } from "@/components/ui/button";
import { ArrowUpRightFromCircleIcon, GithubIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
  name,
  description,
  Technologies,
  link,
  GithubLink,
  imageUrl,
  visiblity,
}: {
  name: string;
  description: string;
  Technologies: { name: string; link: string }[];
  link: string;
  GithubLink: string;
  imageUrl: string | StaticImageData;
  visiblity: "public" | "private";
}) {
  return (
    <div className=" bg-slate-800 rounded-2xl p-5 my-4 flex flex-row items-center justify-between  flex-wrap-reverse md:mx-10">
      <div className="sm:w-1/2 max-sm:w-full">
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

        <div className="flex gap-3 pt-2 ps-3">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            height={20}
            width={20}
            alt=""
            className="invert"
          />
          <p className="text-sm text-slate-300">
            {visiblity === "public" ? "Public" : "Private"} repository
          </p>
        </div>

        <div className="flex gap-3 py-5 ps-3">
          {link && (
            <Link href={link} target="_blank">
              <Button variant={"secondary"}>
                <ArrowUpRightFromCircleIcon size={17} /> &nbsp; Visit
              </Button>
            </Link>
          )}
          {(visiblity || GithubLink) === "public" && (
            <Button variant={"secondary"}>
              <GithubIcon size={17} /> &nbsp; Code
            </Button>
          )}
        </div>
      </div>
      <Image
        src={imageUrl}
        className="sm:w-1/2 max-sm:w-full h-auto max-w-[500px]"
        alt=""
      />
    </div>
  );
}
