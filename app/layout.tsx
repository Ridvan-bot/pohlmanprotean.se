
import "./css/style.css";

import { Inter } from "next/font/google";

import localFont from "next/font/local";


import Header from "@/components/ui/header";
import { ThemeProvider } from "@/utils/ThemeContext";

const inter = Inter({
  subsets: ["latin"], 
  variable: "--font-inter", 
  display: "swap",
});

const nacelle = localFont({
  src: [ 
    {
      path: "../public/fonts/nacelle-regular.woff2", 
      weight: "400", 
      style: "normal", 
    },
    {
      path: "../public/fonts/nacelle-italic.woff2", 
      weight: "400", 
      style: "italic", 
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2", 
      weight: "600", 
      style: "normal", 
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2", 
      weight: "600", 
      style: "italic", 
    },
  ],
  variable: "--font-nacelle", 
  display: "swap", 
});

export const metadata = {
  title: "Pohlman Protean – IT‑konsult i Skåne",
  description:
    "Pohlman Protean erbjuder IT‑konsulttjänster i Skåne med fokus på utveckling, moln och automation. Baserad i Malmö/Trelleborg. Hyr en erfaren utvecklare/programmerare.",
  keywords: [
    "IT-konsult Skåne",
    "IT-konsult Malmö",
    "IT-konsult Trelleborg",
    "IT-konsult",
    "IT-konsulter",
    "Utvecklare",
    "Programmerare",
    "Utvecklare Skåne",
    "Utvecklare Malmö",
    "Utvecklare Trelleborg",
    "Programmerare Skåne",
    "Programmerare Malmö",
    "Programmerare Trelleborg",
    "Systemutvecklare",
    "Webbutveckling",
    "Molntjänster",
    "DevOps",
    "Automatisering",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alternates: {
    canonical: "https://pohlmanprotean.se/",
  },
  openGraph: {
    type: "website",
    url: "https://pohlmanprotean.se/",
    title: "Pohlman Protean – IT‑konsult i Skåne",
    description:
      "Pohlman Protean erbjuder IT‑konsulttjänster i Skåne med fokus på utveckling, moln och automation. Baserad i Malmö/Trelleborg. Hyr en erfaren utvecklare/programmerare.",
    siteName: "Pohlman Protean",
    images: [
      {
        url: "/images/PP_logo.png",
        width: 512,
        height: 512,
        alt: "Pohlman Protean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pohlman Protean – IT‑konsult i Skåne",
    description:
      "Pohlman Protean erbjuder IT‑konsulttjänster i Skåne med fokus på utveckling, moln och automation. Baserad i Malmö/Trelleborg. Hyr en erfaren utvecklare/programmerare.",
    images: ["/images/PP_logo.png"],
  },
};


export default function RootLayout({
  children, 
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="sv">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-white dark:bg-gray-950 font-inter text-base text-gray-900 dark:text-gray-200 antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {/* Apply styles from Inter and Nacelle fonts, background color, font color, and antialiasing */}
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {/* Set up a flex container to ensure full height and flexible layout */}
            <Header /> {/* Render the Header component */}
            {children} {/* Render the children passed to the RootLayout */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
