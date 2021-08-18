import React from 'react';
import NavMenu from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavMenu />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
