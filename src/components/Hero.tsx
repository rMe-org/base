"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            AI & Machine Learning Engineer
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Mathematics turned computer science student with a growing passion for AI. 
            Currently at TKS Innovate, focusing on creating impactful projects and 
            pushing the boundaries of artificial intelligence.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="mailto:Simon.bergeron.home@gmail.com" 
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070"
              alt="AI Visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
