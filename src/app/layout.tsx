import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: {
    default: "Creatr",
    template: "%s | Creatr",
  },
  description: "A modern web application built with Next.js and TypeScript",
  applicationName: "Creatr",
  referrer: "origin-when-cross-origin",
  keywords: ["next.js", "react", "typescript", "web application"],
  authors: [{ name: "Creatr Team" }],
  creator: "Creatr Team",
  publisher: "Creatr Team",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Creatr",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
