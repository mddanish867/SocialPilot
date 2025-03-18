// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-pink-50 to-orange-50 text-center py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Empower Your Conversations with Next-Gen Messaging Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Unlock seamless communication and streamline your messaging experience with our innovative dashboard solution.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;