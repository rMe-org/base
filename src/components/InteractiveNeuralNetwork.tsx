"use client";

import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw } from "lucide-react";

export function InteractiveNeuralNetwork() {
  const [isTraining, setIsTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<tf.Sequential>();

  useEffect(() => {
    if (!containerRef.current) return;

    const generateData = (numPoints: number) => {
      const points: number[][] = [];
      const labels: number[] = [];
      
      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        points.push([x, y]);
        labels.push(x * x + y * y < 0.5 ? 1 : 0);
      }

      return {
        points,
        labels
      };
    };

    const data = generateData(200);
    const xs = tf.tensor2d(data.points);
    const ys = tf.tensor1d(data.labels);

    const model = tf.sequential({
      layers: [
        tf.layers.dense({ units: 10, inputShape: [2], activation: "relu" }),
        tf.layers.dense({ units: 10, activation: "relu" }),
        tf.layers.dense({ units: 1, activation: "sigmoid" })
      ]
    });

    model.compile({
      optimizer: tf.train.adam(0.1),
      loss: "binaryCrossentropy",
      metrics: ["accuracy"]
    });

    modelRef.current = model;

    const surface = tfvis.visor().surface({ name: "Training Data", tab: "Data" });
    const values = data.points.map((p, i) => ({
      x: p[0],
      y: p[1],
      label: data.labels[i]
    }));
    
    tfvis.render.scatterplot(
      surface,
      { values: [values] },
      {
        xLabel: "X",
        yLabel: "Y",
        height: 300,
        width: 400,
      }
    );

    return () => {
      xs.dispose();
      ys.dispose();
      model.dispose();
    };
  }, []);

  const startTraining = async () => {
    if (!modelRef.current) return;
    setIsTraining(true);

    const data = generateData(200);
    const xs = tf.tensor2d(data.points);
    const ys = tf.tensor1d(data.labels);

    await modelRef.current.fit(xs, ys, {
      epochs: 50,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          setEpoch(epoch);
          if (logs?.loss) setLoss(logs.loss);
        }
      }
    });

    setIsTraining(false);
    xs.dispose();
    ys.dispose();
  };

  const generateData = (numPoints: number) => {
    const points: number[][] = [];
    const labels: number[] = [];
    
    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      points.push([x, y]);
      labels.push(x * x + y * y < 0.5 ? 1 : 0);
    }

    return {
      points,
      labels
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/30 p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Interactive Neural Network</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => !isTraining && startTraining()}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isTraining ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isTraining ? "Training..." : "Start Training"}
          </button>
          <button
            onClick={() => window.location.reload()}
            className="p-2 rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-background rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Current Epoch</p>
            <p className="text-2xl font-bold">{epoch}</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Loss</p>
            <p className="text-2xl font-bold">{loss.toFixed(4)}</p>
          </div>
        </div>
        <div ref={containerRef} className="bg-background rounded-lg" />
      </div>
    </motion.div>
  );
}
