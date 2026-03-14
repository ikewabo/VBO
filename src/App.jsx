import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EventsSection from './sections/EventsSection';
import MenuSection from './sections/MenuSection';
import ExperienceSection from './sections/ExperienceSection';
import WeeklyNightsSection from './sections/WeeklyNightsSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <MenuSection />
        <ExperienceSection />
        <WeeklyNightsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
