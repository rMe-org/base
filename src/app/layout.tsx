import React from "react";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Player } from "@/components/player";

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
        <div className="flex h-screen flex-col">
          <div className="flex flex-1 gap-2 p-2">
            <Sidebar />
            <main className="flex-1 rounded-lg bg-zinc-900 p-2">
              {children}
            </main>
          </div>
          <Player />
        </div>
      </body>
    </html>
  );
}
