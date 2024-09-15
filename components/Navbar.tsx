import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileBadge, Home, MailIcon, Star } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-screen backdrop:blur-sm h-14 bg-slate-900 p-5 flex justify-start items-center gap-5 border-b-2 border-gray-800 overflow-x-scroll overflow-y-hidden z-50">
      <Link href={"#Home"}>
        <Button variant={"link"} className="text-white gap-2">
          <Home size={17} />
          <p>Home</p>
        </Button>
      </Link>

      <Link href={"#Projects"}>
        <Button variant={"link"} className="text-white gap-2">
          <FileBadge size={17} />
          <p>Projects</p>
        </Button>
      </Link>

      <Link href={"#Skills"}>
        <Button variant={"link"} className="text-white gap-2">
          <Star size={17} />
          <p>Skills</p>
        </Button>
      </Link>

      <Link href={"#Contact"}>
        <Button variant={"link"} className="text-white gap-2">
          <MailIcon size={17} />
          <p>Contact Me</p>
        </Button>
      </Link>
    </nav>
  );
}
