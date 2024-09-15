import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Service";
import Skills from "@/components/Home/Skills";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />
      <Navbar />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
