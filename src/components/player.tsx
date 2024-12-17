"use client";

import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume, Maximize2 } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import Image from "next/image";

export function Player() {
  const { currentSong, isPlaying, toggle } = usePlayer();
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {currentSong ? (
            <>
              <Image 
                src={currentSong.cover}
                width={56}
                height={56}
                alt={`${currentSong.name} cover`}
                className="rounded"
              />
              <div className="flex flex-col">
                <strong className="font-normal hover:underline">{currentSong.name}</strong>
                <span className="text-xs text-zinc-400 hover:underline">{currentSong.artist}</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded bg-zinc-800" />
              <div className="flex flex-col gap-1">
                <div className="h-4 w-32 rounded bg-zinc-800" />
                <div className="h-3 w-24 rounded bg-zinc-800" />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            
            <button 
              onClick={toggle}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:scale-110"
              disabled={!currentSong}
            >
              {isPlaying ? (
                <Pause size={20} />
              ) : (
                <Play className="ml-1" size={20} />
              )}
            </button>
            
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 w-96 rounded-full bg-zinc-600">
              <div className="h-1 w-40 rounded-full bg-zinc-200" />
            </div>
            <span className="text-xs text-zinc-400">2:43</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <ListMusic size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 w-24 rounded-full bg-zinc-600">
              <div className="h-1 w-10 rounded-full bg-zinc-200" />
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </div>
    </footer>
  );
}
