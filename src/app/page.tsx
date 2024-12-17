export default function HomePage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <section className="bg-gradient-to-b from-emerald-800 to-emerald-900 p-6">
        <h1 className="text-2xl font-bold">Welcome to Spotify Clone</h1>
      </section>
      <div className="mt-4 p-6">
        <h2 className="mb-4 text-xl font-semibold">Your Playlists</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Playlist cards will go here */}
        </div>
      </div>
    </div>
  );
}
