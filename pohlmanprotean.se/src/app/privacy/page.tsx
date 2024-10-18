import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header />

      <div className="flex-grow py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Privacy Policy</h1>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Introduction</h2>
          <p className="text-lg text-gray-400 mb-4">
            This Privacy Policy explains how Pohlman Protean collects, uses, and shares your personal information when you visit our website and use our services.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Information We Collect</h2>
          <p className="text-lg text-gray-400 mb-4">
            We may collect personal information, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-400 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>IP address</li>
            <li>Usage data</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">How We Use Your Information</h2>
          <p className="text-lg text-gray-400 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-400 mb-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>
          
          {/* Add more sections as needed */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
