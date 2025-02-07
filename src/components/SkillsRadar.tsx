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
import { Radar } from 'react-chartjs-2';
import { motion } from "framer-motion";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function SkillsRadar() {
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/30 p-6 rounded-xl relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Technical Proficiency</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          View Details
          <motion.div
            className="absolute -inset-2 border-2 border-primary rounded-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </div>
      <div className="w-full max-w-md mx-auto relative group">
        <Radar data={data} options={options} />
      </div>
    </motion.div>
  );
}
