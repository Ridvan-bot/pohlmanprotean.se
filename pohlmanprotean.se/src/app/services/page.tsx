// src/app/services/page.tsx
import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import the Footer component

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header /> {/* Include the Header */}
      <div className="min-h-screen bg-[#111] text-white flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Our <span className="text-yellow-500">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-center">
          We offer a range of <span className="text-yellow-500">IT solutions</span>,
          <span className="text-yellow-500"> programming</span>, and 
          <span className="text-yellow-500"> automation</span> services tailored to your needs.
        </p>
      </div>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default ServicesPage;
