import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import { ChaosProvider } from './context/ChaosContext';
import ChaosToggle from './components/ChaosToggle';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ChaosProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
            <About />
            <Services />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <ChaosToggle />
      </div>
    </ChaosProvider>
  );
}

export default App;
