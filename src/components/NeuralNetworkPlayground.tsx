"use client";

import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Circle, Line, Text } from 'react-konva';
import * as tf from "@tensorflow/tfjs";
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw, Info } from "lucide-react";

type Neuron = {
  x: number;
  y: number;
  activation: number;
  layer: number;
};

type Connection = {
  from: Neuron;
  to: Neuron;
  weight: number;
};

export function NeuralNetworkPlayground() {
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [isTraining, setIsTraining] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<tf.Sequential>();

  const initializeNetwork = () => {
    const layers = [2, 4, 4, 1]; // Network architecture
    const newNeurons: Neuron[] = [];
    const newConnections: Connection[] = [];
    const width = 800;
    const height = 400;
    const layerSpacing = width / (layers.length + 1);

    layers.forEach((neurons, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1);
      const neuronSpacing = height / (neurons + 1);

      for (let i = 0; i < neurons; i++) {
        const y = neuronSpacing * (i + 1);
        newNeurons.push({
          x,
          y,
          activation: 0,
          layer: layerIndex,
        });
      }
    });

    // Create connections between neurons
    for (let i = 0; i < newNeurons.length; i++) {
      const neuron = newNeurons[i];
      if (!neuron) continue;
      
      const nextLayerNeurons = newNeurons.filter(n => n.layer === neuron.layer + 1);
      
      nextLayerNeurons.forEach(nextNeuron => {
        if (!nextNeuron) return;
        newConnections.push({
          from: neuron,
          to: nextNeuron,
          weight: Math.random() * 2 - 1,
        });
      });
    }

    setNeurons(newNeurons);
    setConnections(newConnections);
  };

  useEffect(() => {
    initializeNetwork();
  }, []);

  const updateNeuronActivations = (input: number[]) => {
    const newNeurons = [...neurons];
    
    // Set input layer activations
    newNeurons
      .filter(n => n.layer === 0)
      .forEach((n, i) => {
        n.activation = input[i];
      });

    // Propagate forward
    for (let layer = 1; layer < 4; layer++) {
      const layerNeurons = newNeurons.filter(n => n.layer === layer);
      const prevLayerNeurons = newNeurons.filter(n => n.layer === layer - 1);

      layerNeurons.forEach(neuron => {
        let sum = 0;
        prevLayerNeurons.forEach(prevNeuron => {
          if (!prevNeuron) return;
          const connection = connections.find(
            c => c.from === prevNeuron && c.to === neuron
          );
          if (connection) {
            sum += (prevNeuron.activation ?? 0) * (connection.weight ?? 0);
          }
        });
        const rawActivation = 1 / (1 + Math.exp(-sum)); // Sigmoid activation
        const activation = isNaN(rawActivation) ? 0 : Math.max(0, Math.min(1, rawActivation));
        neuron.activation = activation;
      });
    }

    setNeurons(newNeurons);
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    updateNeuronActivations([x, y]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/30 p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Interactive Neural Network</h3>
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="p-2 rounded-lg hover:bg-secondary/80 transition-colors"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-6 p-4 bg-background rounded-lg"
        >
          <h4 className="font-semibold mb-2">How it works:</h4>
          <p className="text-muted-foreground">
            Click anywhere on the canvas to provide input to the neural network.
            Watch as the activation values propagate through the layers, with
            darker colors representing stronger activations. The connections
            between neurons show the learned weights, with thicker lines
            indicating stronger connections.
          </p>
        </motion.div>
      )}

      <div className="relative">
        <Stage width={800} height={400}>
          <Layer>
            {/* Draw connections */}
            {connections.map((conn, i) => (
              <Line
                key={i}
                points={[conn.from.x, conn.from.y, conn.to.x, conn.to.y]}
                stroke={`rgba(100, 116, 139, ${Math.abs(conn.weight)})`}
                strokeWidth={Math.abs(conn.weight) * 3}
              />
            ))}
            
            {/* Draw neurons */}
            {neurons.map((neuron, i) => (
              <Circle
                key={i}
                x={neuron.x}
                y={neuron.y}
                radius={15}
                fill={`rgba(59, 130, 246, ${neuron.activation})`}
              />
            ))}
          </Layer>
        </Stage>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="absolute inset-0 cursor-pointer"
          width={800}
          height={400}
        />
      </div>
    </motion.div>
  );
}
