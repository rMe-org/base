"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { playlists } from "@/data/playlists";
import type { Playlist } from "@/types/music";

export default function HomePage() {
  const [playlistsData, setPlaylistsData] = useState<Playlist[]>(playlists);

  useEffect(() => {
    // Update playlists when localStorage changes
    const handleStorageChange = () => {
      const storedPlaylists = localStorage.getItem('playlists');
      if (storedPlaylists) {
        setPlaylistsData(JSON.parse(storedPlaylists));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      <section className="bg-gradient-to-b from-purple-800/80 via-purple-900/40 to-transparent px-6 pt-24 pb-8 backdrop-blur-sm">
        <h1 className="text-3xl font-bold">Good afternoon</h1>
        
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {playlistsData.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl bg-white/5 transition-all hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20"
            >
              <Image
                src={playlist.imageUrl}
                width={80}
                height={80}
                alt={playlist.name}
              />
              <strong>{playlist.name}</strong>
              
              <button className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black opacity-0 shadow-lg transition-all hover:scale-105 group-hover:opacity-100">
                <Play className="ml-1" />
              </button>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold">Made for You</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {playlistsData.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group relative rounded-xl bg-zinc-800/50 p-4 hover:bg-zinc-800/70 transition-all ring-1 ring-white/10 hover:ring-white/20 backdrop-blur-xl"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src={playlist.imageUrl}
                  fill
                  className="object-cover"
                  alt={playlist.name}
                />
              </div>
              
              <button className="absolute right-4 top-[40%] flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-green-500 text-black opacity-0 shadow-lg transition-all hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100">
                <Play className="ml-1" />
              </button>

              <strong className="mt-4 block text-sm font-semibold">{playlist.name}</strong>
              <span className="mt-1 block text-sm text-zinc-400">{playlist.owner}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
