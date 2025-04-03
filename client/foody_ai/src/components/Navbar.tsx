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
    <nav className="text-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-green-500 text-2xl font-bold mr-2">🍽️</span>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-700 to-gray-300 bg-clip-text text-transparent">
                FoodyAI
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-gray-300 transition duration-300 py-2 ${
                  pathname === item.path
                    ? "text-gray-800 border-b-2 border-gray-800"
                    : ""
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
              className="px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Log In
            </button>
            <button
              onClick={() => setIsSignUpOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-300 rounded-full hover:from-gray-700 hover:to-gray-300 transition duration-300"
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
              className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 pb-4 px-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md ${
                  pathname === item.path
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700 mt-4 flex flex-col space-y-2">
              <Link
                href="/login"
                className="px-3 py-2 rounded-md hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-3 py-2 bg-green-600 rounded-md hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
