// src/app/components/Footer.tsx
import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#222] bg-opacity-60 backdrop-blur-md text-white py-2 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Pohlman Protean. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-1">
        <a href="/privacy" className="hover:text-yellow-500 transition">Privacy Policy</a>
        <a href="/terms" className="hover:text-yellow-500 transition">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
