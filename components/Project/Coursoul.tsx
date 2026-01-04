import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useRef } from "react";

export default function Coursoul({
  Data,
  landscape = false,
}: {
  Data: StaticImageData[];
  landscape: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  if (!Data) return null;
  return (
    <div className="flex items-center justify-center flex-col mt-16 group/carousel">
      <div
        id="scrollbar"
        ref={containerRef}
        className="flex-shrink-0 flex md:w-full max-md:w-full overflow-y-hidden overflow-x-scroll scroll-smooth no-scrollbar gap-4 px-2"
      >
        {Data.map((e: StaticImageData, i: number) => {
          return (
            <div
              key={i}
              ref={slideRef}
              className={cn(
                "h-auto flex items-center justify-between rounded-[2rem] flex-col flex-shrink-0 relative overflow-hidden border border-slate-800 shadow-2xl hover:border-slate-500 transition-all duration-500",
                landscape ? "w-[450px]" : "w-[260px]"
              )}
            >
              <Image
                src={e}
                blurDataURL={e?.blurDataURL}
                alt=""
                className="object-cover w-full h-full hover:scale-105 transition-all duration-700 cursor-pointer select-none"
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 mt-8 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        <button
          className="flex items-center justify-center rounded-full w-12 h-12 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-600 active:scale-95 transition-all text-white"
          onClick={() => {
            const slideWidth = slideRef?.current?.clientWidth;
            const container = containerRef?.current;
            if (slideWidth !== undefined && container) {
              container.scrollLeft -= slideWidth + 16;
            }
          }}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="flex items-center justify-center rounded-full w-12 h-12 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-600 active:scale-95 transition-all text-white"
          onClick={() => {
            const slideWidth = slideRef?.current?.clientWidth;
            const container = containerRef?.current;
            if (slideWidth !== undefined && container) {
              container.scrollLeft += slideWidth + 16;
            }
          }}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
