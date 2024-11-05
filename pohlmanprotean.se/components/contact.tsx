"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  
  const [waitMessage, setWaitMessage] = useState('');
  const [waitTime, setWaitTime] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          jobTitle: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
        setWaitMessage(''); // Clear wait message after success
      } else if (response.status === 429) {
        const jsonResponse = await response.json();
        setWaitMessage(jsonResponse.message);
        setWaitTime(jsonResponse.waitTime);
      } else {
        const errorText = await response.text();
        console.log('Failed to send message:', errorText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (waitTime > 0) {
      timer = setInterval(() => {
        setWaitTime(prevTime => prevTime - 1);
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [waitTime]);

  return (
    <section className="relative flex items-center">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="absolute top-30 right-1/2 -translate-x-1/2 opacity-50"
        aria-hidden="true"
        style={{ zIndex: -1 }}
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-3xl flex-1 text-center relative z-10">
        <div id="contact" className="w-full px-4 sm:px-0 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                Contact
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contact us for more info
            </h2>
            <p className="text-lg text-indigo-200/65 mb-10">
              Please complete the form below and submit your details. Our team will reach out to you promptly.
            </p>
            {waitMessage && (
              <p className="text-red-500 mb-4">{waitMessage}</p>
            )}
            <div className="group mx-auto flex justify-center items-center max-w-sm flex-wrap gap-6 lg:max-w-none lg:flex-nowrap">
              <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="relative z-10 contact-form">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="btn-sm w-full mb-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-gray-800/40 px-4 py-6 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                      ></textarea>
                      <button type="submit" className="btn bg-gradient-to-t from-blue-600 to-blue-500 text-white">
                        Send Message
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
