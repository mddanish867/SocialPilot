import React from 'react';
import Hero from "./Hero";
import Client from "./Client";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Platforms from "./Platforms";
import Pricing from "./Pricing";
import Testimonals from "./Testimonals";
import CTS from "./CTS";
import Footer from "./Footer";

const LandingPage = () => {   
    return (
        <div className="flex flex-col min-h-screen">
            {/* Pass the activeTab state to both components */}
          
            <Hero/>
            <main className="flex-1">

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
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;