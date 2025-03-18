import React from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        {
            title: "Connect with every application.",
            description: "Everything you need in an easily customizable dashboard."
        },
        {
            title: "Manage all your work in one place.",
            description: "Access all your tools and data from a single platform."
        },
        {
            title: "Collaborate with your team effortlessly.",
            description: "Share, communicate, and work together seamlessly."
        }
    ];

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Left Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <Link to="/" className="flex items-center space-x-2">
                                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-orange-500 flex items-center justify-center">
                                              <span className="text-orange-500 font-bold">SP</span>
                                            </div>
                                            <span className="ml-2 text-black font-bold">SocialPilot</span>
                                          </Link>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">Log in to your Account</h1>
                        <p className="text-gray-600 text-sm">Welcome back! Good to see you again.</p>
                    </div>

                    <div className="space-y-4">
                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                                <FaGoogle className="mr-2 text-red-500" />
                                <span className="text-sm">Google</span>
                            </button>
                            <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                                <FaFacebook className="mr-2 text-pink-600" />
                                <span className="text-sm">Facebook</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center">
                            <div className="flex-grow h-px bg-gray-200"></div>
                            <span className="px-3 text-xs text-gray-500">or continue with email</span>
                            <div className="flex-grow h-px bg-gray-200"></div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-range-400"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-range-400"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-pink-600 focus:ring-range-400 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="#" className="text-sm text-pink-600 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md transition-colors"
                        >
                            Log in
                        </button>

                        {/* Create Account Link */}
                        <div className="text-center text-sm mt-4">
                            <span className="text-gray-600">Don't have an account? </span>
                            <a href="/register" className="text-pink-600 hover:underline font-medium">
                                Create an account
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - pink Illustration */}
                <div className="hidden md:block w-1/2 bg-pink-400 p-12 relative">
                    <div className="h-full flex flex-col justify-center items-center text-white relative z-10">
                        <div className="mt-96 max-w-md">
                            <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
                            <p className="text-pink-100">{slides[currentSlide].description}</p>
                        </div>

                        {/* Illustration */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                            <div className="w-full h-full bg-pink-500 bg-opacity-30 rounded-full absolute"></div>
                            <div className="absolute top-1/4 right-0 bg-white rounded-lg p-2 shadow-lg">
                                <div className="w-6 h-6 bg-pink-300 rounded-full mb-1"></div>
                                <div className="w-20 h-2 bg-gray-200 rounded-full mb-1"></div>
                                <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="absolute right-8 top-1/2 bg-white rounded-lg p-3 shadow-lg">
                                <div className="w-28 h-36">
                                    <div className="flex items-center mb-4">
                                        <div className="w-6 h-6 bg-green-400 rounded-full mr-2"></div>
                                        <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className="w-6 h-6 bg-pink-300 rounded-full mr-2"></div>
                                        <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-purple-400 rounded-full mr-2"></div>
                                        <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-8 bg-white p-2 rounded-full shadow-lg">
                                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Dots for Slider */}
                        <div className="-bottom-2 absolute left-0 w-full flex justify-center space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-pink-300"
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;