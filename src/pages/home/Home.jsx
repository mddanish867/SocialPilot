import React from "react";
import Hero from "./Hero";
import Client from "./Client";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Platforms from "./Platforms";
import Pricing from "./Pricing";
import Testimonals from "./Testimonals";
import CTS from "./CTS";
import Footer from "./Footer";
import Navbar from "../../pages/home/Navbar";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Pass the activeTab state to both components */}
      <div className="bg-gradient-to-br from-white via-pink-300 to-orange-500">
        <Navbar />
        <Hero />
      </div>

      
        {/* Logos Section */}
        <Client />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Platforms Section */}
        <Platforms />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonals />

        {/* CTA Section */}
        <CTS />
 
      <Footer />
    </div>
  );
};

export default LandingPage;
