import { Link } from "react-router-dom";
import Navbar from "../../pages/home/Navbar";
export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-300 to-orange-500">
      {/* Browser chrome mockup */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="rounded-lg overflow-hidden  bg-transparent">    

          {/* Website content */}
          <div className="p-4">
          <Navbar  />

            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-wider mb-4">UNLOCK CONVERSATIONAL POWER</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Empower Your
                <br />
                Conversations with Next-Gen
                <br />
                Messaging Dashboard
              </h1>
              <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
                Unlock seamless communication and streamline your messaging experience with our innovative dashboard
                solution.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2">
                Get Started
              </button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Sidebar */}
                  <div className="w-full lg:w-64 border-r border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-6">
                      {/* Replaced Avatar with Tailwind-styled div */}
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        AD
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Azul Design</div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>

                    <div className="text-xs uppercase text-gray-500 mb-2">Options</div>
                    <div className="space-y-1 mb-6">
                      <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span className="text-sm">Home</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <span className="text-sm">Search</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span className="text-sm">Members</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                        <span className="text-sm">Settings</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        <span className="text-sm">Notifications</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs uppercase text-gray-500">CHANNELS</div>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs"># Supermi Project</div>
                      <div className="text-xs text-gray-500">9 Members</div>
                      <div className="text-xs text-gray-500">4 Online</div>
                      <div className="flex-1"></div>
                      <div className="flex gap-2">
                        <button className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                          </svg>
                        </button>
                        <button className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        </button>
                        <button className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="15 3 21 3 21 9" />
                            <polyline points="9 21 3 21 3 15" />
                            <line x1="21" y1="3" x2="14" y2="10" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                          </svg>
                        </button>
                        <button className="text-blue-600 font-medium text-xs">Detail Channels</button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Message 1 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          TM
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">Tiana Korsgaard</span>
                            <span className="text-xs text-gray-500">9:00 PM</span>
                          </div>
                          <p className="text-sm">
                            It's going well. We've made some good progress on the design and we're starting to work on
                            the development phase.
                          </p>
                        </div>
                      </div>

                      {/* Message 2 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          CD
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">Cindy Doe</span>
                            <span className="text-xs text-gray-500">9:20 PM</span>
                          </div>
                          <p className="text-sm">That's great to hear. Have you had any issues or roadblocks so far?</p>
                        </div>
                      </div>

                      {/* Message 3 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          TR
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">Tobin Rosser</span>
                            <span className="text-xs text-gray-500">9:32 PM</span>
                          </div>
                          <p className="text-sm">
                            Not really, everything has been going smoothly. We will have to make some changes to the
                            initial plan, but we were able to adjust quickly.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right sidebar */}
                    <div className="absolute right-0 top-0 w-full lg:w-64 h-full bg-gray-50 border-l border-gray-200 p-4 hidden lg:block">
                      <div className="text-xs uppercase text-gray-500 mb-2">TEAM CHANNEL</div>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs mb-4">
                        # Supermi Project
                      </div>

                      <div className="text-xs uppercase text-gray-500 mb-2">ABOUT</div>
                      <p className="text-xs text-gray-600 mb-4">Discussion and Creating design with Supermi result</p>

                      <div className="text-xs uppercase text-gray-500 mb-2">MEMBERS</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                              AC
                            </div>
                            <span className="text-xs">Adrian Carter</span>
                          </div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                              JF
                            </div>
                            <span className="text-xs">Jordan Fisher</span>
                          </div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}