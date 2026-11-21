import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "./fonts/source-serif-4-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/source-serif-4-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/source-serif-4-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafael Petrosian",
  description:
    "Mechanical engineer from UC Berkeley. I design, build, and test hardware: race motorcycles, aircraft, robots, and test rigs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Sidebar />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
