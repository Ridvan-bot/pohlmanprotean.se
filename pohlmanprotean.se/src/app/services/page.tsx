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

        {/* New Services Sections */}
        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          <h2 className="text-4xl font-bold text-center mb-4">Consulting Services</h2>
          <p className="text-lg text-gray-400 text-center">
            Our consulting service focuses on software engineering, specifically in backend development.
            We collaborate with clients to build robust and scalable solutions that meet their business needs.
          </p>

          <h2 className="text-4xl font-bold text-center mb-4">Simple Websites for Small Businesses</h2>
          <p className="text-lg text-gray-400 text-center">
            We create simple, user-friendly websites tailored for small businesses, ensuring you have a strong online presence without complexity.
            Our designs focus on clarity and functionality, helping you connect with your customers effectively.
          </p>

          <h2 className="text-4xl font-bold text-center mb-4">Google Run Deployment</h2>
          <p className="text-lg text-gray-400 text-center">
            We specialize in deploying applications on Google Run, allowing for efficient scaling and management of your applications
            without the hassle of managing infrastructure. Our services ensure a smooth deployment process tailored to your needs.
          </p>
        </div>
      </div>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default ServicesPage;
