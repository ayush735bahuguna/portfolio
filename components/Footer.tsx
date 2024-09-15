import { GithubIcon, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-screen flex p-5 justify-between items-center">
      <Button variant={"link"} className="text-white">
        Ayush bahuguna
      </Button>

      <Link
        href={"mailto:ayushbahuguna1122@gmail.com"}
        className="max-md:hidden"
      >
        <div className="text-sm flex gap-2 items-center justify-center">
          <Mail size={17} /> ayushbahuguna1122@gmail.com
        </div>
      </Link>

      <div>
        <div className="flex gap-6 flex-row">
          <Link href={"https://github.com/ayush735bahuguna"} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ayushbahuguna"}
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link
            href={
              "https://www.instagram.com/ayush.bahuguna.a?igsh=emw1bzFvZGZiZ3dm"
            }
            target="_blank"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
}
