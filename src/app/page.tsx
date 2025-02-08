"use client";

import { Hero } from "@/components/Hero";
import { ArrowUpCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { NeuralNetworkVisualizer } from "@/components/NeuralNetworkVisualizer";
import { ModelArchitectureEditor } from "@/components/ModelArchitectureEditor";
import { AgentWorkflow } from "@/components/AgentWorkflow";
import { SkillsRadar } from "@/components/SkillsRadar";
import { MLPlayground } from "@/components/MLPlayground";
import { MLVideo } from "@/components/MLVideo";
import { VideoErrorBoundary } from "@/components/VideoErrorBoundary";
import { NeuralNetworkPlayground } from "@/components/NeuralNetworkPlayground";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Technical Showcase</h2>
          <div className="space-y-6 md:space-y-8">
            <AgentWorkflow />
            <ModelArchitectureEditor />
            <NeuralNetworkPlayground />
            <VideoErrorBoundary>
              <MLVideo />
            </VideoErrorBoundary>
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
