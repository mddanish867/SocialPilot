import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Client from "./Client";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Platforms from "./Platforms";
import Pricing from "./Pricing";
import Testimonals from "./Testimonals";
import CTS from "./CTS";
import Footer from "./Footer";


// export default function LandingPage() {
//     const [activeTab, setActiveTab] = useState('instagram');

//     useEffect(() => {
//         // Auto-rotate platforms every 4 seconds
//         const platformInterval = setInterval(() => {
//             setActiveTab(prev => {
//                 if (prev === 'instagram') return 'twitter';
//                 if (prev === 'twitter') return 'linkedin';
//                 if (prev === 'linkedin') return 'tiktok';
//                 return 'instagram';
//             });
//         }, 4000);

//         return () => clearInterval(platformInterval);
//     }, []);

//     return (
//         <div className="flex min-h-screen flex-col">
//             {/* Pass the activeTab state to both components */}
//             <Navbar activeTab={activeTab} />

//             {/* Update Hero component to accept activeTab as a prop instead of managing it internally */}
//             <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
//             <main className="flex-1">
//                 {/* Hero Section */}
//                 <Hero />

//                 {/* Logos Section */}
//                 <Client />

//                 {/* Features Section */}
//                 <Features />

//                 {/* How It Works Section */}
//                 <HowItWorks />

//                 {/* Platforms Section */}
//                 <Platforms />

//                 {/* Pricing Section */}
//                 <Pricing />

//                 {/* Testimonials Section */}
//                 <Testimonals />

//                 {/* CTA Section */}
//                 <CTS />
//             </main>
//             <Footer />
//         </div>
//     )
// }



const LandingPage = () => {
    // Manage the activeTab state in the parent component
    const [activeTab, setActiveTab] = useState('instagram');

    useEffect(() => {
        // Auto-rotate platforms every 4 seconds
        const platformInterval = setInterval(() => {
            setActiveTab(prev => {
                if (prev === 'instagram') return 'twitter';
                if (prev === 'twitter') return 'linkedin';
                if (prev === 'linkedin') return 'tiktok';
                return 'instagram';
            });
        }, 4000);

        return () => clearInterval(platformInterval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Pass the activeTab state to both components */}
            <Navbar activeTab={activeTab} />
            <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
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