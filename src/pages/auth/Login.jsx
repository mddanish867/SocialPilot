import React from 'react';
import { FaEye, FaGoogle, FaFacebookF } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="ml-2 font-bold text-gray-800">FINOTIC</span>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <div className="text-xs text-gray-500">CURRENT BALANCE</div>
                    <div className="font-bold text-lg text-blue-500">$24,359</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-24 h-24">
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E6E6E6"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray="35, 100"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="3"
                          strokeDasharray="25, 100"
                          strokeDashoffset="-35"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeDasharray="15, 100"
                          strokeDashoffset="-60"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">34</span>
                        <span className="text-xs text-gray-500">Food</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <span className="text-xs">+</span>
                  </div>
                  <div className="ml-2">
                    <div className="text-sm font-medium">New transaction</div>
                    <div className="text-xs text-gray-500">or upload .xls file</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-1">Welcome back!</h2>
              <p className="text-gray-500 text-sm mb-1">Start managing your finance faster and better</p>
              <p className="text-gray-500 text-sm">Start managing your finance faster and better</p>
              
              <div className="flex items-center mt-6">
                <button className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="flex mx-4 space-x-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <button className="w-6 h-6 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-1">Welcome back!</h2>
              <p className="text-gray-500 text-sm mb-8">Start managing your finance faster and better</p>
              
              <form>
                <div className="mb-4">
                  <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <input
                      type="password"
                      className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 text-gray-400">
                      <FaEye className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">At least 8 characters</span>
                  </div>
                </div>
                
                <div className="mb-6 text-right">
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
                
                <div className="flex items-center justify-center my-4">
                  <div className="border-t border-gray-300 flex-grow"></div>
                  <div className="mx-4 text-sm text-gray-500">or</div>
                  <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <FaGoogle className="text-red-500 mr-2" />
                    <span className="text-sm">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <FaFacebookF className="text-blue-600 mr-2" />
                    <span className="text-sm">Facebook</span>
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't you have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-400">
                  © 2022 ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;