// src/app/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#222] bg-opacity-60 backdrop-blur-md text-white py-2 flex justify-between items-center">
      <div className="flex-grow text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pohlman Protean. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-1">
          <a href="/privacy" className="hover:text-yellow-500 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-yellow-500 transition">Terms of Service</a>
        </div>
      </div>
      <div className="flex items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
