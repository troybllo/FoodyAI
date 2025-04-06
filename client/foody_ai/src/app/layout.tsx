import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import image2 from "../assets/background.jpeg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoodyAI - AI-Powered Recipe Generator",
  description: "Transform your ingredients into delicious meals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          text-white
          relative
          flex items-center justify-center p-4 sm:p-6 md:p-8
          overflow-hidden
        `}
      >
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={image2}
              alt="Background"
              fill
              priority
              className="object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-500 rounded-full blur-3xl opacity-10"></div>

          <div className="absolute inset-0 grain-texture"></div>
        </div>

        {/* Main content card with fixed dimensions */}
        <div
          className="relative z-10 w-[1650px] h-[900px] 
                     custom-scrollbar backdrop-blur-lg bg-black/20 
                     border border-white/20 rounded-xl shadow-2xl"
        >
          <div className="p-4 sm:p-6 h-full">
            <Navbar />
            <main className="h-[calc(100%-64px)] overflow-y-auto custom-scrollbar">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
