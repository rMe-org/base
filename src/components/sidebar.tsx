import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-black p-6">
      <nav className="space-y-6">
        <div>
          <h2 className="mb-2 text-lg font-semibold">Menu</h2>
          <div className="space-y-3">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-zinc-100"
            >
              Home
            </Link>
            <Link 
              href="/search" 
              className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-zinc-100"
            >
              Search
            </Link>
          </div>
        </div>
        
        <div>
          <h2 className="mb-2 text-lg font-semibold">Your Library</h2>
          <div className="space-y-3">
            {/* Playlist list will go here */}
          </div>
        </div>
      </nav>
    </aside>
  );
}
