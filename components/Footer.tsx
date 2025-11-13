"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="bg-slate-900/70">
      {pathname !== "/Contact" && (
        <div className="flex flex-col p-7 py-14 border-b border-slate-800 gap-10 w-full md:px-28 max-md:px-5">
          <div>
            <p className="text-4xl">Interested in connecting?</p>
            <p className="pt-1 text-slate-400">
              Let’s talk projects, collaborations, or anything design!
            </p>
          </div>
          <Button className="bg-slate-800 hover:bg-slate-700 w-fit">
            Schedule a call
          </Button>
        </div>
      )}

      <div className="p-5">
        <Link href={"mailto:ayushbahuguna1122@gmail.com"}>
          <div className="text-sm flex gap-2 items-center justify-center">
            <Mail size={17} /> ayushbahuguna1122@gmail.com
          </div>
        </Link>
      </div>
    </div>
  );
}
