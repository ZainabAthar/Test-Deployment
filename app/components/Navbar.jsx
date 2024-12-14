"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Plectra Logo"
              width={140}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Right Actions for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/ai-content-writer" className="hover:text-blue-500">
            AI Content Writer
          </Link>
          <ThemeToggle />
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
            <Link href="/login">Login</Link>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
            <Link href="/try-for-free">Try for Free</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4">
          <Link
            href="/pricing"
            className="block w-full text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/ai-content-writer"
            className="block w-full text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            AI Content Writer
          </Link>
          <div className="w-full">
            <ThemeToggle />
          </div>
          <button
            className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/login">Login</Link>
          </button>
          <button
            className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/try-for-free">Try for Free</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
