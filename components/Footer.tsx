"use client";
import { PERSONAL_INFO } from "@/constants";
import { Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="bg-[#050505] border-t border-slate-900 mt-10">
      {pathname !== "/Contact" && (
        <div className="flex flex-col md:flex-row p-10 md:py-20 gap-10 w-full md:px-28 max-md:px-5 justify-between items-center text-center md:text-left">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Ready to create something{" "}
              <span className="text-blue-500">extraordinary</span>?
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Let&apos;s talk projects, collaborations, or anything design!
            </p>
          </div>
          <Link
            href={PERSONAL_INFO.calDotCom}
            target="_blank"
            className="shrink-0"
          >
            <Button className="bg-white text-black hover:bg-slate-200 h-16 px-10 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Schedule a call
            </Button>
          </Link>
        </div>
      )}

      <div className="p-8 border-t border-slate-900 group">
        <Link href={`mailto:${PERSONAL_INFO.email}`} className="block">
          <div className="text-sm flex gap-3 items-center justify-center text-slate-500 group-hover:text-white transition-colors duration-500">
            <Mail size={16} className="text-blue-500" />
            <span className="font-bold text-xs tracking-wider">
              {PERSONAL_INFO.email}
            </span>
          </div>
        </Link>
        <p className="text-[10px] text-slate-700 text-center mt-4 uppercase tracking-[0.2em] font-bold">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
          reserved.
        </p>
      </div>
      <div className="bg-transparent h-20" />
    </div>
  );
}
