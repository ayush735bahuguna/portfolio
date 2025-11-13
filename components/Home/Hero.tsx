import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="md:py-24 max-md:py-20 flex justify-center items-start gap-9 flex-col md:px-28 max-md:px-5 bg-black"
      id="Home"
    >
      <Image
        src={require("@/app/assets/pic.jpeg")}
        className="w-28 aspect-square rounded-full hover:scale-95 transition-all cursor-pointer"
        alt="profile pic"
      />
      <p className="text-5xl text-whitesmoke max-md:text-3xl">
        I&apos;m Ayush Bahuguna, a full-stack developer specializing in seamless
        mobile experiences from India.
      </p>
      <p className="text-2xl text-slate-400 max-md:text-base">
        Leveraging expertise in React Native, Next js, and Node js, my approach
        blends technical robustness with intuitive design, further enriching the
        sleek, user-friendly apps I build.
      </p>

      <div className="flex items-center justify-center gap-6">
        <Link
          href={
            "https://drive.google.com/file/d/1hegdSp6lI4kw-sEzMG6tnjKGj3JYP0oq/view?usp=sharing"
          }
          target="_blank"
        >
          <Button
            variant={"secondary"}
            className="bg-slate-800 hover:bg-slate-700 text-white"
          >
            <ExternalLink size={17} />
            &nbsp; Downlod my resume
          </Button>
        </Link>

        <div className="flex gap-6 flex-row">
          <Link
            href="https://github.com/ayush735bahuguna"
            target="_blank"
            className="text-white hover:text-blue-600 transition-colors duration-300"
          >
            <GitHubLogoIcon width={20} height={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ayushbahuguna"
            target="_blank"
            className="text-white hover:text-blue-700 transition-colors duration-300"
          >
            <LinkedInLogoIcon width={20} height={20} />
          </Link>

          <Link
            href="https://www.instagram.com/ayush.bahuguna.a?igsh=emw1bzFvZGZiZ3dm"
            target="_blank"
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            <InstagramLogoIcon width={20} height={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
