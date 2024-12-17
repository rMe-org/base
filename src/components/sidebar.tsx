"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Library, Plus, Heart, Pin, ChevronRight } from "lucide-react";
import { CreatePlaylistModal } from "./create-playlist-modal";
import { createPlaylist, playlists } from "@/data/playlists";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pinnedPlaylists, setPinnedPlaylists] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("pinnedPlaylists");
    if (stored) {
      setPinnedPlaylists(JSON.parse(stored));
    }
  }, []);

  const togglePin = (playlistId: string) => {
    const newPinned = pinnedPlaylists.includes(playlistId)
      ? pinnedPlaylists.filter(id => id !== playlistId)
      : [...pinnedPlaylists, playlistId];
    
    setPinnedPlaylists(newPinned);
    localStorage.setItem("pinnedPlaylists", JSON.stringify(newPinned));
  };

  return (
    <aside className="flex w-[350px] flex-col gap-3 min-h-0">
      <div className="rounded-lg bg-zinc-900/80 p-6 backdrop-blur-xl shadow-xl ring-1 ring-white/5">
        <nav className="space-y-2">
          <Link 
            href="/" 
            className={cn(
              "flex items-center gap-3 text-sm font-semibold rounded-md p-2 transition-all",
              pathname === "/" 
                ? "bg-white/10 text-white" 
                : "text-zinc-200 hover:text-zinc-50 hover:bg-white/5"
            )}
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link 
            href="/search" 
            className={cn(
              "flex items-center gap-3 text-sm font-semibold rounded-md p-2 transition-all",
              pathname === "/search"
                ? "bg-white/10 text-white"
                : "text-zinc-200 hover:text-zinc-50 hover:bg-white/5"
            )}
          >
            <Search className="h-5 w-5" />
            Search
          </Link>
        </nav>
      </div>
      
      <div className="flex flex-1 flex-col rounded-lg bg-zinc-900/80 p-6 shadow-xl ring-1 ring-white/5 backdrop-blur-xl overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Library className="h-5 w-5" />
            <span className="font-semibold">Your Library</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="p-2 text-zinc-400 hover:text-zinc-100 rounded-full hover:bg-white/5 transition-all"
              title="Create playlist"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto">
          {playlists.length === 0 ? (
            <div className="flex flex-col gap-4">
              <div className="rounded-lg bg-zinc-800/50 p-4 ring-1 ring-white/5">
                <strong className="text-sm font-semibold">Create your first playlist</strong>
                <p className="mt-2 text-xs text-zinc-400">It's easy, we'll help you</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:scale-105 transition-transform"
                >
                  Create playlist
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Pinned Playlists */}
              {pinnedPlaylists.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-zinc-400 mb-2">Pinned</h3>
                  {playlists
                    .filter(playlist => pinnedPlaylists.includes(playlist.id))
                    .map(playlist => (
                      <Link
                        key={playlist.id}
                        href={`/playlist/${playlist.id}`}
                        className={cn(
                          "flex items-center justify-between group rounded-md p-2 transition-all",
                          pathname === `/playlist/${playlist.id}`
                            ? "bg-white/10"
                            : "hover:bg-white/5"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={playlist.imageUrl}
                            alt={playlist.name}
                            className="h-12 w-12 rounded object-cover"
                          />
                          <div>
                            <p className="font-medium text-sm text-zinc-100">{playlist.name}</p>
                            <p className="text-xs text-zinc-400">
                              Playlist • {playlist.songs.length} songs
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            togglePin(playlist.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-2 text-zinc-400 hover:text-zinc-100 transition-all"
                        >
                          <Pin className="h-4 w-4" fill="currentColor" />
                        </button>
                      </Link>
                    ))}
                </div>
              )}

              {/* Other Playlists */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 mb-2">All Playlists</h3>
                {playlists
                  .filter(playlist => !pinnedPlaylists.includes(playlist.id))
                  .map(playlist => (
                    <Link
                      key={playlist.id}
                      href={`/playlist/${playlist.id}`}
                      className={cn(
                        "flex items-center justify-between group rounded-md p-2 transition-all",
                        pathname === `/playlist/${playlist.id}`
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={playlist.imageUrl}
                          alt={playlist.name}
                          className="h-12 w-12 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium text-sm text-zinc-100">{playlist.name}</p>
                          <p className="text-xs text-zinc-400">
                            Playlist • {playlist.songs.length} songs
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          togglePin(playlist.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-2 text-zinc-400 hover:text-zinc-100 transition-all"
                      >
                        <Pin className="h-4 w-4" />
                      </button>
                    </Link>
                  ))}
              </div>
            </>
          )}
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
