import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Style imports
import './styles/main.css';

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    // Refresh AOS on route changes
    AOS.refresh();
  }, []);

  return (
    <div className="App" style={{ width: '100%', margin: '0', padding: '0' }}>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;