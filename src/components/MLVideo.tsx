"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw } from "lucide-react";

export function MLVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Failed to access camera. Please allow camera access.");
      }
    };

    startCamera();

    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    return () => {
      // Clean up video stream when component unmounts
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    };

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const processFrame = () => {
      if (!ctx || !video || !canvas) return;
      
      // Draw the video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Convert to black and white cartoon style
      for (let i = 0; i < data.length; i += 4) {
        // Get RGB values
        const r = data[i] ?? 0;
        const g = data[i + 1] ?? 0;
        const b = data[i + 2] ?? 0;
        
        // Convert to grayscale
        const gray = (r + g + b) / 3;
        
        // Apply threshold for cartoon effect
        const threshold = 128;
        const value = gray > threshold ? 255 : 0;
        
        // Set RGB values to black or white
        data[i] = value;     // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
      }
      
      // Put the modified image data back
      ctx.putImageData(imageData, 0, 0);
      
      if (isPlaying) {
        requestAnimationFrame(processFrame);
      }
    };

    if (video) {
      video.addEventListener('play', () => {
        processFrame();
      });

      return () => {
        video.removeEventListener('play', processFrame);
      };
    }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    } else {
      navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
      }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch(err => {
        console.error("Error accessing camera:", err);
        setError("Failed to access camera. Please allow camera access.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background border border-border p-6 rounded-lg shadow-sm dark:shadow-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">ML Video Processing</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
            className="p-2 rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative aspect-video bg-black/5 rounded-lg overflow-hidden">
        {error ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-destructive">{error}</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="hidden"
            autoPlay
            playsInline
            muted
            onError={(e) => {
              console.error("Camera access error:", e);
              setError("Failed to access camera. Please allow camera access.");
            }}
            onLoadedData={() => {
              setIsLoading(false);
              setError(null);
            }}
          />
        )}
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
}
