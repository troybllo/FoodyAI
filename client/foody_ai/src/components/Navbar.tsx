// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "./UI/Modal";
import Signup from "./Auth/Signup";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Recipe Generator", path: "/recipe-generator" },
    { name: "My Recipes", path: "/my-recipes" },
    { name: "Meal Planner", path: "/meal-planner" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="border-b border-white/10 pb-4 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl mr-2">🍽️</span>
            <span className="font-light text-xl tracking-wider text-white">
              FoodyAI
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`hover:text-white transition duration-300 py-2 font-light tracking-wide ${
                pathname === item.path
                  ? "text-white border-b border-white/60"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="px-4 py-2 rounded-full font-light tracking-wider text-gray-200 hover:bg-white/10 transition duration-300"
          >
            Log In
          </button>
          <button
            onClick={() => setIsSignUpOpen(true)}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-light tracking-wider text-white hover:bg-white/20 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        <Modal
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
          title="Create an account"
        >
          <Signup onSuccess={() => setIsSignUpOpen(false)}></Signup>
        </Modal>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-black/40 mt-4 rounded-xl border border-white/10 pb-4 px-4">
          <div className="flex flex-col space-y-2 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md font-light tracking-wide ${
                  pathname === item.path
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-4 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                className="px-3 py-2 rounded-md text-gray-200 hover:bg-white/10 font-light tracking-wide"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSignUpOpen(true);
                }}
                className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md font-light tracking-wider text-white hover:bg-white/20 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
