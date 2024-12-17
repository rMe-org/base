"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { CreatePlaylistModal } from "./create-playlist-modal";
import { createPlaylist } from "@/data/playlists";

export function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <aside className="flex w-[350px] flex-col gap-2 min-h-0">
      <div className="rounded-lg bg-zinc-900/90 p-6 backdrop-blur-xl">
        <nav className="space-y-2">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-50"
          >
            <Home className="h-6 w-6" />
            Home
          </Link>
          <Link 
            href="/search" 
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-50"
          >
            <Search className="h-6 w-6" />
            Search
          </Link>
        </nav>
      </div>
      
      <div className="flex flex-1 flex-col gap-4 rounded-lg bg-zinc-900 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Library className="h-6 w-6" />
            <span className="font-semibold">Your Library</span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-zinc-400 hover:text-zinc-100"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-zinc-800/50 p-4">
            <strong className="text-sm font-semibold">Create your first playlist</strong>
            <p className="mt-2 text-xs text-zinc-400">It's easy, we'll help you</p>
            <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:scale-105">
              Create playlist
            </button>
          </div>

          <div className="rounded-lg bg-zinc-800/50 p-4">
            <strong className="text-sm font-semibold">Let's find some podcasts to follow</strong>
            <p className="mt-2 text-xs text-zinc-400">We'll keep you updated on new episodes</p>
            <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:scale-105">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
      <CreatePlaylistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(name, description) => {
          createPlaylist(name, description);
        }}
      />
    </aside>
  );
}
