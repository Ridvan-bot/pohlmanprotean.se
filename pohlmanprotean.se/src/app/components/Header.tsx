import React from 'react';
import Image from 'next/image';
import '../../styles/tailwind.css';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#222] bg-opacity-60 backdrop-blur-md py-4 px-8 flex justify-between items-center flex-nowrap">
      <a href="/" className="text-yellow-500 text-sm sm:text-base lg:text-lg font-semibold hover:text-yellow-400 transition">
        Pohlman Protean
      </a>
      <nav className="flex items-center space-x-4 flex-nowrap">
        <a href="/services" className="text-xs sm:text-sm hover:text-yellow-500 transition">Services</a>
        <a href="/contact" className="text-xs sm:text-sm hover:text-yellow-500 transition">Contact</a>
        <a href="/about" className="text-xs sm:text-sm hover:text-yellow-500 transition">About</a>
        {/* GitHub Icon Link */}
        <a 
          href="https://github.com/Ridvan-bot/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center"
        >
          <Image 
            src="/images/github.png" 
            alt="GitHub" 
            width={64} // Increased size for better visibility
            height={64} // Increased size for better visibility
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 hover:opacity-80 transition"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
