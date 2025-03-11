import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Sample data for the donut chart
  const donutChartData = [
    { category: 'Food', percentage: 34, color: '#3b82f6' },
    { category: 'Housing', percentage: 28, color: '#f97316' },
    { category: 'Transport', percentage: 20, color: '#10b981' },
    { category: 'Other', percentage: 18, color: '#8b5cf6' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Dashboard Preview */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 relative">
          <div className="mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <span className="text-blue-500 font-bold">F</span>
              </div>
              <span className="ml-2 text-gray-800 font-bold">FINOTIC</span>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            {/* Balance Card */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-4">
              <div className="text-xs text-gray-500 mb-1">CURRENT BALANCE</div>
              <div className="text-2xl font-bold text-blue-900">$24,359</div>
            </div>
            
            {/* Donut Chart */}
            <div className="absolute top-10 right-2 bg-white rounded-xl shadow-md p-3 w-32 h-32">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="15" />
                  
                  {/* Calculate and render each segment of the donut chart */}
                  {donutChartData.map((segment, index) => {
                    // Calculate start and end angles for the segment
                    const totalPercentage = donutChartData.reduce((sum, data) => sum + data.percentage, 0);
                    const startAngle = donutChartData.slice(0, index).reduce((sum, data) => 
                      sum + (data.percentage / totalPercentage) * 360, 0);
                    const endAngle = startAngle + (segment.percentage / totalPercentage) * 360;
                    
                    // Convert angles to radians
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    // Calculate the SVG arc path
                    const x1 = 50 + 40 * Math.cos(startRad);
                    const y1 = 50 + 40 * Math.sin(startRad);
                    const x2 = 50 + 40 * Math.cos(endRad);
                    const y2 = 50 + 40 * Math.sin(endRad);
                    
                    // Determine if the arc should be drawn as more than 180 degrees
                    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
                    
                    const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                    
                    return (
                      <path key={index} d={pathData} fill={segment.color} />
                    );
                  })}
                  
                  {/* White circle in the middle to create donut effect */}
                  <circle cx="50" cy="50" r="25" fill="white" />
                  
                  {/* Text in the middle */}
                  <text x="50" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">34</text>
                  <text x="50" y="60" textAnchor="middle" fontSize="8" fill="#666">Food</text>
                </svg>
              </div>
            </div>
            
            {/* Transaction Button */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex items-center">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-sm">New transaction</div>
                <div className="text-xs text-gray-500">or upload .xls file</div>
              </div>
            </div>
            
            {/* Dashboard Message */}
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-3">Welcome back!</h2>
              <p className="text-gray-500 text-sm mb-1">Start managing your finance faster and better</p>
              <p className="text-gray-500 text-sm">Start managing your finance faster and better</p>
            </div>
            
            {/* Slider Controls */}
            <div className="flex items-center mt-8">
              <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
              
              <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back!</h1>
            <p className="text-gray-500 text-sm mb-8">Start managing your finance faster and better</p>
            
            <form className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="you@example.com"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="At least 8 characters"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              
              {/* Login Button */}
              <button
                type="button"
                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                Login
              </button>
              
              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className="px-3 text-sm text-gray-400">or</span>
                <div className="flex-grow h-px bg-gray-200"></div>
              </div>
              
              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaGoogle className="mr-2 text-red-500" />
                  <span className="text-sm font-medium text-gray-800">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaFacebook className="mr-2 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">Facebook</span>
                </button>
              </div>
              
              {/* Sign Up Link */}
              <div className="text-center text-sm text-gray-500 mt-6">
                <span>Don't you have an account? </span>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  Sign Up
                </a>
              </div>
            </form>
            
            {/* Footer */}
            <div className="text-center text-xs text-gray-400 mt-12">
              © 2023 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;