import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        md: "8px", // Add this line for backdrop blur
      },
      // Extend the text shadow for glowing effect
      textShadow: {
        glow: '0 0 10px rgba(255, 215, 0, 0.8)', // Adjust the color and intensity of the glow here
      },
      // Extend the animations
      animation: {
        'fade-in': 'fade-in 0.8s ease forwards',
        'glow': 'glow 1.5s infinite', // Add glow animation
      },
      // Extend the keyframes for animations
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8)', // Glow on
          },
          '50%': {
            textShadow: '0 0 20px rgba(255, 215, 0, 0)', // Glow off
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
