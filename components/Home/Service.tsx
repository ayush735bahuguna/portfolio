import { Code2, Headset, Shield, StarsIcon, User } from "lucide-react";
import React from "react";
import ServiceSVG from "@/app/assets/Service.svg";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center lg:flex-row lg:px-40 max-lg:px-5 border-b-2 border-gray-800 pb-20 bg-black text-white max-lg:flex-col">
      <div className="flex justify-between max-lg:items-center flex-col items-start lg:w-1/2">
        <p className="mt-10 mb-5 text-4xl cursor-scale small text-balance font-semibold max-lg:px-5  max-lg:text-center ">
          Here’s what you can expect from me
        </p>

        <div>
          <div className="p-1 flex gap-2 m-2 ml-0">
            <Code2 color="blue" />
            <p>Website and Android Development</p>
          </div>
          <div className="p-1 flex gap-2 m-2 ml-0">
            <User color="blue" />
            <p>User experience & user interface design</p>
          </div>
          <div className="p-1 flex gap-2 m-2 ml-0">
            <Headset color="blue" />
            <p>Regular updates and clear communication</p>
          </div>
          <div className="p-1 flex gap-2 m-2 ml-0">
            <Shield color="blue" />
            <p>Security and privacy</p>
          </div>
          <div className="p-1 flex gap-2 m-2 ml-0">
            <StarsIcon color="blue" />
            <p>Clean and efficient code</p>
          </div>
        </div>
      </div>

      <Image
        src={ServiceSVG}
        alt="Service image"
        className="pt-10 max-w-[500px] max-lg:w-full"
      />
    </div>
  );
}
