"use client";

import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { NeuralNetworkVisualizer } from "@/components/NeuralNetworkVisualizer";
import { SkillsRadar } from "@/components/SkillsRadar";
import { MLPlayground } from "@/components/MLPlayground";
import { NeuralNetworkPlayground } from "@/components/NeuralNetworkPlayground";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Showcase</h2>
          <div className="space-y-8">
            <NeuralNetworkPlayground />
            <div className="grid grid-cols-2 gap-8">
              <MLPlayground />
              <SkillsRadar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
