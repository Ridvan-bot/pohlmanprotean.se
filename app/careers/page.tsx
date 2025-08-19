"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });
  
  const [waitMessage, setWaitMessage] = useState('');
  const [waitTime, setWaitTime] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/sendApplication', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Application sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          position: '',
          experience: '',
          portfolio: '',
          coverLetter: '',
        });
        setWaitMessage('');
        setSuccessMessage('Thank you for your application! We will review it and get back to you shortly.');
      } else if (response.status === 429) {
        const jsonResponse = await response.json();
        setWaitMessage(jsonResponse.message);
        setWaitTime(jsonResponse.waitTime);
      } else {
        const errorText = await response.text();
        console.log('Failed to send application:', errorText);
      }
    } catch (error) {
      console.error('Error sending application:', error);
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

  const availablePositions = [
    "No Open Positions"
  ];

  return (
    <main className="relative min-h-screen">
      <section className="relative flex items-center min-h-screen">
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
        <div className="
  border-t py-12
  [border-image:linear-gradient(to_right,transparent,theme(colors.blue.900/.25),transparent)1]
  dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]
  md:py-20
">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-600/60 dark:before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-600/60 dark:after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r from-gray-950 to-gray-800 dark:from-blue-500 dark:to-indigo-200 bg-clip-text text-transparent">
                  Careers
                </span>
              </div>
              <h1 className="dark:animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] dark:bg-[length:200%_auto] dark:bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-gray-950 dark:text-transparent md:text-4xl">
                Join Our Team
              </h1>
              <p className="text-lg text-gray-600 dark:text-indigo-200/65 mb-10">
                We're always looking for talented individuals to join our team. Apply for one of our available positions below.
              </p>

              {/* Available Positions */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-6">Available Positions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {availablePositions.map((position, index) => (
                    <div key={index} className="rounded-lg p-4 bg-white border border-gray-200 dark:bg-gray-800/40 dark:border-gray-700/50">
                      <h4 className="font-medium text-gray-800 dark:text-indigo-200">{position}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {waitMessage && (
                <p className="text-red-500 mb-4">{waitMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 mb-4">{successMessage}</p>
              )}
              
              <div className="group mx-auto flex justify-center items-center max-w-sm flex-wrap gap-6 lg:max-w-none lg:flex-nowrap">
                <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 p-px">
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950">
                    <div className="p-6">
                      <form onSubmit={handleSubmit} className="relative z-10 application-form">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Position *</option>
                          {availablePositions.map((position, index) => (
                            <option key={index} value={position} className="bg-white dark:bg-gray-800 text-gray-800 dark:text-indigo-200">
                              {position}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          name="experience"
                          placeholder="Years of Experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="url"
                          name="portfolio"
                          placeholder="Portfolio/LinkedIn URL"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className="btn-sm w-full mb-4 rounded-full bg-gray-100 dark:bg-gray-800/40 px-4 py-4 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                          name="coverLetter"
                          placeholder="Cover Letter / Why do you want to work with us? *"
                          value={formData.coverLetter}
                          onChange={handleChange}
                          required
                          className="btn-sm w-full mb-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-gray-100 dark:bg-gray-800/40 px-4 py-6 text-sm font-normal text-gray-800 dark:text-indigo-200 placeholder-gray-500 dark:placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={6}
                        ></textarea>
                        <button type="submit" className="btn bg-gradient-to-t from-blue-600 to-blue-500 text-white">
                          Submit Application
                          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                            &rarr;
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
    </main>
  );
}