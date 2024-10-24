// src/app/services/AboutPage.tsx
import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header /> {/* Include the Header */}

      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          About <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-center">
          We are dedicated to providing top-notch IT solutions, programming expertise, and automation services.
        </p>

{/* New section with more information about the company */}
<div className="bg-[#222] p-8 rounded-lg shadow-md max-w-4xl w-full mb-12">
  <h2 className="text-4xl font-semibold mb-4 text-center text-yellow-500">Our Mission</h2>
  <p className="text-lg text-gray-400 mb-4 leading-relaxed">
    At <span className="text-yellow-500 font-bold">Pohlman Protean</span>, our mission is to drive innovation by delivering advanced IT solutions 
    that empower businesses to achieve efficiency, scalability, and success. We specialize in providing 
    cutting-edge programming, automation, and DevOps services to help clients navigate the complexities 
    of modern technology.
  </p>


          <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-500">Core Services</h2>
          <ul className="list-disc list-inside text-lg text-gray-400 mb-8">
            <li>Custom Software Development</li>
            <li>Automation and DevOps Consulting</li>
            <li>API Integration and Development</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-500">Our Values</h2>
          <p className="text-lg text-gray-400 mb-4">
            Our work is guided by core values that help us deliver the best solutions to our clients:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-400 mb-8">
            <li><span className="text-yellow-500">Innovation:</span> Constantly evolving with new technologies to stay ahead of the curve.</li>
            <li><span className="text-yellow-500">Integrity:</span> We believe in transparency, honesty, and ethical practices in every project.</li>
            <li><span className="text-yellow-500">Collaboration:</span> We work closely with our clients to ensure their success is at the forefront of everything we do.</li>
            <li><span className="text-yellow-500">Excellence:</span> Striving for the highest standards of quality in every service we provide.</li>
          </ul>
        </div>

        {/* Call to action section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            With years of experience in IT, programming, and automation, Pohlman Protean is your trusted partner for 
            solving complex technical challenges. Whether you&apos;re looking to improve efficiency through automation or 
            scale your infrastructure to meet growing demands, we have the skills and expertise to help you succeed.
          </p>
        </div>
      </div>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default AboutPage;
