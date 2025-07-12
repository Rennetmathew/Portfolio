import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Brain, Code2, Database, Download } from 'lucide-react';

const Home: React.FC = () => {
  const [displayedRole, setDisplayedRole] = useState(0);
  const roles = ['AI/ML Enthusiast', 'Python Developer', 'Data Scientist'];

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
        {/* Floating AI/ML Icons */}
        <Brain className="absolute w-32 h-32 text-blue-500/10 top-20 left-16 animate-float" />
        <Database className="absolute w-24 h-24 text-purple-500/10 top-1/4 right-20 animate-float delay-200" />
        <Code2 className="absolute w-28 h-28 text-green-500/10 bottom-1/4 left-24 animate-float delay-400" />
        <Brain className="absolute w-20 h-20 text-indigo-500/10 top-1/2 left-1/2 animate-float delay-700" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] top-[10%] left-[10%]" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] bottom-[10%] right-[10%]" />

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient">
            Hi, I'm Rennet Mathew
          </h1>

          <div className="h-12">
            <p className="text-2xl sm:text-3xl text-blue-400 font-medium transition-all duration-500 ease-in-out">
              {roles[displayedRole]}
            </p>
          </div>

          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Passionate about building practical AI solutions. Currently upskilling via GUVI's AI/ML program, 
            exploring the intersection of machine learning and real-world applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <a
              href="#projects"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                View My Work
              </span>
              <div className="absolute inset-0 z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-white/70">ML Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
              <div className="text-white/70">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-white/70">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
