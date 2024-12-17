export function Player() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Song info will go here */}
          <div className="flex flex-col">
            <strong className="font-normal">Song name</strong>
            <span className="text-xs text-zinc-400">Artist name</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Player controls will go here */}
          <div className="flex items-center gap-6">
            <button className="text-zinc-200 hover:text-zinc-100">
              Play/Pause
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Volume controls will go here */}
        </div>
      </div>
    </footer>
  );
}
