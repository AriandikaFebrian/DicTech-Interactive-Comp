// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

// Import custom fonts from Next.js Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DicTech Interactive™",
  description: "Innovative Web Solutions for the Digital Era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Render Navbar */}
        <Navbar />
        {/* Render Children (page content) */}
        <main className="flex-grow pb-0">{children}</main> {/* Removed unnecessary padding */}
        {/* Render Footer */}
        <Footer />
      </body>
    </html>
  );
}
