import React, { useState, useEffect } from 'react';

// Accept activeTab and setActiveTab as props
const Hero = ({ activeTab, setActiveTab }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger entrance animations
    setIsLoaded(true);
    // No platform rotation interval here as it's handled in the parent component
  }, []);
  
  const platforms = {
    instagram: {
      color: 'from-purple-600 to-pink-600',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    twitter: {
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    linkedin: {
      color: 'from-blue-600 to-blue-800',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    tiktok: {
      color: 'from-black to-gray-800',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    }
  };

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="relative mx-auto">
        {/* Background element */}
        <div className="absolute inset-0 w-full h-full">
          <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${platforms[activeTab].color} transition-all duration-1000 ease-in-out`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full border-r border-white/20" style={{left: '25%'}}></div>
            <div className="h-full w-full border-r border-white/20" style={{left: '50%'}}></div>
            <div className="h-full w-full border-r border-white/20" style={{left: '75%'}}></div>
            <div className="h-full w-full border-b border-white/20" style={{top: '25%'}}></div>
            <div className="h-full w-full border-b border-white/20" style={{top: '50%'}}></div>
            <div className="h-full w-full border-b border-white/20" style={{top: '75%'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Content Column */}
            <div className={`space-y-8 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} transition-all duration-1000 ease-out`}>
              {/* Platform tabs */}
              <div className="flex space-x-4 pb-2">
                {Object.entries(platforms).map(([key, platform]) => (
                  <button 
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === key ? `bg-gradient-to-r ${platform.color} shadow-lg` : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </button>
                ))}
              </div>
              
              {/* Main heading with dynamically changing gradient text */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Dominate <span className={`bg-clip-text text-transparent bg-gradient-to-r ${platforms[activeTab].color} transition-all duration-300`}>Social Media</span> With One Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Powerful automation, AI-driven insights, and cross-platform management that puts you ahead of the competition.
              </p>
              
              {/* Metrics with animated counters */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                <div>
                  <div className="text-3xl font-bold">3x</div>
                  <div className="text-sm text-gray-400">Faster Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">47%</div>
                  <div className="text-sm text-gray-400">More Engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
              </div>
              
              {/* CTA section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="relative overflow-hidden group px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-lg transition-all duration-300">
                  <span className="relative z-10">Start Free Trial</span>
                  <span className={`absolute inset-0 w-full h-full bg-gradient-to-r ${platforms[activeTab].color} translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></span>
                  <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100"></span>
                </button>
                
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 font-medium rounded-lg backdrop-blur-sm transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
            
            {/* Dashboard Preview Column with 3D perspective */}
            <div className={`relative transform perspective-1000 ${isLoaded ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-12 opacity-0 rotate-6'} transition-all duration-1000 delay-300 ease-out`}>
              <div className="relative transform rotateY-3 hover:rotateY-0 transition-all duration-700 shadow-2xl shadow-blue-500/10">
                {/* Platform-specific color accent based on active tab */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platforms[activeTab].color} opacity-80 rounded-xl blur-xl -z-10 transition-all duration-700`}></div>
                
                {/* Main dashboard container */}
                <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                  {/* App header bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${platforms[activeTab].color}`}></div>
                      <div className="text-sm text-gray-400">Social Dashboard</div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="w-4 h-1 rounded-full bg-gray-600"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-4">
                    <img
                      src="/vite.svg"
                      width={800}
                      height={600}
                      alt="Social media dashboard preview"
                      className="w-full object-cover rounded-lg border border-gray-800"
                    />
                  </div>
                  
                  {/* Interactive dashboard elements */}
                  <div className="grid grid-cols-3 gap-2 p-4">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Posts</div>
                      <div className="text-lg font-bold">24.8K</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Reach</div>
                      <div className="text-lg font-bold">478K</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Growth</div>
                      <div className="text-lg font-bold">+32%</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification elements */}
                <div className="absolute -top-6 -right-6 bg-gray-900 border border-gray-800 rounded-lg p-3 max-w-[180px] shadow-xl transform translate-z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platforms[activeTab].color}`}></div>
                    <div className="text-xs font-medium">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</div>
                  </div>
                  <div className="text-sm">Your post reached 24,582 people in the last hour</div>
                </div>
                
                <div className="absolute -bottom-4 -left-6 bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-xl transform translate-z-10">
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div className="text-xs font-medium text-green-400">Growing Fast</div>
                  </div>
                  <div className="text-sm">Engagement up 37% this week</div>
                </div>
              </div>
              
              {/* Animated dots background */}
              <div className="absolute -z-10 inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `pulse ${2 + Math.random() * 3}s infinite`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        
        .rotateY-3 {
          transform: perspective(1000px) rotateY(3deg);
        }
        
        .hover\\:rotateY-0:hover {
          transform: perspective(1000px) rotateY(0deg);
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
      `}</style>
    </section>
  );
};

export default Hero;