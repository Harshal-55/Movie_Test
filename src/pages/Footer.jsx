import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            MovieApp
          </div>

          {/* Links */}
          <div className="flex flex-wrap space-x-4">
            <a href="/home" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6 text-gray-400">
          &copy; {new Date().getFullYear()} MovieApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
