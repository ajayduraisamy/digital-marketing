"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Testimonials /> 
      <Contact />
    </main>
  );
}
