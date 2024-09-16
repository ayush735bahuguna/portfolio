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
    <div className="flex bg-slate-800 justify-center items-center m-1 rounded-lg w-screen max-md:flex-col-reverse">
      <div className="rounded-lg p-4 md:w-1/2">
        <div
          style={{ fontWeight: 700 }}
          className="text-2xl py-3 ms-2 text-white"
        >
          {data.Name}
        </div>
        <div className="text-sm text-slate-300 ms-2">{data.Description}</div>

        <div className="flex flex-wrap pt-4">
          {data?.Technologies?.map(
            (Skill: { name: string; link: string }, index: number) => {
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
            }
          )}
        </div>

        <div className="flex gap-3 py-5 ms-2">
          <Link href={data.url} target="_blank">
            <Button variant={"secondary"}>
              <ArrowUpRightFromCircleIcon size={17} /> &nbsp; Visit
            </Button>
          </Link>
          <Link href={data.GithubLink} target="_blank">
            <Button variant={"secondary"}>
              <GithubIcon size={17} /> &nbsp; Code
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-5 md:w-1/2 max-w-[500px]">
        <Image src={data.imgUrl} className="h-auto rounded-lg " alt="" />
      </div>
    </div>
  );
}
