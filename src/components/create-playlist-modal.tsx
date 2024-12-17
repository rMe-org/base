"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface CreatePlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, description: string) => void;
}

export function CreatePlaylistModal({ isOpen, onClose, onSubmit }: CreatePlaylistModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[400px] rounded-lg bg-zinc-800 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Create Playlist</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-100">
            <X size={24} />
          </button>
        </div>
        
        <form 
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(name, description);
            setName("");
            setDescription("");
            onClose();
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-200">
              Name
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
            <label htmlFor="description" className="block text-sm font-medium text-zinc-200">
              Description (optional)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-600 bg-zinc-700 text-zinc-100 focus:border-green-500 focus:ring-green-500"
              rows={3}
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
