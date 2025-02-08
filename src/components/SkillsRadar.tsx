"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { motion, AnimatePresence } from "framer-motion";
import { Radar } from 'react-chartjs-2';
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function SkillsRadar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const data = {
    labels: [
      'Machine Learning',
      'Deep Learning',
      'Mathematics',
      'Backend Development',
      'Data Structures',
      'System Design',
    ],
    datasets: [
      {
        label: 'Skill Level',
        data: [95, 90, 95, 85, 88, 82],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        pointLabels: {
          color: 'rgb(100, 116, 139)',
          font: {
            size: 12,
          },
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View Technical Proficiency"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(true);
            }
          }}
          className="fixed top-24 right-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
        >
          Technical Proficiency
        </motion.button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-sm border-primary/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Technical Proficiency</DialogTitle>
        </DialogHeader>
        <div className="w-full max-w-md mx-auto">
          {isClient && <Radar data={data} options={options} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
