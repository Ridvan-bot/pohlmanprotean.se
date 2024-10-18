// src/app/contact/page.tsx
import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global
import Header from '../components/Header';
import Footer from '../components/Footer';
const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header /> {/* Include the Header */}
      
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Contact <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-center">
          If you have any questions or inquiries, feel free to reach out to us!
        </p>

        <div className="bg-[#222] p-8 rounded-lg shadow-md max-w-xl w-full">
          <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-500">Contact Information</h2>
          <p className="mb-4 text-lg">
            <strong>Email:</strong> <a href="mailto:robin.pohlman@pohlmanprotean.com" className="text-yellow-500">robin.pohlman@pohlmanprotean.com</a>
          </p>
          <p className="mb-4 text-lg">
            <strong>Phone:</strong> <a href="tel:+46709465784" className="text-yellow-500">+46 709-46 57 84</a>
          </p>
          <form className="mt-8">
            <h3 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h3>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Your Name</label>
              <input className="w-full p-3 bg-[#333] text-white rounded-md" type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Your Email</label>
              <input className="w-full p-3 bg-[#333] text-white rounded-md" type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label className="block text-lg mb-2" htmlFor="message">Your Message</label>
              <textarea className="w-full p-3 bg-[#333] text-white rounded-md" id="message" rows={4} placeholder="Enter your message"></textarea>
            </div>
            <button className="w-full bg-yellow-500 text-black p-3 rounded-md font-bold hover:bg-yellow-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
          <Footer /> {/* Include the Footer */}
        </div>
  );
};

export default ContactPage;
