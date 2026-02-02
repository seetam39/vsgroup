import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14" />
        </a>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
        </div>
      </div>
      
      {/* Right Side Nav */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        <a 
          href="https://calendly.com/vsgroup2510/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#5B5BD3] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition font-medium"
        >
          Book Schedule
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-6 right-6 bg-white shadow-xl rounded-2xl p-6 md:hidden z-50">
          <div className="flex flex-col gap-4">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition py-2">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition py-2">How It Works</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition py-2">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
