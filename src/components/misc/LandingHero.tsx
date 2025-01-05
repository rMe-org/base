import React from "react";
import { ChevronDown, Plus, Wand2, Layout, Settings } from "lucide-react";
import LandingHeader from "./LandingHeader";

const LandingHero = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-28">
      <LandingHeader />
      <div className="flex flex-col items-center justify-center gap-12">
        {" "}
        <div className="text-center">
          <h1 className="text-7xl font-bold leading-none">
            Build your next
            <br />
            product under 1 min
          </h1>
        </div>
        {/* Main input container */}
        <div className="w-full max-w-5xl">
          <div className="rounded-2xl bg-white/75 bg-opacity-80 p-4 shadow-md backdrop-blur-sm">
            {/* Top row with dropdown and input */}
            <div className="mb-4 flex items-start gap-2">
              <button className="shadow-xs flex items-center gap-1 rounded-xl bg-white px-4 py-2 transition-colors hover:bg-gray-200">
                <span>Faster</span>
                <ChevronDown size={16} />
              </button>
              <textarea
                placeholder="Ask Creatr to create a dashboard..."
                className="flex-1 resize-none bg-transparent px-4 py-2 outline-none placeholder:text-gray-600"
                rows={2}
              ></textarea>
            </div>

            {/* Bottom row with icons and create button */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Plus size={20} className="text-gray-600" />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Wand2 size={20} className="text-gray-600" />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Layout size={20} className="text-gray-600" />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Settings size={20} className="text-gray-600" />
                </button>
              </div>
              <button className="special-btn flex items-center gap-3 rounded-[14px] bg-orange-400 px-4 py-2 text-white transition-colors hover:bg-orange-500">
                Create
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Bottom suggestions */}
          <div className="mt-6 flex gap-4">
            {[1, 2, 3].map((item) => (
              <button
                key={item}
                className="rounded-xl bg-white bg-opacity-80 px-3 py-2 text-sm text-gray-600 backdrop-blur transition-all hover:bg-opacity-90"
              >
                Ask Creatr to create a dashboard...
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
