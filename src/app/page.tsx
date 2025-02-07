"use client";

import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
