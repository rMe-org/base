"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Image from "next/image";
import { playlists } from "@/data/playlists";
import { Song } from "@/types/music";
import { usePlayer } from "@/contexts/PlayerContext";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { play } = usePlayer();

  const allSongs: Song[] = playlists.flatMap(playlist => playlist.songs);
  
  const filteredSongs = allSongs.filter(song => 
    song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.album.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-0 z-10 bg-zinc-900/90 backdrop-blur-xl p-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full rounded-full bg-zinc-800 py-3 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="px-6">
        {searchQuery ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <table className="w-full text-left text-sm text-zinc-400">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Artist</th>
                  <th className="px-4 py-3">Album</th>
                  <th className="px-4 py-3 text-right">Duration</th>
                </tr>
              </thead>
              <tbody>
                {filteredSongs.map((song) => (
                  <tr
                    key={song.id}
                    className="group cursor-pointer hover:bg-white/5"
                    onClick={() => play(song)}
                  >
                    <td className="flex items-center gap-3 px-4 py-2">
                      <Image
                        src={song.cover}
                        width={40}
                        height={40}
                        alt={song.name}
                        className="rounded"
                      />
                      <span className="text-zinc-100">{song.name}</span>
                    </td>
                    <td className="px-4 py-2">{song.artist}</td>
                    <td className="px-4 py-2">{song.album}</td>
                    <td className="px-4 py-2 text-right">
                      {Math.floor(song.duration / 60)}:
                      {String(song.duration % 60).padStart(2, "0")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-5">
              <h2 className="text-2xl font-bold mb-4">Browse all</h2>
            </div>
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex flex-col gap-2 rounded-lg bg-gradient-to-br from-purple-700 to-purple-900 p-4 transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={playlist.imageUrl}
                  width={150}
                  height={150}
                  alt={playlist.name}
                  className="rounded shadow-lg"
                />
                <strong className="text-lg">{playlist.name}</strong>
                <span className="text-sm text-zinc-300">
                  By {playlist.owner}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
