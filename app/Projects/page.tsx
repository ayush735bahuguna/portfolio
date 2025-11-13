import ProjectCard from "@/components/Project/ProjectCard";
import React from "react";
import { StaticImageData } from "next/image";
import { ProjectData } from "@/lib/constants";

export default async function Page() {
  return (
    <div className="bg-black md:px-28 max-md:px-5">
      <div className="pb-20 pt-9">
        <p className="text-4xl text-white">All Projects</p>
        <p className=" text-slate-400 pt-1">
          Over the years, I&apos;ve worked on a variety of projects
        </p>
      </div>

      <div className="flex flex-wrap pb-10 gap-2">
        {ProjectData?.map(
          (
            item: {
              Name: string;
              Description: string;
              imgUrl: StaticImageData;
              url: string;
              GithubLink: string;
              Technologies: { name: string; link: string }[];
            },
            index
          ) => {
            return <ProjectCard key={index} data={item} />;
          }
        )}
      </div>
    </div>
  );
}
