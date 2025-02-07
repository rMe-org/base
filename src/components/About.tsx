"use client";

import { motion } from "framer-motion";
import { Book, Code, Trophy } from "lucide-react";

export function About() {
  const skills = [
    { icon: <Code className="w-6 h-6" />, title: "Technical Skills", items: ["Artificial Intelligence", "Machine Learning", "Python", "Web Development", "3D Graphics (Blender)"] },
    { icon: <Trophy className="w-6 h-6" />, title: "Achievements", items: ["CJMC 2023 Honors Code", "MVP of Lego Robotics Team", "Valedictorian, Class of 2022", "TKS Explore Hackathon Win"] },
    { icon: <Book className="w-6 h-6" />, title: "Publications", items: ["Mastering Reinforcement Learning", "How to Code RL Models", "Agent Go: ML in Decision-Making", "Intro to Deep Learning"] }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
