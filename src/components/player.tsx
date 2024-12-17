import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export function Player() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="https://i.scdn.co/image/ab67616d00004851e8b66087164d79a1f5df6eb6"
            width={56}
            height={56}
            alt="Album cover"
            className="rounded"
          />
          <div className="flex flex-col">
            <strong className="font-normal hover:underline">Midnight Rain</strong>
            <span className="text-xs text-zinc-400 hover:underline">Taylor Swift</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:scale-110">
              <Play className="ml-1" size={20} />
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
