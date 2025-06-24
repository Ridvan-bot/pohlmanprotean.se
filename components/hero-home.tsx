'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";

export default function HeroHome() {
  const [isRedirecting,] = useState(false);

  const words = ["POHLMAN", "PROTEAN"];

  return (

    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-950">
      <div className="mx-auto max-w-3xl flex-1 text-center relative z-10">

        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isRedirecting ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06, delayChildren: 0.02 },
              },
            }}
          >
            {words.map((word, wordIndex) => (
              <motion.div key={wordIndex} className="flex space-x-1 md:space-x-2">
                {word.split("").map((letter, index) => (
                  <motion.div
                    key={`${wordIndex}-${index}`}
                    className="flex h-10 w-10 items-center justify-center text-2xl font-bold text-white sm:h-14 sm:w-14 sm:text-3xl md:h-20 md:w-20 md:text-4xl"
                    variants={{
                      hidden: { y: 50, opacity: 0, scale: 0.5 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          type: "spring",
                          damping: 12,
                          stiffness: 200,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Ensure this closing tag matches the opening tag above */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
              Innovating for the future
            </span>
          </motion.div>
          <motion.h2
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5, ease: "easeOut" }}
          >
            IT Solutions • Programming • Automation
          </motion.h2>
          <div data-aos="fade-up" data-aos-delay={400}>
            <a
              className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              href="#contact"
            >
              <span className="relative inline-flex items-center">
                Contact Us
                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Blue Blurred Shape on the left */}
      <div
        className="absolute right-[20%] bottom-0" // Adjust position here
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape gray"
        />
      </div>
    </section>
  );
}
