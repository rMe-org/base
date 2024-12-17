"use client";

import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume, Maximize2, Minimize2 } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import Image from "next/image";

export function Player() {
  const { 
    currentSong, 
    isPlaying, 
    progress, 
    volume,
    isShuffling,
    isRepeating,
    isFullScreen,
    isMiniPlayer,
    toggle,
    seek,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    toggleFullScreen,
    toggleMiniPlayer,
    playNext,
    playPrevious
  } = usePlayer();
  return (
    <footer className={`border-t border-white/5 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 px-6 py-4 backdrop-blur-xl shadow-xl ${
      isFullScreen ? 'fixed inset-0 z-50 flex flex-col justify-center border-none' : ''
    } ${
      isMiniPlayer ? 'fixed bottom-4 right-4 z-50 w-80 rounded-lg border shadow-lg' : ''
    }`}>
      <div className={`flex items-center justify-between ${
        isFullScreen ? 'max-w-screen-xl mx-auto w-full' : ''
      }`}>
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
            <button
              onClick={toggleShuffle}
              className={`text-zinc-200 transition-colors ${isShuffling ? 'text-green-500' : 'hover:text-zinc-100'}`}
            >
              <Shuffle size={20} />
            </button>

            <button
              onClick={playPrevious}
              className="text-zinc-200 hover:text-zinc-100"
              disabled={!currentSong}
            >
              <SkipBack size={20} />
            </button>
            
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
            
            <button
              onClick={playNext}
              className="text-zinc-200 hover:text-zinc-100"
              disabled={!currentSong}
            >
              <SkipForward size={20} />
            </button>

            <button
              onClick={toggleRepeat}
              className={`text-zinc-200 transition-colors ${isRepeating ? 'text-green-500' : 'hover:text-zinc-100'}`}
            >
              <Repeat size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">
              {Math.floor(progress / 60)}:{String(progress % 60).padStart(2, '0')}
            </span>
            <div 
              className="group relative h-1 w-96 rounded-full bg-zinc-600"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                if (currentSong) {
                  seek(Math.floor(currentSong.duration * percent));
                }
              }}
            >
              <div 
                className="h-1 rounded-full bg-zinc-200 group-hover:bg-green-500"
                style={{ width: currentSong ? `${(progress / currentSong.duration) * 100}%` : '0%' }}
              />
            </div>
            <span className="text-xs text-zinc-400">
              {currentSong ? `${Math.floor(currentSong.duration / 60)}:${String(currentSong.duration % 60).padStart(2, '0')}` : '0:00'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <ListMusic size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div 
              className="group relative h-1 w-24 rounded-full bg-zinc-600"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                setVolume(Math.max(0, Math.min(1, percent)));
              }}
            >
              <div 
                className="h-1 rounded-full bg-zinc-200 group-hover:bg-green-500"
                style={{ width: `${volume * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleMiniPlayer}
              className={`text-zinc-200 transition-colors ${isMiniPlayer ? 'text-green-500' : 'hover:text-zinc-100'}`}
            >
              <Minimize2 size={20} />
            </button>
            <button 
              onClick={toggleFullScreen}
              className={`text-zinc-200 transition-colors ${isFullScreen ? 'text-green-500' : 'hover:text-zinc-100'}`}
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
