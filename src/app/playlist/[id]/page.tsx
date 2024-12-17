"use client";

import { ChevronLeft, Clock, Play, Pause } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import Link from "next/link";
import Image from "next/image";
import { playlists } from "@/data/playlists";

export default function PlaylistPage({ params }: { params: { id: string } }) {
  const { currentSong, isPlaying, play, toggle } = usePlayer();
  const playlist = playlists.find((p) => p.id === params.id);

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="relative flex items-end gap-6 bg-gradient-to-b from-purple-800 to-zinc-900 px-6 py-10">
        <Link 
          href="/"
          className="absolute top-4 left-4 flex items-center gap-2 font-semibold text-zinc-200 hover:text-zinc-50"
        >
          <ChevronLeft size={24} />
          Back to Home
        </Link>
        <Image
          src={playlist.imageUrl}
          width={192}
          height={192}
          alt={playlist.name}
          className="shadow-lg"
        />
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Playlist</span>
          <h1 className="text-4xl font-bold">{playlist.name}</h1>
          {playlist.description && (
            <p className="text-sm text-zinc-400">{playlist.description}</p>
          )}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{playlist.owner}</span>
            <span className="text-zinc-400">• {playlist.songs.length} songs</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <button 
          onClick={() => {
            if (playlist.songs.length > 0) {
              const firstSong = playlist.songs[0];
              if (firstSong) {
                play(firstSong);
              }
            }
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-black shadow-lg transition-all hover:scale-105"
        >
          {isPlaying && currentSong && playlist.songs.some(s => s.id === currentSong.id) ? (
            <Pause size={24} />
          ) : (
            <Play className="ml-1" size={24} />
          )}
        </button>

        <table className="mt-6 w-full text-left text-sm text-zinc-400">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Album</th>
              <th className="px-4 py-3 text-right">
                <Clock size={16} />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.songs.map((song, index) => (
              <tr
                key={song.id}
                className="group cursor-pointer hover:bg-white/5"
                onClick={() => play(song)}
              >
                <td className="px-4 py-3 text-zinc-400">{index + 1}</td>
                <td className="flex items-center gap-3 px-4 py-3">
                  <Image
                    src={song.cover}
                    width={40}
                    height={40}
                    alt={song.name}
                    className="rounded"
                  />
                  <div className="flex flex-col">
                    <span className="text-zinc-100">{song.name}</span>
                    <span>{song.artist}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{song.album}</td>
                <td className="px-4 py-3 text-right">
                  {Math.floor(song.duration / 60)}:
                  {String(song.duration % 60).padStart(2, "0")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
