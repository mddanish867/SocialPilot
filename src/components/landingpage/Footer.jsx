// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-6">
        <img src="https://via.placeholder.com/100x40?text=Amazon" alt="Amazon" className="h-10" />
        <img src="https://via.placeholder.com/100x40?text=Atlassian" alt="Atlassian" className="h-10" />
        <img src="https://via.placeholder.com/100x40?text=GitHub" alt="GitHub" className="h-10" />
        <img src="https://via.placeholder.com/100x40?text=LaunchDarkly" alt="LaunchDarkly" className="h-10" />
        <img src="https://via.placeholder.com/100x40?text=Netflix" alt="Netflix" className="h-10" />
        <img src="https://via.placeholder.com/100x40?text=Medium" alt="Medium" className="h-10" />
      </div>
    </footer>
  );
};

export default Footer;