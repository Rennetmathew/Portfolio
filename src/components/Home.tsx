import React, { useState, useEffect } from 'react';
import useScrollAnimation, { useSmoothScroll } from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';
import { Code2, Brain, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  const [displayedRole, setDisplayedRole] = useState(0);
  const roles = ['ML Engineer', 'AI Developer', 'Data Scientist'];
  const { scrollToSection } = useSmoothScroll();
  const { isDarkMode } = useTheme();

  useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <section id="home" className={`min-h-screen relative overflow-hidden flex items-center transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-black' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Grid Lines */}
        <div
          className={`absolute inset-0 ${
            isDarkMode ? 'opacity-10' : 'opacity-5'
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(to bottom, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          }}
        />
        {/* Floating Icons with Parallax */}
        <Code2 className={`absolute w-32 h-32 ${
          isDarkMode ? 'text-blue-500/10' : 'text-blue-600/20'
        } top-20 left-16 animate-float parallax`} data-speed="0.3" />
        <Brain className={`absolute w-24 h-24 ${
          isDarkMode ? 'text-purple-500/10' : 'text-purple-600/20'
        } top-1/4 right-20 animate-float-delay-1 parallax`} data-speed="0.5" />
        <Rocket className={`absolute w-28 h-28 ${
          isDarkMode ? 'text-green-500/10' : 'text-green-600/20'
        } bottom-1/4 left-24 animate-float-delay-2 parallax`} data-speed="0.2" />
        <Brain className={`absolute w-20 h-20 ${
          isDarkMode ? 'text-indigo-500/10' : 'text-indigo-600/20'
        } top-1/2 left-1/2 animate-float parallax`} data-speed="0.4" />
      </div>

      {/* Glowing Orbs with Parallax */}
      <div className={`absolute w-72 h-72 rounded-full blur-[120px] top-[10%] left-[10%] animate-float parallax ${
        isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/30'
      }`} data-speed="0.1" />
      <div className={`absolute w-72 h-72 rounded-full blur-[120px] bottom-[10%] right-[10%] animate-float-delay-1 parallax ${
        isDarkMode ? 'bg-pink-500/20' : 'bg-pink-400/30'
      }`} data-speed="0.15" />

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-on-scroll">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold font-['Playfair_Display'] bg-gradient-to-r animate-gradient bg-clip-text text-transparent ${
            isDarkMode 
              ? 'from-white via-blue-200 to-white' 
              : 'from-gray-900 via-blue-600 to-gray-900'
          }`}>
            Hi, I'm Rennet.
          </h1>

          <p className={`text-xl sm:text-2xl font-['Playfair_Display'] max-w-2xl mx-auto ${
            isDarkMode ? 'text-white/80' : 'text-gray-700'
          }`}>
            I build intelligent systems and explore the frontiers of machine learning and AI.
          </p>

          <div className="h-10">
            <p className={`text-lg sm:text-2xl font-['Playfair_Display'] transition-all duration-500 ease-in-out ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {roles[displayedRole]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            <button
              onClick={() => handleScrollToSection('projects')}
              className={`group relative inline-flex items-center px-6 py-3 rounded-full transition-transform hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
              }`}
            >
              <span className="relative z-10">View My Work</span>
              <div className={`absolute inset-0 z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                  : 'bg-gradient-to-r from-purple-700 to-pink-700'
              }`}></div>
            </button>

            <button
              onClick={() => handleScrollToSection('contact')}
              className={`inline-flex items-center px-6 py-3 border rounded-full transition hover:-translate-y-1 ${
                isDarkMode 
                  ? 'border-white/30 text-white hover:border-white/60' 
                  : 'border-gray-400 text-gray-700 hover:border-gray-600'
              }`}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
