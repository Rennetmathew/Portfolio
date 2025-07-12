import React from 'react';
import { Code, Brain, Rocket, Coffee, Download, ExternalLink } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  useScrollAnimation();

  const passions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Building intelligent systems that learn from data to solve real-world problems"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Development",
      description: "Creating robust data science and ML solutions with Python"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "AI Innovation",
      description: "Exploring cutting-edge AI technologies and applications"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Committed to mastering new AI/ML techniques and technologies"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              About Rennet
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
          </div>

          <div className="prose prose-lg prose-invert mx-auto mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 shadow-xl">
              <p className="text-xl text-white/90 leading-relaxed mb-6 font-serif">
                Meet Rennet T Mathew, an AI/ML enthusiast with a passion for applying machine learning to solve real-world problems. Currently upskilling through GUVI's comprehensive AI/ML program, he combines academic knowledge with practical project experience.
              </p>
              <p className="text-lg text-white/80 leading-relaxed font-serif mb-8">
                Pursuing B.Tech in AI & Data Science while actively developing AI projects like AgriCopilot (Smart Crop Planning Assistant) and Football Player Recommendation System. Expertise in Python, scikit-learn, and data science tools with a focus on creating intelligent, data-driven solutions.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="/resume.pdf" 
                  download="Rennet_Matherw_AI_ML_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download AI/ML Resume
                </a>
                <a 
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View AI/ML Projects
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {passions.map((passion, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-6 h-full group hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {passion.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-serif">
                    {passion.title}
                  </h3>
                  <p className="text-white/80 font-serif">
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