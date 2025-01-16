import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link to="/">MovieApp</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-gray-400">Home</Link>
          <Link to="/tv-shows" className="hover:text-gray-400">TV Shows</Link>
          <Link to="/movies" className="hover:text-gray-400">Movies</Link>
          <Link to="/my-list" className="hover:text-gray-400">My List</Link>
        </div>

        {/* Profile Icon */}
        <div className="hidden md:block">
          <img
            src="./movie-icon-app.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link to="/home" className="block py-2 hover:text-gray-400">Home</Link>
          <Link to="/tv-shows" className="block py-2 hover:text-gray-400">TV Shows</Link>
          <Link to="/movies" className="block py-2 hover:text-gray-400">Movies</Link>
          <Link to="/my-list" className="block py-2 hover:text-gray-400">My List</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
