"use client";

import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
    </main>
  );
}
