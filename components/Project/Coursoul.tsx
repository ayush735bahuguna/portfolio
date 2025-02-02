import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

export default function Coursoul({ Data }: { Data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  if (!Data) return null;
  return (
    <div className="flex items-center justify-center flex-col mt-10:bg-slate-900 py-5 rounded-md">
      <div
        id="scrollbar"
        ref={containerRef}
        className="flex-shrink-0 flex md:w-full max-md:w-full max-sm:mx-2 overflow-y-hidden overflow-x-scroll"
      >
        {Data.map((e: any, i: number) => {
          return (
            <div
              key={i}
              ref={slideRef}
              className="w-[220px] h-auto flex items-center justify-between flex-col m-2 flex-shrink-0 relative"
            >
              <Image
                src={e}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 my-5">
        <button
          className="text-5xl flex items-center justify-center rounded-full w-[45px] h-[45px] bg-slate-500 active:bg-slate-500/65"
          onClick={() => {
            const slideWidth = slideRef?.current?.clientWidth;
            const container = containerRef?.current;
            if (slideWidth !== undefined && container) {
              container.scrollLeft -= slideWidth;
            }
          }}
        >
          <ArrowLeft />
        </button>
        <button
          className="text-5xl flex items-center justify-center rounded-full w-[45px] h-[45px] bg-slate-500 active:bg-slate-500/65"
          onClick={() => {
            const slideWidth = slideRef?.current?.clientWidth;
            const container = containerRef?.current;
            if (slideWidth !== undefined && container) {
              container.scrollLeft += slideWidth;
            }
          }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
