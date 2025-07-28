import React from 'react';
import { Code2, ShoppingCart, Brain, Car, Leaf, Github, ExternalLink } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';

const Projects: React.FC = () => {
  useScrollAnimation();
  const { isDarkMode } = useTheme();

  const projects = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "CarDekho Car Price Prediction Model",
      description: "A machine learning model that predicts car prices based on various features like brand, model, year, mileage, and specifications. Built using advanced regression algorithms and deployed as a web application.",
      highlights: [
        "Developed ML model using Random Forest and XGBoost algorithms achieving 92% prediction accuracy",
        "Implemented feature engineering and data preprocessing pipeline handling 50,000+ car listings",
        "Built interactive web interface with real-time price predictions and detailed car specifications"
      ],
      tech: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Flask", "HTML/CSS", "Pandas", "Scikit-learn"],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30",
      github: "https://github.com/yourusername/car-price-prediction",
      live: "https://car-price-prediction.demo.com"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "AgriCopilot – AI-Based Crop Planning Assistant",
      description: "An intelligent agricultural planning system that recommends optimal crops based on soil conditions, weather patterns, and market trends using machine learning algorithms.",
      highlights: [
        "Implemented ML classification model analyzing soil data, climate patterns, and market prices for crop recommendations",
        "Integrated weather API and soil analysis tools for real-time environmental data processing",
        "Developed user-friendly mobile-responsive interface serving 100+ farmers with 85% recommendation accuracy"
      ],
      tech: ["Python", "Machine Learning", "Classification Algorithms", "React.js", "Node.js", "MongoDB", "Weather API"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      github: "https://github.com/yourusername/agricopilot",
      live: "https://agricopilot.demo.com"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "1% Funding Platform",
      description: "A sophisticated stock market simulation platform for Indian options traders with advanced funding features and real-time market data analysis.",
      highlights: [
        "Developed comprehensive authentication and challenge flow system with 100+ successful completions",
        "Enhanced UI/UX with modern design patterns, reducing user support requests by 20%",
        "Implemented real-time data processing and analytics for market simulation accuracy"
      ],
      tech: ["TypeScript", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Real-time Analytics"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      github: "https://github.com/yourusername/funding-platform",
      live: "https://funding-platform.demo.com"
    }
  ];

  return (
    <section id="projects" className={`min-h-screen relative overflow-hidden py-20 transition-colors duration-300 ${
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll">
            <h2 className={`text-5xl font-bold mb-6 font-serif tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className={`text-xl mb-16 font-serif ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}>
              A showcase of my AI/ML projects and technical achievements
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`backdrop-blur-sm border rounded-xl p-8 group transition-all duration-300 transform hover:-translate-y-1 ${project.gradient} border-gradient-to-r ${project.borderGradient} ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-black/60 to-gray-900/30'
                    : 'bg-gradient-to-br from-white/95 to-blue-100/80'
                }`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className={`mb-4 group-hover:text-white transition-colors duration-300 ${
                        isDarkMode ? 'text-white/90' : 'text-gray-700'
                      }`}>
                        {project.icon}
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 font-serif ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`mb-6 font-serif ${
                        isDarkMode ? 'text-white/80' : 'text-gray-700'
                      }`}>
                        {project.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className={`flex items-start font-serif ${
                            isDarkMode ? 'text-white/70' : 'text-gray-600'
                          }`}>
                            <span className="mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-white/10 text-white hover:bg-white/20' 
                              : 'bg-gray-800/10 text-gray-700 hover:bg-gray-800/20'
                          }`}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-white/10 text-white hover:bg-white/20' 
                              : 'bg-gray-800/10 text-gray-700 hover:bg-gray-800/20'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-black/30' : 'bg-blue-50/60'}`}>
                        <h4 className={`text-lg font-semibold mb-4 font-serif ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isDarkMode 
                                  ? 'bg-white/10 text-white/90' 
                                  : 'bg-gray-800/10 text-gray-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;