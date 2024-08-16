import React from 'react';
import MainBanner from '../components/MainBanner';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import Projects from '../components/Projects';

function HomePage() {
  return (
    <div id='/'>
      <MainBanner />
      <AboutSection />
      <ServicesOverview />
      <Testimonials />
      <Projects />
    </div>
  );
}

export default HomePage;
