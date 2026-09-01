import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StackRibbon from './components/StackRibbon';
import SelectedWork from './components/SelectedWork';
import AboutExperience from './components/AboutExperience';
import StatsBar from './components/StatsBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ThreeDScene from './components/ThreeDScene';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent selection:text-background overflow-x-hidden">
      <ThreeDScene />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <StackRibbon />
        <SelectedWork />
        <AboutExperience />
        <StatsBar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
