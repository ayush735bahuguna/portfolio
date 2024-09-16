import ProjectCard from "@/components/Project/ProjectCard";
import React from "react";
import { StaticImageData } from "next/image";
import { ProjectData } from "@/lib/constants";

export default async function Page() {
  return (
    <div className="bg-black">
      <div className="pt-20 pb-10">
        <p className="text-4xl text-center font-bold text-white">
          All Projects
        </p>
        <p className="text-center text-slate-300 p-4 mx-auto md:px-40 max-md:px-10">
          Over the years, I&apos;ve worked on a variety of projects that
          showcase my versatility as a developer. From building full-stack web
          applications and mobile apps to integrating Bluetooth and real-time
          monitoring systems, each project reflects my commitment to delivering
          high-quality, user-centric solutions. I approach every challenge with
          a problem-solving mindset, ensuring that my work not only meets the
          client&apos;s needs but also exceeds expectations in terms of
          functionality, performance, and design.
        </p>
      </div>
      <div className="md:p-5 flex items-center justify-center flex-wrap pb-10">
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
