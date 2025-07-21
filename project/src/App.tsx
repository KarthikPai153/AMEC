import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Announcements from './components/Announcements';
import Gallery from './components/Gallery';
import About from './components/About';
import Institutions from './components/Institutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
            <Mission />
            <div className="max-w-7xl mx-auto px-4 py-12">
              <Announcements />
            </div>
            <Gallery />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="institutions">
            <Institutions />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;