"use client";

import { Song } from "@/types/music";
import { createContext, useContext, useState, useEffect } from "react";
import { playlists } from "@/data/playlists";
import type { Timeout } from "node";

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  isShuffling: boolean;
  isRepeating: boolean;
  play: (song: Song) => void;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  playNext: () => void;
  playPrevious: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  // Simulate progress updates when playing
  useEffect(() => {
    let interval: Timeout;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= currentSong.duration) {
            if (isRepeating) {
              return 0;
            } else {
              playNext();
              return 0;
            }
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, isRepeating]);

  const play = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const toggle = () => {
    setIsPlaying(!isPlaying);
  };

  const seek = (time: number) => {
    setProgress(time);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  const playNext = () => {
    if (!currentSong) return;
    
    const currentPlaylist = playlists.find(p => 
      p.songs.some(s => s.id === currentSong.id)
    );
    
    if (!currentPlaylist) return;
    
    const currentIndex = currentPlaylist.songs.findIndex(s => s.id === currentSong.id);
    let nextIndex;
    
    if (isShuffling) {
      nextIndex = Math.floor(Math.random() * currentPlaylist.songs.length);
    } else {
      nextIndex = (currentIndex + 1) % currentPlaylist.songs.length;
    }
    
    play(currentPlaylist.songs[nextIndex]);
  };

  const playPrevious = () => {
    if (!currentSong) return;
    
    const currentPlaylist = playlists.find(p => 
      p.songs.some(s => s.id === currentSong.id)
    );
    
    if (!currentPlaylist) return;
    
    const currentIndex = currentPlaylist.songs.findIndex(s => s.id === currentSong.id);
    let prevIndex;
    
    if (isShuffling) {
      prevIndex = Math.floor(Math.random() * currentPlaylist.songs.length);
    } else {
      prevIndex = currentIndex === 0 ? currentPlaylist.songs.length - 1 : currentIndex - 1;
    }
    
    play(currentPlaylist.songs[prevIndex]);
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
