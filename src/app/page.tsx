import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  import { playlists } from "@/data/playlists";

  return (
    <div className="flex-1 overflow-y-auto">
      <section className="bg-gradient-to-b from-purple-800 to-zinc-900 px-6 py-10">
        <h1 className="text-3xl font-bold">Good afternoon</h1>
        
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded bg-white/10 transition-all hover:bg-white/20"
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
          {playlists.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group relative rounded-md bg-zinc-800 p-4 hover:bg-zinc-800/50"
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
