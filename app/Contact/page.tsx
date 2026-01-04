import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Github,
  InstagramIcon,
  Linkedin,
  MailIcon,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  const connectLinks = [
    {
      label: "Mail",
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: <MailIcon size={20} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      label: "Schedule a call",
      url: PERSONAL_INFO.calDotCom,
      icon: <Phone size={20} />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
    },
    ...SOCIAL_LINKS.map((link) => ({
      label: link.label,
      url: link.url,
      color:
        link.platform === "linkedin"
          ? "text-purple-400"
          : link.platform === "instagram"
          ? "text-pink-400"
          : link.platform === "github"
          ? "text-slate-300"
          : "text-blue-400",
      bg:
        link.platform === "linkedin"
          ? "bg-purple-400/10"
          : link.platform === "instagram"
          ? "bg-pink-400/10"
          : link.platform === "github"
          ? "bg-slate-400/10"
          : "bg-blue-400/10",
      border:
        link.platform === "linkedin"
          ? "border-purple-400/20"
          : link.platform === "instagram"
          ? "border-pink-400/20"
          : link.platform === "github"
          ? "border-slate-400/20"
          : "border-blue-400/20",
      icon:
        link.platform === "linkedin" ? (
          <Linkedin size={20} />
        ) : link.platform === "instagram" ? (
          <InstagramIcon size={20} />
        ) : link.platform === "github" ? (
          <Github size={20} />
        ) : (
          <MailIcon size={20} />
        ),
    })),
  ];

  return (
    <div className="relative min-h-screen bg-black text-white md:px-28 max-md:px-5 pt-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Inquiry
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Let&apos;s <span className="text-slate-500 italic">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl ">
            Whether it&apos;s brainstorming a new project, discussing design
            optimizations, or just sharing creative insights, I&apos;m always
            excited to collaborate and build something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {connectLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              target="_blank"
              className={cn(
                "flex items-center rounded-3xl p-6 transition-all duration-300 group gap-4 border",
                item.bg,
                item.border,
                "hover:scale-[1.02] hover:bg-opacity-20"
              )}
            >
              <div className={cn("p-3 rounded-2xl bg-black/40 ", item.color)}>
                {item.icon}
              </div>
              <span className="flex-1 text-lg font-bold text-white">
                {item.label}
              </span>
              <span className="ml-auto text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                <ChevronRight size={20} />
              </span>
            </Link>
          ))}
        </div>

        {/* <div className="relative p-px rounded-[2.5rem] bg-gradient-to-b from-slate-700 to-transparent mb-32">
          <div className="bg-[#050505] rounded-[2.4rem] p-10 md:p-16">
            <h2 className="text-3xl font-black mb-8 text-white text-center md:text-left">
              Drop a Message
            </h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">
                    Your Name
                  </label>
                  <input
                    className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl w-full outline-none text-white placeholder-slate-600 focus:border-blue-500/50 transition-all font-medium"
                    type="text"
                    placeholder="Ayush Bahuguna"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">
                    Email Address
                  </label>
                  <input
                    className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl w-full outline-none text-white placeholder-slate-600 focus:border-blue-500/50 transition-all font-medium"
                    type="email"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">
                  Message
                </label>
                <textarea
                  className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl w-full outline-none min-h-[150px] resize-none text-white placeholder-slate-600 focus:border-blue-500/50 transition-all font-medium"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-white text-black hover:bg-slate-200 transition-all font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}
