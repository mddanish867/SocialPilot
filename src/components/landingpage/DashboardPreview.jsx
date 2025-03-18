// src/components/DashboardPreview.js
import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex space-x-2 mb-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex">
              <div className="w-1/4 bg-gray-200 p-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">👤</span>
                    <span className="text-sm">Asal Design</span>
                  </div>
                  <div className="text-sm text-gray-500">Options</div>
                  <div className="text-sm text-gray-500">Search</div>
                  <div className="text-sm text-gray-500">Members</div>
                  <div className="text-sm text-gray-500">Notifications</div>
                  <div className="text-sm text-gray-500">More</div>
                  <div className="text-sm text-gray-500">Channels</div>
                </div>
              </div>
              <div className="w-3/4 p-2">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-600"># Superbi-Project</span>
                    <span className="text-xs text-gray-400">14 members</span>
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <strong>Tiana Korsgaard</strong> 2:00 PM<br />
                      It's going well. We've made some good progress on the design and we're starting to work on the development phase.
                    </div>
                    <div className="text-sm">
                      <strong>Corey Dias</strong> 2:03 PM<br />
                      That's great to hear! Have you run into any issues or roadblocks so far?
                    </div>
                    <div className="text-sm">
                      <strong>Tatan Rozner</strong> 2:05 PM<br />
                      Not really, everything has been going smoothly. We did have to make some changes to the initial plan, but we were able to adjust quickly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Detail Channels</span>
              <span className="text-xs text-gray-400">Today</span>
            </div>
            <div className="space-y-4">
              <div className="text-sm">
                <strong># Superbi-Project</strong><br />
                About and Creating Design with Superbi result!
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Member</span>
                <div className="flex -space-x-2">
                  <img
                    src="https://via.placeholder.com/30"
                    alt="Member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://via.placeholder.com/30"
                    alt="Member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;