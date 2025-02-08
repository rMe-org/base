"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b overflow-x-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-bold whitespace-nowrap">
          Simon Bergeron
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="#about" className="hover:text-primary/80 transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-primary/80 transition-colors">
            Experience
          </Link>
          <Link href="https://github.com" className="hover:text-primary/80 transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/simon-bergeron" className="hover:text-primary/80 transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:Simon.bergeron.home@gmail.com" className="hover:text-primary/80 transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
