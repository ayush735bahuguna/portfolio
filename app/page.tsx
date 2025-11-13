import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import React from "react";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      {/* <Skills /> */}
      <Projects />
      {/* <Services /> */}
      {/* <Contact /> */}
    </div>
  );
}
