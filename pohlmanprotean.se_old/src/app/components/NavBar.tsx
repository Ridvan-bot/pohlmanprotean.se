// src/app/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mb-10">
      <Link to="/" className="custom-button">
        Home
      </Link>
      <Link to="/services" className="custom-button">
        Our Services
      </Link>
      <Link to="/contact" className="custom-button">
        Contact Us
      </Link>
      <Link to="/about" className="custom-button">
        About Us
      </Link>
    </div>
  );
};

export default Navbar;
