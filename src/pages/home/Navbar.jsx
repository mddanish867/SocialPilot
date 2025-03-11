import React from 'react';
import { Link } from "react-router-dom";
import { CircleDashed } from "lucide-react";

// The key change: accept activeTab as a prop instead of managing it internally
const Navbar = ({ activeTab }) => {
  const platforms = {
    instagram: {
      color: 'from-purple-600 to-pink-600',
    },
    twitter: {
      color: 'from-blue-400 to-blue-600',
    },
    linkedin: {
      color: 'from-blue-600 to-blue-800',
    },
    tiktok: {
      color: 'from-black to-gray-800',
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full  bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="relative">
          {/* Background element with matching gradient */}
          <div className="absolute inset-0 w-full h-full">
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${platforms[activeTab].color} transition-all duration-1000 ease-in-out`}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
          </div>
          
          <div className="container relative z-10 flex h-16 items-center justify-between">
            <div className="ml-4 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r ${platforms[activeTab].color} transition-all duration-300`}>
                  <CircleDashed className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">SocialPilot</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <Link to="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                Features
              </Link>
              <Link to="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                How It Works
              </Link>
              <Link to="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                Pricing
              </Link>
              <Link to="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                Testimonials
              </Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden sm:block font-medium text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300">
                Log in
              </Link>
              <button
                className={`relative overflow-hidden group bg-gradient-to-r ${platforms[activeTab].color} text-white font-medium px-6 mr-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full sm:w-auto`}
                style={{ 
                  boxShadow: `0 8px 16px -4px rgba(${activeTab === 'instagram' ? '236, 72, 153' : activeTab === 'twitter' ? '59, 130, 246' : activeTab === 'linkedin' ? '37, 99, 235' : '0, 0, 0'}, 0.3)` 
                }}
              >
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;