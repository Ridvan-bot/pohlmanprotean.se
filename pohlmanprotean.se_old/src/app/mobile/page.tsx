// src/app/mobile/page.tsx
import React from 'react';

const MobileHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome Mobile User</h1>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl text-center">
        You are on the mobile version of our site!
      </p>
      {/* Add mobile-specific content here */}
    </div>
  );
};

export default MobileHomePage;
