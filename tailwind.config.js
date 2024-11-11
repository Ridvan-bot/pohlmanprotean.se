/** @type {import('tailwindcss').Config} */
// Exporting the configuration object for Tailwind CSS
module.exports = {
  // Specify the paths to all of the template files in the project
  content: [
    // Look for Tailwind classes in any JS, TS, JSX, or TSX files in the app directory
    "./app/**/*.{js,ts,jsx,tsx}",
    // Look for Tailwind classes in any JS, TS, JSX, or TSX files in the pages directory
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Look for Tailwind classes in any JS, TS, JSX, or TSX files in the components directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Extend the default theme to include custom configurations
    extend: {
      // Define custom font families to be used throughout the application
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"], // Custom font 'Inter' using CSS variable
        nacelle: ["var(--font-nacelle)", "sans-serif"], // Custom font 'Nacelle' using CSS variable
      },
      // Define custom font sizes with line height and letter spacing
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }], // Extra small font size
        sm: ["0.875rem", { lineHeight: "1.5715" }], // Small font size
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" }, // Base font size
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }], // Large font size
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }], // Extra large font size
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }], // 2x extra large font size
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" }, // 3x extra large font size
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }], // 4x extra large font size
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }], // 5x extra large font size
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }], // 6x extra large font size
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }], // 7x extra large font size
      },
      // Define custom animations
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite", // Custom shine animation
      },
      // Define keyframes for custom animations
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" }, // Initial state of the shine animation
          "10%": { opacity: ".8" }, // Slightly visible at 10%
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" }, // Mid-animation state
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" }, // Final state of the shine animation
        },
        gradient: {
          to: { "background-position": "200% center" }, // Background position for gradient animation
        },
      },
    },
  },
  // Include Tailwind CSS plugins, here using the forms plugin for better styling of form elements
  plugins: [require("@tailwindcss/forms")],
};
