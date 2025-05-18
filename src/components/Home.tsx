import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Code2, Brain, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  const [displayedRole, setDisplayedRole] = useState(0);
  const roles = ['Full Stack Developer', 'AI Enthusiast'];

  useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          }}
        />
        {/* Floating Icons */}
        <Code2 className="absolute w-32 h-32 text-blue-500/10 top-20 left-16 animate-float" />
        <Brain className="absolute w-24 h-24 text-purple-500/10 top-1/4 right-20 animate-float delay-200" />
        <Rocket className="absolute w-28 h-28 text-green-500/10 bottom-1/4 left-24 animate-float delay-400" />
        <Brain className="absolute w-20 h-20 text-indigo-500/10 top-1/2 left-1/2 animate-float delay-700" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] top-[10%] left-[10%]" />
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] bottom-[10%] right-[10%]" />

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient">
            Hi, I'm Rennet.
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 font-['Playfair_Display'] max-w-2xl mx-auto">
            I build full-stack experiences and explore the future with AI.
          </p>

          <div className="h-10">
            <p className="text-lg sm:text-2xl text-blue-400 font-['Playfair_Display'] transition-all duration-500 ease-in-out">
              {roles[displayedRole]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            <a
              href="#projects"
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full transition-transform hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-full hover:border-white/60 transition hover:-translate-y-1"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
