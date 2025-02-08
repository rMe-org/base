"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Play, Settings2, Save } from "lucide-react";

type Layer = {
  neurons: number;
  activation: "relu" | "sigmoid" | "tanh";
};

export function ModelArchitectureEditor() {
  const [layers, setLayers] = useState<Layer[]>([
    { neurons: 2, activation: "relu" },
    { neurons: 4, activation: "relu" },
    { neurons: 4, activation: "relu" },
    { neurons: 1, activation: "sigmoid" }
  ]);

  const addLayer = () => {
    setLayers([...layers, { neurons: 4, activation: "relu" }]);
  };

  const removeLayer = (index: number) => {
    if (layers.length > 2) {
      setLayers(layers.filter((_, i) => i !== index));
    }
  };

  const updateLayer = (index: number, updates: Partial<Layer>) => {
    setLayers(
      layers.map((layer, i) => 
        i === index ? { ...layer, ...updates } : layer
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="notion-block p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Model Architecture Editor</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={addLayer}
            className="p-2 rounded-lg hover:bg-secondary/80 transition-colors"
            title="Add Layer"
          >
            <Plus className="w-5 h-5" />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Architecture
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="notion-block p-4 flex items-center gap-4 mb-4"
          >
            <div className="flex-1">
              <label className="block text-sm text-muted-foreground mb-2">
                Neurons
              </label>
              <input
                type="number"
                value={layer.neurons}
                onChange={(e) => updateLayer(index, { neurons: parseInt(e.target.value) })}
                min={1}
                max={32}
                className="w-24 px-3 py-2 rounded-lg bg-secondary border"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-muted-foreground mb-2">
                Activation
              </label>
              <select
                value={layer.activation}
                onChange={(e) => updateLayer(index, { activation: e.target.value as Layer["activation"] })}
                className="w-full px-3 py-2 rounded-lg bg-secondary border"
              >
                <option value="relu">ReLU</option>
                <option value="sigmoid">Sigmoid</option>
                <option value="tanh">Tanh</option>
              </select>
            </div>
            {layers.length > 2 && (
              <button
                onClick={() => removeLayer(index)}
                className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                title="Remove Layer"
              >
                <Minus className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-background rounded-lg border border-border">
        <h4 className="text-lg font-semibold mb-4">Architecture Preview</h4>
        <div className="flex flex-wrap items-center gap-4 overflow-x-auto">
          {layers.map((layer, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-lg mb-2">
                <span className="text-lg font-bold">{layer.neurons}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {layer.activation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
