"use client";

import { Song } from "@/types/music";
import { createContext, useContext, useState } from "react";

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  play: (song: Song) => void;
  pause: () => void;
  toggle: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const toggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContext.Provider value={{ currentSong, isPlaying, play, pause, toggle }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
