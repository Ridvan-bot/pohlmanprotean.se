// src/app/page.tsx
import React from 'react';
import '../styles/tailwind.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header /> {/* Include the Header */}
      
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Welcome to <span className="text-yellow-500">Pohlman Protean</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-center">
          We specialize in <span className="text-yellow-500">IT solutions</span>, 
          <span className="text-yellow-500"> programming</span>, and 
          <span className="text-yellow-500"> automation</span>.
        </p>
      </div>
      
      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default HomePage;
