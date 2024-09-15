import React from "react";
import { SkillJSON, SoftwareJSON } from "@/lib/constants";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Skills() {
  return (
    <div
      id="Skills"
      className="min-h-screen w-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(30%2c 41%2c 59%2c 1)'%3e%3c/rect%3e%3cpath d='M213.63 660.21C402.37 657.07 552.14 427.13 929.72 420.79 1307.31 414.45 1456.97 183.19 1645.82 179.99' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M603.25 572.95C730.93 522.06 648.42 150.01 929.91 130.74 1211.41 111.47 1417.28 13.61 1583.24 13.14' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M791.04 627.17C880.71 611.76 826.82 408.73 1067.51 390.46 1308.2 372.19 1468.07 139.08 1620.44 132.86' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M776.55 568.75C887.21 568.67 982.41 523.01 1216.27 518.11 1450.13 513.21 1527.56 259.68 1655.99 249.31' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M198.38 617.1C313.8 616 420.63 495.04 643.64 495.02 866.65 495 866.27 565.02 1088.9 565.02 1311.53 565.02 1421.48 495.23 1534.16 495.02' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <div className="pt-20 pb-10">
        <p className="text-4xl text-center font-bold text-white">Technical</p>
        <p className="text-center text-slate-300 p-4">
          As a versatile developer, I design and build impactful digital
          solutions with a wide array of modern technologies and frameworks.
        </p>
      </div>

      <div className="p-5">
        <div className="p-5 rounded-3xl bg-black md:w-2/3 m-auto mb-5">
          <p className="text-2xl font-semibold pb-3 text-white">
            Technologies I love to build with
          </p>
          <p className=" text-slate-300">
            I deeply enjoy solving problems through code. From the front end all
            the way to the back end and the APIs in-between. No project is too
            challenging for me.
          </p>
          <div className="flex items-center justify-start flex-wrap py-10">
            {SkillJSON?.map((Skill, index) => {
              return (
                <Button key={index} variant={"secondary"} className="m-2 gap-2">
                  {Skill.link && (
                    <Image
                      src={Skill.link}
                      width={20}
                      height={20}
                      className="aspect-square"
                      alt={Skill.name}
                    />
                  )}
                  <p>{Skill.name}</p>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-black md:w-2/3 m-auto my-5">
          <p className="text-2xl font-semibold pb-3 text-white">
            Software I love to work with
          </p>
          <p className=" text-slate-300">
            With over 20 years of experience creating digital assets, I have a
            deep and intuitive understanding of how the interfaces of the best
            software products in the world are designed. This is just some of
            the software I have used over that time.
          </p>
          <div className="flex items-center justify-start flex-wrap py-10">
            {SoftwareJSON?.map((Skill, index) => {
              return (
                <Button key={index} variant={"secondary"} className="m-2 gap-2">
                  {Skill.link && (
                    <Image
                      src={Skill.link}
                      width={20}
                      height={20}
                      className="aspect-square"
                      alt={Skill.name}
                    />
                  )}
                  <p>{Skill.name}</p>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
