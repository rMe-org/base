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
              src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/14341ca1e2b5dc0f820889de37ea64b5.png"
              alt="Simon's Profile"
              className="w-full h-full object-contain bg-white dark:bg-zinc-900 p-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
