// src/app/layout.tsx
import React from 'react';
import '../styles/tailwind.css'; // Adjust the path based on your project structure
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default Layout;
