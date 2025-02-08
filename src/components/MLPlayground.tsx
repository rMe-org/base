"use client";

import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-background rounded-lg animate-pulse" />
  ),
});
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw, Settings2 } from "lucide-react";

type ModelConfig = {
  learningRate: number;
  epochs: number;
  layers: number[];
  activation: "relu" | "sigmoid" | "tanh";
};

export function MLPlayground() {
  const [isTraining, setIsTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [config, setConfig] = useState<ModelConfig>({
    learningRate: 0.01,
    epochs: 50,
    layers: [10, 10],
    activation: "relu"
  });
  const [predictions, setPredictions] = useState<number[][]>([]);
  const modelRef = useRef<tf.Sequential>();

  const generateData = (numPoints: number) => {
    const points: number[][] = [];
    const labels: number[] = [];
    
    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * 4 - 2;
      const y = Math.random() * 4 - 2;
      points.push([x, y]);
      labels.push(Math.sin(x) * Math.cos(y) > 0 ? 1 : 0);
    }

    return { points, labels };
  };

  const createModel = () => {
    const model = tf.sequential();
    
    model.add(tf.layers.dense({
      units: config.layers[0],
      inputShape: [2],
      activation: config.activation
    }));

    for (let i = 1; i < config.layers.length; i++) {
      model.add(tf.layers.dense({
        units: config.layers[i],
        activation: config.activation
      }));
    }

    model.add(tf.layers.dense({
      units: 1,
      activation: "sigmoid"
    }));

    model.compile({
      optimizer: tf.train.adam(config.learningRate),
      loss: "binaryCrossentropy",
      metrics: ["accuracy"]
    });

    return model;
  };

  const generatePredictions = async () => {
    if (!modelRef.current) return;
    
    const gridSize = 50;
    const predictions: number[][] = [];
    
    for (let i = 0; i < gridSize; i++) {
      const row: number[] = [];
      const x = (i / gridSize) * 4 - 2;
      
      for (let j = 0; j < gridSize; j++) {
        const y = (j / gridSize) * 4 - 2;
        const pred = await modelRef.current.predict(
          tf.tensor2d([[x, y]])
        ) as tf.Tensor;
        const predData = await pred.data();
        const predValue = Array.isArray(predData) && predData.length > 0 && typeof predData[0] === 'number' ? predData[0] : 0;
        row.push(predValue);
        pred.dispose();
      }
      
      predictions.push(row);
    }
    
    setPredictions(predictions);
  };

  const startTraining = async () => {
    setIsTraining(true);
    const { points, labels } = generateData(500);
    const xs = tf.tensor2d(points);
    const ys = tf.tensor1d(labels);

    modelRef.current = createModel();

    await modelRef.current.fit(xs, ys, {
      epochs: config.epochs,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: async (epoch: number, logs?: tf.Logs) => {
          setEpoch(epoch);
          const lossValue = logs?.loss;
          const accValue = logs?.acc;
          if (typeof lossValue === 'number') setLoss(lossValue);
          if (typeof accValue === 'number') setAccuracy(accValue);
          if (epoch % 5 === 0) await generatePredictions();
        }
      }
    });

    setIsTraining(false);
    xs.dispose();
    ys.dispose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background border border-border p-6 rounded-lg shadow-sm dark:shadow-none"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">ML Model Playground</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <select
                value={config.activation}
                onChange={(e) => setConfig(prev => ({
                  ...prev,
                  activation: e.target.value as ModelConfig["activation"]
                }))}
                className="notion-input"
              >
                <option value="relu">ReLU</option>
                <option value="sigmoid">Sigmoid</option>
                <option value="tanh">Tanh</option>
              </select>
              <input
                type="number"
                value={config.learningRate}
                onChange={(e) => setConfig(prev => ({
                  ...prev,
                  learningRate: parseFloat(e.target.value)
                }))}
                step={0.001}
                min={0.001}
                max={1}
                className="w-24 px-3 py-2 rounded-lg bg-background border"
              />
            </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Current Epoch</p>
                <p className="text-2xl font-bold">{epoch}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Loss</p>
                <p className="text-2xl font-bold">{loss.toFixed(4)}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Accuracy</p>
                <p className="text-2xl font-bold">{(accuracy * 100).toFixed(1)}%</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Parameters</p>
                <p className="text-2xl font-bold">{config.layers.reduce((a, b) => a + b, 0)}</p>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4 w-full overflow-hidden">
            {typeof window !== 'undefined' && predictions.length > 0 && (
              <Plot
                data={[
                  {
                    z: predictions,
                    type: 'heatmap',
                    colorscale: 'Viridis',
                  }
                ]}
                layout={{
                  title: 'Model Predictions',
                  width: 400,
                  height: 400,
                  margin: { t: 30, r: 0, b: 30, l: 30 }
                }}
                config={{ displayModeBar: false }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Current Epoch</p>
              <p className="text-2xl font-bold">{epoch}</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Loss</p>
              <p className="text-2xl font-bold">{loss.toFixed(4)}</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Accuracy</p>
              <p className="text-2xl font-bold">{(accuracy * 100).toFixed(1)}%</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Parameters</p>
              <p className="text-2xl font-bold">{config.layers.reduce((a, b) => a + b, 0)}</p>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg p-4">
          {typeof window !== 'undefined' && predictions.length > 0 && (
            <Plot
              data={[
                {
                  z: predictions,
                  type: 'heatmap',
                  colorscale: 'Viridis',
                }
              ]}
              layout={{
                title: 'Model Predictions',
                width: 400,
                height: 400,
                margin: { t: 30, r: 0, b: 30, l: 30 } as const
              }}
              config={{ displayModeBar: false }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
