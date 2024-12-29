import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e2f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-blue-400 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/examples" className="text-white hover:text-blue-400 px-3 py-2 rounded-md">
              Example Sites
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;