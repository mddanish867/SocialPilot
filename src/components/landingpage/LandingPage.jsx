import React from 'react';
import Header from '../../components/landingpage/LandingPage';
import HeroSection from '../../components/landingpage/LandingPage';
import DashboardPreview from '../../components/landingpage/LandingPage';
import Footer from '../../components/landingpage/LandingPage';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <HeroSection />
      <DashboardPreview />
      <Footer />
    </div>
  );
}

export default LandingPage;