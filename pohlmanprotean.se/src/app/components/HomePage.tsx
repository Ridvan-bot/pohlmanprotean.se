// src/app/components/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Pohlman Protean</h1>
      <p className="text-lg text-gray-400 mb-8">
        We specialize in <span className="text-yellow-500">IT solutions</span>, <span className="text-yellow-500">programming</span>, and <span className="text-yellow-500">automation</span>.
      </p>
    </div>
  );
};

export default HomePage; // Ensure it's a default export
