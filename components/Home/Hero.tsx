import { Download, MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="Home"
      className="min-h-screen w-screen flex justify-center items-start flex-col md:px-40 max-md:px-5 bg-black"
    >
      <p className="text-7xl font-bold pt-5 max-md:text-5xl text-white">
        Ayush Bahuguna
      </p>
      <p className="text-7xl font-bold pt-5 text-slate-400  text-balance max-md:text-5xl">
        I design and develop innovative digital solutions.
      </p>
      <p className="pt-5 text-white">
        I am a versatile tech enthusiast — continuously evolving as a Full-stack
        developer and Android developer, driven by a passion for learning and
        creating impactful digital experiences.
      </p>
      <div className="flex items-center justify-center my-10">
        <Link href={"#Contact"}>
          <Button
            variant={"default"}
            className={
              "m-2 bg-white text-black hover:text-white hover:bg-blue-700"
            }
          >
            <MailIcon size={17} />
            &nbsp; Contact Me
          </Button>
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/1hegdSp6lI4kw-sEzMG6tnjKGj3JYP0oq/view?usp=sharing"
          }
          target="_blank"
          className={"m-2 "}
        >
          <Button variant={"secondary"} className={"m-2 bg-white"}>
            <Download size={17} /> &nbsp; Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
