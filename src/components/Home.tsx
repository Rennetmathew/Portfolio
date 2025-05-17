import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [displayedRole, setDisplayedRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'AI Enthusiast'
  ];

  useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h1 className="text-7xl font-bold mb-6 font-['Playfair_Display'] text-white">
              Hi, I'm Rennet.
            </h1>
            <p className="text-2xl text-white/90 mb-4 font-['Playfair_Display']">
              I build full-stack experiences and explore the future with AI.
            </p>
            <div className="h-12 mb-8">
              <p className="text-xl text-blue-400 font-['Playfair_Display'] typing-effect">
                {roles[displayedRole]}
              </p>
            </div>
            <a 
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;