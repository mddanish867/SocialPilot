// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-yellow-500">🌞</span>
          <span className="text-xl font-semibold">Supermi</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Download</a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;