"use client";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants";
import { cn } from "@/lib/utils";
import { Code, FileJson2Icon, FolderCodeIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = pathname !== "/" || showNavbar;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ease-in-out transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
      )}
    >
      <nav className="flex items-center gap-2 p-2 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-full md:px-6 max-md:py-1 max-md:px-4 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all hover:border-slate-700">
        <Link href={"/#Home"}>
          <p className="font-black text-white text-lg hover:scale-110 transition-transform">
            {PERSONAL_INFO.name.split(" ")[0]}
            <span className="text-blue-500">.</span>
          </p>
        </Link>
        <div className="h-6 w-px bg-slate-800 mx-2 hidden md:block" />
        <div className="flex items-center gap-1 md:gap-2">
          <Link href={"/Projects"}>
            <Button
              variant={"ghost"}
              className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-full gap-2 h-10 px-4 transition-all"
            >
              <FolderCodeIcon size={16} />
              <span className="max-lg:hidden font-medium text-sm">
                Projects
              </span>
            </Button>
          </Link>

          <Link href={"/Techstack"}>
            <Button
              variant={"ghost"}
              className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-full gap-2 h-10 px-4 transition-all"
            >
              <Code size={16} />
              <span className="max-lg:hidden font-medium text-sm">Stack</span>
            </Button>
          </Link>

          <Link href={"/Contact"}>
            <Button
              variant={"ghost"}
              className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-full gap-2 h-10 px-4 transition-all"
            >
              <MailIcon size={16} />
              <span className="max-lg:hidden font-medium text-sm">Contact</span>
            </Button>
          </Link>

          <Link href={PERSONAL_INFO.resume} target="_blank">
            <Button className="bg-white text-black hover:bg-slate-200 rounded-full gap-2 h-10 px-6 font-bold ml-2 transition-all active:scale-95 shadow-xl">
              <FileJson2Icon size={16} />
              <span className="max-md:hidden">Resume</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
