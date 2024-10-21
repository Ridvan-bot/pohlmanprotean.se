import React from 'react';
import '../../styles/tailwind.css';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#222] bg-opacity-80 backdrop-blur-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50"> {/* Added fixed positioning */}
      <a href="#main" className="text-yellow-500 text-sm sm:text-base lg:text-lg font-semibold hover:text-yellow-400 transition">
        Pohlman Protean
      </a>
      <nav className="flex items-center space-x-4 flex-nowrap">
        <a href="#about" className="text-xs sm:text-sm hover:text-yellow-500 transition">About</a>
        <a href="#technologies" className="text-xs sm:text-sm hover:text-yellow-500 transition">Technologies</a>
        <a href="#services" className="text-xs sm:text-sm hover:text-yellow-500 transition">Services</a>
        <a href="#contact" className="text-xs sm:text-sm hover:text-yellow-500 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
