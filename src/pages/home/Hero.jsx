// import React, { useState, useEffect } from 'react';
import LandingPage from "../../components/landingpage/LandingPage";
const Hero = () => {
  // const [activeTab, setActiveTab] = useState('instagram');
  // const [isLoaded, setIsLoaded] = useState(false);
  
  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);
  
  // const platforms = {
  //   instagram: {
  //     color: 'from-purple-500 to-pink-500',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  //       </svg>
  //     )
  //   },
  //   twitter: {
  //     color: 'from-blue-400 to-blue-500',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  //       </svg>
  //     )
  //   },
  //   linkedin: {
  //     color: 'from-blue-500 to-blue-600',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  //       </svg>
  //     )
  //   },
  //   tiktok: {
  //     color: 'from-gray-800 to-gray-900',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  //       </svg>
  //     )
  //   }
  // };

  return (
    <LandingPage/>
    // <section className="relative w-full bg-white text-gray-900 min-h-screen flex items-center">
    //   {/* Subtle background patterns */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
    //     {/* Subtle accent element */}
    //     <div className={`absolute h-64 w-64 rounded-full blur-3xl opacity-5 ${platforms[activeTab].color} top-1/3 -left-32 transition-all duration-700`}></div>
        
    //     {/* Diagonal line accent */}
    //     <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5">
    //       <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    //         <line x1="0" y1="100" x2="100" y2="0" stroke={activeTab === 'instagram' ? '#E1306C' : 
    //                                                        activeTab === 'twitter' ? '#1DA1F2' : 
    //                                                        activeTab === 'linkedin' ? '#0077B5' : 
    //                                                        '#000000'} 
    //               strokeWidth="0.5" />
    //       </svg>
    //     </div>
    //   </div>

    //   <div className="container mx-auto px-6 relative z-10">
    //     <div className="grid lg:grid-cols-12 gap-12 items-center">
    //       {/* Content Column */}
    //       <div className={`lg:col-span-5 space-y-8 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 ease-out`}>
    //         {/* Platform selector - minimal tabs */}
    //         <div className="inline-flex p-1 rounded-full bg-gray-100">
    //           {Object.entries(platforms).map(([key, platform]) => (
    //             <button 
    //               key={key}
    //               onClick={() => setActiveTab(key)}
    //               className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    //                 activeTab === key 
    //                   ? `bg-white shadow-sm text-gray-900` 
    //                   : 'hover:bg-gray-200/50 text-gray-500'
    //               }`}
    //             >
    //               <span className={`mr-2 ${activeTab === key ? 'text-' + key.toLowerCase() : ''}`}>{platform.icon}</span>
    //               <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
    //             </button>
    //           ))}
    //         </div>
            
    //         {/* Main heading - cleaner typography */}
    //         <div>
    //           <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
    //             Simplify Your <span className={`bg-clip-text text-transparent bg-gradient-to-r ${platforms[activeTab].color} transition-all duration-300`}>
    //               Social Media
    //             </span>
    //           </h1>
    //           <p className="mt-4 text-lg text-gray-600 max-w-xl">
    //             Manage all your social platforms from one intuitive dashboard. Grow your audience effortlessly.
    //           </p>
    //         </div>
            
    //         {/* Key metrics - minimalist approach */}
    //         <div className="flex flex-wrap gap-6">
    //           <div className="flex flex-col">
    //             <span className="text-3xl font-bold">3.5x</span>
    //             <span className="text-sm text-gray-500">Faster Growth</span>
    //           </div>
    //           <div className="flex flex-col">
    //             <span className="text-3xl font-bold">47%</span>
    //             <span className="text-sm text-gray-500">More Engagement</span>
    //           </div>
    //           <div className="flex flex-col">
    //             <span className="text-3xl font-bold">10k+</span>
    //             <span className="text-sm text-gray-500">Active Users</span>
    //           </div>
    //         </div>
            
    //         {/* CTA buttons - clean design */}
    //         <div className="flex gap-4">
    //           <button className={`px-6 py-3 rounded-lg font-medium bg-gradient-to-r ${platforms[activeTab].color} text-white shadow-sm hover:shadow-md transition-all duration-300`}>
    //             Start Free Trial
    //           </button>
    //           <button className="px-6 py-3 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300">
    //             <span className="flex items-center">
    //               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    //               </svg>
    //               Watch Demo
    //             </span>
    //           </button>
    //         </div>
    //       </div>
          
    //       {/* Dashboard Preview - Simplified and cleaner */}
    //       <div className={`lg:col-span-7 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'} transition-all duration-700 delay-200 ease-out`}>
    //         <div className="relative">
    //           {/* Card shadow and subtle platform-based accent */}
    //           <div className={`absolute -inset-2 bg-gradient-to-br ${platforms[activeTab].color} opacity-5 rounded-xl blur-lg transition-all duration-700`}></div>
              
    //           {/* Dashboard container */}
    //           <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg">
    //             {/* App header bar */}
    //             <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
    //               <div className="flex items-center space-x-3">
    //                 <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${platforms[activeTab].color}`}></div>
    //                 <div className="text-sm font-medium text-gray-700">SocialOne</div>
    //               </div>
    //               <div className="flex space-x-4">
    //                 <div className="w-6 h-1.5 rounded-full bg-gray-200"></div>
    //                 <div className="w-3 h-3 rounded-full bg-gray-200"></div>
    //               </div>
    //             </div>
                
    //             {/* Dashboard content - minimal and modern */}
    //             <div className="p-4">
    //               {/* Platform info and quick stats */}
    //               <div className="flex mb-4 justify-between items-center">
    //                 <div className="flex items-center space-x-2">
    //                   <div className={`p-1.5 rounded-lg bg-gradient-to-r ${platforms[activeTab].color}`}>
    //                     {React.cloneElement(platforms[activeTab].icon, { className: "w-4 h-4 text-white" })}
    //                   </div>
    //                   <span className="font-medium">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
    //                 </div>
    //                 <div className="text-sm text-gray-500">Last updated: Today, 2:45 PM</div>
    //               </div>
                  
    //               {/* Clean stats row */}
    //               <div className="grid grid-cols-3 gap-3 mb-4">
    //                 <div className="bg-gray-50 p-3 rounded-lg">
    //                   <div className="text-xs text-gray-500 mb-1">Posts</div>
    //                   <div className="text-lg font-bold">24.8K</div>
    //                 </div>
    //                 <div className="bg-gray-50 p-3 rounded-lg">
    //                   <div className="text-xs text-gray-500 mb-1">Followers</div>
    //                   <div className="text-lg font-bold">478K</div>
    //                 </div>
    //                 <div className="bg-gray-50 p-3 rounded-lg">
    //                   <div className="text-xs text-gray-500 mb-1">Growth</div>
    //                   <div className="text-lg font-bold text-green-500">+32%</div>
    //                 </div>
    //               </div>
                  
    //               {/* Simplified Analytics graph */}
    //               <div className="bg-gray-50 p-4 rounded-lg mb-4">
    //                 <div className="flex justify-between items-center mb-3">
    //                   <div className="text-sm font-medium">Engagement Trend</div>
    //                   <div className="text-xs text-gray-500">Last 30 days</div>
    //                 </div>
    //                 <div className="relative h-32">
    //                   {/* Simple SVG graph */}
    //                   <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
    //                     {/* Grid lines */}
    //                     <line x1="0" y1="25" x2="300" y2="25" stroke="#E5E7EB" strokeWidth="1" />
    //                     <line x1="0" y1="50" x2="300" y2="50" stroke="#E5E7EB" strokeWidth="1" />
    //                     <line x1="0" y1="75" x2="300" y2="75" stroke="#E5E7EB" strokeWidth="1" />
                        
    //                     {/* Graph path - simplified, elegant line */}
    //                     <path 
    //                       d="M0,80 C30,75 60,40 90,45 C120,50 150,20 180,15 C210,10 240,30 270,10 C290,5 300,5 300,5" 
    //                       fill="none" 
    //                       stroke={activeTab === 'instagram' ? '#E1306C' : 
    //                               activeTab === 'twitter' ? '#1DA1F2' : 
    //                               activeTab === 'linkedin' ? '#0077B5' : 
    //                               '#000000'} 
    //                       strokeWidth="2" 
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                     />
    //                   </svg>
    //                 </div>
    //               </div>
                  
    //               {/* Recent activity - cleaner list */}
    //               <div>
    //                 <div className="text-sm font-medium mb-2">Recent Activity</div>
    //                 <div className="space-y-2">
    //                   <div className="flex items-center p-2 bg-gray-50 rounded-lg">
    //                     <div className={`w-2 h-2 rounded-full bg-green-400 mr-3 flex-shrink-0`}></div>
    //                     <div className="text-sm">New follower milestone reached</div>
    //                     <div className="text-xs text-gray-400 ml-auto">2h ago</div>
    //                   </div>
    //                   <div className="flex items-center p-2 bg-gray-50 rounded-lg">
    //                     <div className={`w-2 h-2 rounded-full bg-blue-400 mr-3 flex-shrink-0`}></div>
    //                     <div className="text-sm">Post scheduled for tomorrow</div>
    //                     <div className="text-xs text-gray-400 ml-auto">5h ago</div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
              
    //           {/* Subtle notification - clean and minimal */}
    //           <div className="absolute top-16 -right-4 max-w-xs bg-white rounded-lg p-3 shadow-lg border border-gray-100 transform rotate-1 hidden sm:block">
    //             <div className="flex items-center space-x-2 mb-1">
    //               <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platforms[activeTab].color}`}></div>
    //               <div className="text-xs font-medium">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Update</div>
    //             </div>
    //             <div className="text-xs">Your latest post is trending with 37% higher engagement</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;