import { cn } from "@/lib/utils";
import { InstagramIcon, Linkedin, MailIcon, Phone } from "lucide-react";
import React from "react";

export default function Page() {
  const connectLinks = [
    {
      label: "Mail",
      url: "mailto:ayushbahuguna1122@gmail.com",
      icon: <MailIcon />,
      color: "text-gray-400",
    },
    {
      label: "Schedule a call",
      url: "#",
      icon: <Phone />,
      color: "text-yellow-400",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ayushbahuguna",
      icon: <Linkedin />,
      color: "text-purple-400",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/ayush.bahuguna.a?igsh=emw1bzFvZGZiZ3dm",
      icon: <InstagramIcon />,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="md:px-28 max-md:px-5 min-h-screen flex flex-col items-center text-white">
      <div className="pt-9">
        <div className="pb-20">
          <p className="text-4xl font-bold text-white">Let&apos;s Connect!</p>
          <p className=" text-slate-400 pt-1">
            Whether it&apos;s brainstorming a new project, discussing design
            optimizations, or just sharing creative insights, I’m always excited
            to collaborate. Reach out to me and let’s craft something
            exceptional — together!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
        {connectLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            className={cn(
              "flex items-center bg-slate-900 rounded-xl p-4 shadow hover:bg-slate-800 transition group gap-3",
              item.color
            )}
          >
            {item.icon}
            <span className="flex-1 text-gray-100">{item.label}</span>
            <span className="ml-auto text-gray-400 group-hover:text-gray-300">
              &rarr;
            </span>
          </a>
        ))}
      </div>

      <form className="w-full bg-slate-900/70 max-md:bg-black rounded-xl p-8 max-md:p-0 shadow text-white mt-10 mb-28">
        <h2 className="text-lg font-semibold mb-4">Get in touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            className="bg-slate-800 p-3 rounded w-full outline-none text-white placeholder-gray-400"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-slate-800 p-3 rounded w-full outline-none text-white placeholder-gray-400"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className="bg-slate-800 p-3 rounded w-full outline-none mb-4 h-24 resize-none text-white placeholder-gray-400"
          placeholder="Type something here..."
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-xl mt-2 bg-slate-800 hover:bg-slate-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
