// src/app/page.tsx
import React from 'react';
import '../styles/tailwind.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import Image from 'next/image'; // Import the Image component from Next.js

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header /> {/* Include the Header */}
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
          Pohlman Protean</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          We specialize in <span className="text-yellow-500">IT solutions</span>, 
          <span className="text-yellow-500"> programming</span>, and 
          <span className="text-yellow-500"> automation</span>.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="py-12 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">Technologies We Use</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/bash.svg" alt="Bash" width={64} height={64} className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <Image src="/images/javascript.svg" alt="Javascript" width={64} height={64} className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/typescript.svg" alt="TypeScript" width={64} height={64} className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github.svg" alt="GitHub" width={64} height={64} className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/docker.svg" alt="Docker" width={64} height={64} className="transition-transform transform hover:scale-150" />
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 bg-[#222] text-center">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-6">Contact us today to discuss how we can help you achieve your goals.</p>
        <a href="/contact" className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300">
          Contact Us
        </a>
      </div>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default HomePage;
