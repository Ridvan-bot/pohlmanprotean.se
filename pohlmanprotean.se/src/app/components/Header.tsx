// src/app/Header.tsx
import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#222] bg-opacity-60 backdrop-blur-md py-4 px-8 flex justify-between items-center">
      <a href="/" className="text-yellow-500 text-lg font-semibold hover:text-yellow-400 transition">
        Pohlman Protean
      </a>
      <nav className="flex items-center space-x-4">
        <a href="/services" className="hover:text-yellow-500 transition">Services</a>
        <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
        <a href="/about" className="hover:text-yellow-500 transition">About</a>
        {/* GitHub Icon Link */}
        <a 
          href="https://github.com/Ridvan-bot/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center"
        >
          <img 
            src="/images/github.png"  // Replace with the actual path to your GitHub icon
            alt="GitHub" 
            className="h-8 w-8 hover:opacity-80 transition"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
