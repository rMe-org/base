import React from "react";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Player } from "@/components/player";
import { PlayerProvider } from "@/contexts/PlayerContext";

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify clone built with Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-black text-zinc-50">
        <PlayerProvider>
          <div className="flex h-screen flex-col bg-zinc-950">
          <div className="flex flex-1 gap-3 p-3 overflow-hidden">
            <Sidebar />
            <main className="flex-1 rounded-lg bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-3 overflow-y-auto backdrop-blur-3xl">
              {children}
            </main>
          </div>
          <Player />
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
