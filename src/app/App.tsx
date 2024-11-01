import React from 'react';
import { AboutSection } from '../sections/About';
import { HeaderSection } from '../sections/Header';
import { HeroSection } from '../sections/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderSection />
        <HeroSection />
      </header>
    </div>
  );
}

export default App;
