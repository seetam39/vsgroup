import React, { useState } from 'react';
import logo from '../assets/logo.png';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-4 sm:gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14" />
        </a>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">Services</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">How It Works</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">Contact</a>
        </div>
      </div>
      
      {/* Right Side Nav */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Book Schedule Button - Mobile */}
        <a 
          href="https://calendly.com/vsgroup2510/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#5B5BD3] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:shadow-lg transition font-medium text-xs sm:text-sm"
        >
          Book Schedule
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-5 sm:w-6 h-4 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 sm:top-20 left-4 sm:left-6 right-4 sm:right-6 bg-white shadow-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:hidden z-50">
          <div className="flex flex-col gap-3 sm:gap-4">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition py-2 text-sm sm:text-base">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition py-2 text-sm sm:text-base">How It Works</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition py-2 text-sm sm:text-base">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition py-2 text-sm sm:text-base">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
