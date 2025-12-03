import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Methodology from './components/Methodology';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Methodology />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;