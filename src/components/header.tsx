"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold cursor-pointer flex items-center">
          <span className="text-white">&lt;M</span>
          <span className="text-yellow-300"> Y</span>
          <span className="text-white">/&gt;</span>
        </Link>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'contact'].map((page: string) => (
            <Link
              key={page}
              href={`/${page}`}
              className="block hover:bg-gray-700 hover:shadow-lg transition py-2 px-4 rounded"
              onClick={handleLinkClick}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-900 text-white shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {['home', 'about', 'contact'].map((page: string) => (
              <Link
                key={page}
                href={`/${page}`}
                className="block hover:bg-gray-700 hover:shadow-lg transition py-2 px-4 rounded"
                onClick={handleLinkClick}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
