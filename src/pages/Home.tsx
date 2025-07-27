import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Announcements from '../components/Announcements';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Announcements />
      </div>
      <About />
    </div>
  );
};

export default Home;