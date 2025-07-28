import React from 'react';
import { Code, Brain, Rocket, Coffee, Download, ExternalLink } from 'lucide-react';
import useScrollAnimation, { useSmoothScroll } from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';

const About: React.FC = () => {
  useScrollAnimation();
  const { scrollToSection } = useSmoothScroll();
  const { isDarkMode } = useTheme();

  const passions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Building and deploying intelligent models that solve real-world problems"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Development",
      description: "Creating intelligent systems and exploring cutting-edge AI technologies"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Data Science",
      description: "Extracting insights from complex datasets and driving data-informed decisions"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Staying ahead with the latest AI/ML advancements and methodologies"
    }
  ];

  const handleViewProjects = () => {
    scrollToSection('projects');
  };

  return (
    <section id="about" className={`min-h-screen relative overflow-hidden py-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-black' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      {/* Decorative elements with Parallax */}
      <div className={`absolute top-0 left-0 w-1/3 h-1/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 parallax ${
        isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
      }`} data-speed="0.2"></div>
      <div className={`absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 parallax ${
        isDarkMode ? 'bg-gradient-to-tl from-indigo-500/10 to-pink-500/10' : 'bg-gradient-to-tl from-indigo-400/20 to-pink-400/20'
      }`} data-speed="0.3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-on-scroll">
            <h2 className={`text-5xl font-bold mb-6 font-serif tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About Rennet
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
          </div>

          <div className="prose prose-lg prose-invert mx-auto mb-16 animate-on-scroll">
            <div className={`backdrop-blur-sm border rounded-xl p-8 shadow-xl ${
              isDarkMode
                ? 'bg-gradient-to-br from-black/60 to-gray-900/30 border-gray-500/20'
                : 'bg-gradient-to-br from-white/95 to-blue-100/80 border-blue-200/40'
            }`}>
              <p className={`text-xl leading-relaxed mb-6 font-serif ${
                isDarkMode ? 'text-white/90' : 'text-gray-800'
              }`}>
                Meet Rennet T Mathew, a passionate AI/ML engineer with expertise in machine learning, data science, and intelligent system development. Currently pursuing B.Tech in Artificial Intelligence and Data Science, I specialize in building and deploying machine learning models that solve real-world problems.
              </p>
              <p className={`text-lg leading-relaxed font-serif mb-8 ${
                isDarkMode ? 'text-white/80' : 'text-gray-700'
              }`}>
                With hands-on experience in data analysis, ML model development, and AI-powered applications, I combine theoretical knowledge with practical expertise to create innovative solutions that leverage the power of artificial intelligence and machine learning.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
                <button
                  onClick={handleViewProjects}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {passions.map((passion, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`backdrop-blur-sm border rounded-xl p-6 h-full group transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-black/60 to-gray-900/30 border-gray-500/20 hover:border-blue-500/30'
                    : 'bg-gradient-to-br from-white/95 to-blue-100/80 border-blue-200/40 hover:border-blue-300/60'
                }`}>
                  <div className={`mb-4 group-hover:text-blue-300 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {passion.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 font-serif ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {passion.title}
                  </h3>
                  <p className={`font-serif ${
                    isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    {passion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;