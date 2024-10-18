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
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-500 font-semibold hover:text-yellow-400 transition">Pohlman Protean</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          We specialize in <span className="text-yellow-500">IT solutions</span>, 
          <span className="text-yellow-500"> programming</span>, and 
          <span className="text-yellow-500"> automation</span>.
        </p>
      </div>
      {/* About us section */}
      <div id="about" className="flex-grow flex flex-col items-center justify-center py-10 px-4">
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          About <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-center">
          We are dedicated to providing top-notch IT solutions, programming expertise, and automation services.
        </p>

        <div className="bg-[#222] p-8 rounded-lg shadow-md max-w-4xl w-full mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-500">Our Mission</h2>
          <p className="text-lg text-gray-400 mb-4">
            At <span className="text-yellow-500">Pohlman Protean</span>, our mission is to drive innovation by delivering advanced IT solutions 
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
      </div>


      {/* Gray Box Wrapper */}
      <div id="technologies" className="bg-gray-800 shadow-lg p-8">
        {/* Technology Stack */}
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500">Technologies We Use</h2>
          <div className="flex justify-center space-x-8">
            {/* Icons */}
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
            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/googlecloud.svg" alt="Google Cloud" width={64} height={64} className="transition-transform transform hover:scale-150" />
            </a>
            <a href="https://www.ansible.com//" target="_blank" rel="noopener noreferrer">
              <Image src="/images/ansible.svg" alt="Ansible" width={64} height={64} className="transition-transform transform hover:scale-150" />
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/nodejs.svg" alt="Node.js" width={64} height={64} className="transition-transform transform hover:scale-150" />
            </a>
          </div>
        </div>
      </div>

      {/* Gray Box Wrapper */}
      <div id="services" className="bg-[#111] text-white flex flex-col items-center justify-center py-10 px-4">
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
        </div>
      </div>

{/* Contact Us Section */}
<div className="flex justify-between mt-8 p-9 w-full mx-auto h-96 bg-[#111] px-0"> {/* Updated to stretch full width */}
  {/* Box 1 */}
  <div className="bg-gray-800 p-4 shadow-lg w-1/2 flex items-center justify-center">
    <div className="py-4 text-center">
      <h2 className="text-2xl font-bold mb-2">
        <span className="text-white">Ready to</span>{" "}
        <span className="text-yellow-500 hover:text-yellow-400 transition">Get Started?</span>
      </h2>
      <p className="text-white mb-4">Contact us today to discuss how we can help you achieve your goals.</p>
      <a href="/contact" className="bg-white text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-gray-100 hover:shadow-lg">
        Contact Us
      </a>
    </div>
  </div>

  {/* Box 2 - Image Only */}
  <div className="rounded-none shadow-lg w-1/2 flex items-center justify-center">
    <Image
      src="/images/shakehands.svg"
      alt="Descriptive Alt Text"
      width={300}
      height={200}
      className="object-cover w-full h-full"
    />
  </div>
</div>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default HomePage;
