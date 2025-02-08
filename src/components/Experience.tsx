"use client";

import { motion } from "framer-motion";
import { Calendar, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Innovate Member",
      company: "The Knowledge Society (TKS)",
      period: "September 2024 - Present",
      description: "Participating in the World's top accelerator for teens, focusing on AI and innovation."
    },
    {
      title: "Web Development & Machine Learning Student",
      company: "CodeWizardsHQ",
      period: "September 2024 - Present",
      description: "Advanced studies in web development and machine learning, with recognition as a top performer."
    },
    {
      title: "Freelance Math Strategist",
      company: "Fiverr",
      period: "December 2018 - December 2020",
      description: "Coached 30+ clients in mathematical principles and strategic thinking, maintaining high client satisfaction."
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/30 p-6 rounded-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
