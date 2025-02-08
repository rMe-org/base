"use client";

import { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import { motion } from "framer-motion";

export function NeuralNetworkVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const model = tf.sequential({
      layers: [
        tf.layers.dense({ units: 4, inputShape: [2], activation: "relu" }),
        tf.layers.dense({ units: 4, activation: "relu" }),
        tf.layers.dense({ units: 1, activation: "sigmoid" })
      ]
    });

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const drawNetwork = () => {
      if (!ctx || !canvasRef.current) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const layers = [2, 4, 4, 1];
      const spacing = canvasRef.current.width / (layers.length + 1);
      const nodeRadius = 15;

      layers.forEach((nodes, layerIndex) => {
        const x = spacing * (layerIndex + 1);
        const heightSpacing = canvasRef.current!.height / (nodes + 1);

        for (let i = 0; i < nodes; i++) {
          const y = heightSpacing * (i + 1);
          
          // Draw node
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#3b82f6";
          ctx.fill();
          
          // Draw connections to next layer
          if (layerIndex < layers.length - 1) {
            const nextX = spacing * (layerIndex + 2);
            const nextLayerIndex = layerIndex + 1;
            if (nextLayerIndex >= layers.length) return;
            const nextNodes = Number(layers[nextLayerIndex] || 0);
            const nextHeightSpacing = canvasRef.current!.height / (nextNodes + 1);

            for (let j = 0; j < nextNodes; j++) {
              const nextY = nextHeightSpacing * (j + 1);
              ctx.beginPath();
              ctx.moveTo(x + nodeRadius, y);
              ctx.lineTo(nextX - nodeRadius, nextY);
              ctx.strokeStyle = "#64748b";
              ctx.stroke();
            }
          }
        }
      });
    };

    drawNetwork();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/30 p-6 rounded-xl"
    >
      <h3 className="text-2xl font-semibold mb-4">Neural Network Architecture</h3>
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={300} 
        className="w-full bg-background rounded-lg"
      />
    </motion.div>
  );
}
