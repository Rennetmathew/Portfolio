import React from 'react';
import { Brain, Database, Code, TrendingUp, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  useScrollAnimation();

  const passions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Building intelligent systems that learn from data and make predictions"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Extracting actionable insights from complex datasets"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "MLOps & Deployment",
      description: "Deploying ML models to production with scalable infrastructure"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Research",
      description: "Staying updated with latest AI breakthroughs and research"
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
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
          </div>

          <div className="prose prose-lg prose-invert mx-auto mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 shadow-xl">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                I'm Rennet Mathew, an AI/ML enthusiast passionate about transforming complex problems into elegant solutions through machine learning. Currently pursuing B.Tech in AI & Data Science, I'm on a mission to bridge the gap between theoretical AI concepts and practical, real-world applications.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                My journey into AI began during my first year when I witnessed how a simple recommendation algorithm could predict user behavior with remarkable accuracy. That moment sparked my curiosity about the power of data and algorithms, leading me to dive deep into machine learning, data science, and AI research.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Through GUVI's comprehensive AI/ML program, I'm gaining hands-on experience with cutting-edge technologies like TensorFlow, PyTorch, and MLOps practices. My focus areas include Natural Language Processing, Computer Vision, and deploying ML models at scale.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a 
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 pt-6 border-t border-white/20">
                <a
                  href="https://github.com/rennetmathew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/rennetmathew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
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