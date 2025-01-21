import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import logoText from "../assets/logoText.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // shared links
  const links = (
    <>
      <li className="hover:text-[#006CE4] cursor-pointer">Blog</li>
      <li className="hover:text-[#006CE4] cursor-pointer">Offer</li>
      <li className="hover:text-[#006CE4] cursor-pointer">Airlines</li>
      <li className="hover:text-[#006CE4] cursor-pointer">About</li>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-80 backdrop-blur-md py-4 px-4 sm:px-8 lg:px-16 flex justify-between items-center shadow-md">
        {/* Left section with logo */}
        <div className="flex items-center gap-2">
          <img className="w-10 sm:w-12 md:w-16" src={logo} alt="Logo" />
          <img className="hidden sm:block w-24 md:w-32" src={logoText} alt="Logo Text" />
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex items-center gap-6 text-black text-lg font-semibold">
          <ul className="flex gap-6">
            {links}
          </ul>
        </nav>

        {/* Right section with Sign In button */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden text-gray-600 hover:text-[#006CE4] p-2 transition duration-300"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Sign-in button */}
          <button className="hidden md:flex text-white px-6 py-2 rounded-lg bg-gradient-to-r from-[#006CE4] to-[#4e91e2] transition duration-300 hover:scale-105">
            Sign In
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            {links}
            <li className="pt-4 border-t border-gray-200">
              <button className="w-full text-white px-6 py-2 rounded-lg bg-gradient-to-r from-[#006CE4] to-[#4e91e2] transition duration-300 hover:scale-105">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;