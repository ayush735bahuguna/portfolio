import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, FileJson2Icon, FolderCodeIcon, MailIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky md:px-28 max-md:px-5 top-0 backdrop-blur-sm h-14 bg-slate-950/65 p-5 flex justify-between items-center gap-4 border-b-2 border-gray-900 overflow-x-scroll overflow-y-hidden z-50">
      <Link href={"/#Home"}>
        <p>Ayush bahuguna</p>
      </Link>
      <div>
        <Link
          href={
            "https://drive.google.com/file/d/1hegdSp6lI4kw-sEzMG6tnjKGj3JYP0oq/view?usp=sharing"
          }
          target="_blank"
        >
          <Button variant={"link"} className="text-white gap-2">
            <FileJson2Icon size={17} />
            <p className="max-sm:hidden">Resume</p>
          </Button>
        </Link>

        <Link href={"/Projects/#"}>
          <Button variant={"link"} className="text-white gap-2">
            <FolderCodeIcon size={17} />

            <p className="max-sm:hidden">Projects</p>
          </Button>
        </Link>

        <Link href={"/Techstack/#"}>
          <Button variant={"link"} className="text-white gap-2">
            <Code size={17} />
            <p className="max-sm:hidden">Tech Stack</p>
          </Button>
        </Link>
        <Link href={"/Contact/#"}>
          <Button variant={"link"} className="text-white gap-2">
            <MailIcon size={17} />
            <p className="max-sm:hidden">Contact</p>
          </Button>
        </Link>
      </div>
    </nav>
  );
}
