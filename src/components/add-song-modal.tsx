"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Song } from "@/types/music";

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (song: Song) => void;
}

export function AddSongModal({ isOpen, onClose, onSubmit }: AddSongModalProps) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [duration, setDuration] = useState("");
  const [cover, setCover] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[400px] rounded-lg bg-zinc-800 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Song</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-100">
            <X size={24} />
          </button>
        </div>
        
        <form 
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const newSong: Song = {
              id: Math.random().toString(36).substr(2, 9),
              name,
              artist,
              album,
              duration: parseInt(duration),
              cover: cover || "/album-covers/default.jpg",
              url: "#"
            };
            onSubmit(newSong);
            setName("");
            setArtist("");
            setAlbum("");
            setDuration("");
            setCover("");
            onClose();
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-200">
              Song Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-600 bg-zinc-700 text-zinc-100 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="artist" className="block text-sm font-medium text-zinc-200">
              Artist
            </label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-600 bg-zinc-700 text-zinc-100 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="album" className="block text-sm font-medium text-zinc-200">
              Album
            </label>
            <input
              type="text"
              id="album"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-600 bg-zinc-700 text-zinc-100 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-zinc-200">
              Duration (seconds)
            </label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-600 bg-zinc-700 text-zinc-100 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cover" className="block text-sm font-medium text-zinc-200">
              Cover URL (optional)
            </label>
            <input
              type="text"
              id="cover"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-600 bg-zinc-700 text-zinc-100 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-200 hover:text-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400"
            >
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
