"use client";

import { useEffect } from "react";
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
      className="bg-secondary/30 p-6 rounded-xl"
    >
      <h3 className="text-2xl font-semibold mb-4">Technical Proficiency</h3>
      <div className="w-full max-w-md mx-auto">
        <Radar data={data} options={options} />
      </div>
    </motion.div>
  );
}
