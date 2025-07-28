import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useScrollProgress, useScrollReveal } from './hooks/useScrollAnimation';
import { ThemeProvider } from './hooks/useTheme';

const App: React.FC = () => {
  const { scrollProgress } = useScrollProgress();
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="App">
        {/* Scroll Progress Bar */}
        <div 
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
        
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;