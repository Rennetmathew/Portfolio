import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;