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
          flex items-center justify-center p-2 sm:p-6 md:p-8
        `}
      >
        {/* Background image layer */}
        <div className="fixed inset-0 z-0">
          {/* Image with overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={image2}
              alt="Background"
              fill
              priority
              className="object-cover grayscale-[30%]"
            />
            {/* Darkening overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Multiple gradient circles to create depth */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-500 rounded-full blur-3xl opacity-10"></div>

          {/* Grain texture overlay */}
          <div className="absolute inset-0 grain-texture"></div>
        </div>

        {/* Main content card */}
        <div className="relative z-10 w-full h-full max-w-7xl max-h-[95vh] overflow-auto backdrop-blur-lg bg-black/20 border border-white/20 rounded-xl shadow-2xl">
          <div className="p-4 sm:p-6">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
