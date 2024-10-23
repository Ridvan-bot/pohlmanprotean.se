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
      <div id="main" className="flex-grow flex flex-col items-center justify-center py-10 px-4 text-center min-h-screen">
      <h1 className="text-7xl md:text-9xl font-bold mb-6">
  Pohlman <span className="text-yellow-500 font-semibold hover:text-yellow-400 transition">Protean</span>
</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          We specialize in <span className="text-yellow-500">IT solutions</span>, 
          <span className="text-yellow-500"> programming</span>, and 
          <span className="text-yellow-500"> automation</span>.
        </p>
      </div>

{/* About us section */}
<div id="about" className="flex-grow flex flex-col items-center justify-center py-10 px-4 max-w-7xl mx-auto"> {/* Set max width */}
  <div className="flex-grow flex flex-col py-10 px-4">
    <h1 className="text-4xl md:text-4xl font-bold mb-6 text-left">
      ABOUT US
    </h1>
    <p className="text-lg text-gray-400 mb-4">
      We are dedicated to providing top-notch IT solutions, programming expertise, and automation services.
    </p>

    <p className="text-lg text-gray-400 mb-4 text-left">
      At <span className="text-yellow-500">Pohlman Protean</span>, our mission is to drive innovation by delivering advanced IT solutions
      that empower businesses to achieve efficiency, scalability, and success. We specialize in providing 
      cutting-edge programming, <span className="text-yellow-500">automation</span>, and DevOps services to help clients navigate the complexities
      of <span className="text-yellow-500">modern</span> technology.
    </p>
    <div className="text-left mb-12">
      <p className="text-lg text-gray-400 mb-4">
        With years of experience in IT, programming, and automation, Pohlman Protean is your trusted partner for 
        solving complex technical challenges. Whether you&apos;re looking to improve efficiency through automation or 
        scale your infrastructure to meet growing demands, we have the skills and expertise to help you succeed.
      </p>
      <p className="text-lg text-gray-400 mb-4">
        Our work is guided by core values that help us deliver the best solutions to our clients:
      </p>
    </div>
</div>

<div className="grid grid-cols-4 gap-4">
    <div className="container">
        <div className="glass border-2 border-gray-300 p-4 rounded-lg" data-text="Insight">
            <img src="/images/insight.svg" alt="Insight" className="icon" />
        </div>
    </div>
    <div className="container">
        <div className="glass border-2 border-gray-300 p-4 rounded-lg" data-text="Collaboration">
            <img src="/images/collaboration.svg" alt="Collaboration" className="icon" />
        </div>
    </div>
    <div className="container">
        <div className="glass border-2 border-gray-300 p-4 rounded-lg" data-text="Entrepreneur">
            <img src="/images/entrepreneur.svg" alt="Entrepreneur" className="icon" />
        </div>
    </div>
    <div className="container">
        <div className="glass border-2 border-gray-300 p-4 rounded-lg" data-text="Protean">
        <img src="/images/water.svg" alt="Protean" className="icon" />
        </div>
    </div>
</div>
</div>


{/* Gray Box Wrapper */}
<div id="services" className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-12 rounded-lg flex flex-col items-center">
  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
    Our <span className="text-yellow-500">Services</span>
  </h1>
  <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-center">
    We offer a range of <span className="text-yellow-500">IT solutions</span>,
    <span className="text-yellow-500"> programming</span>, and 
    <span className="text-yellow-500"> automation</span> services tailored to your needs.
  </p>

  {/* Service Sections */}
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

    <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-500">Core Services</h2>
          <ul className="list-disc list-inside text-lg text-gray-400 mb-8">
            <li>Custom Software Development</li>
            <li>Automation and DevOps Consulting</li>
            <li>API Integration and Development</li>
          </ul>
  </div>
</div>


<div id="contact" className="flex-grow flex flex-col items-center py-10 px-4">
  {/* Contact Us Card */}
  <div className="card w-full max-w-2xl mb-4 relative mt-4">
    <div className="card-info text-center">
      <h2 className="text-3xl md:text-3xl font-bold mb-6 text-white">
        Contact Us
      </h2>
      <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl">
        If you have any questions or inquiries, feel free to reach out to us!
      </p>
      {/* Message Form */}
      <form className="mt-8 w-full">
        <div className="mb-4">
          <input className="w-full p-3 bg-[#181818] text-white rounded-md border border-gray-400" type="text" id="name" placeholder="name / company" />
        </div>
        <div className="mb-4">
          <input className="w-full p-3 bg-[#181818] text-white rounded-md border border-gray-400" type="text" id="phonenumber" placeholder="phone number" />
        </div>
        <div className="mb-4">
          <input className="w-full p-3 bg-[#181818] text-white rounded-md border border-gray-400" type="email" id="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <textarea className="w-full p-3 bg-[#181818] text-white rounded-md border border-gray-400" id="message" rows={4} placeholder="Enter your message"></textarea>
        </div>
        <button className="w-full bg-yellow-500 text-black p-3 rounded-md font-bold hover:bg-yellow-600 transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>



      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default HomePage;
