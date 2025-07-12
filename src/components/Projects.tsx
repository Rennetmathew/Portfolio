import React from 'react';
import { Sprout, User, PieChart, TrendingUp, Github, ExternalLink } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  useScrollAnimation();

  const projects = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "AgriCopilot — Smart Crop Planning Assistant",
      description: "Intelligent assistant for farmers that recommends optimal crops using real-time soil and market data. Supports multilingual interactions.",
      highlights: [
        "Real-time data integration (soil/weather)",
        "WhatsApp bot with local language NLP",
        "ML classification models for crop recommendation"
      ],
      tech: ["Python", "Machine Learning", "WhatsApp API", "NLP", "Scikit-learn", "Pandas"],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30",
      github: "https://github.com/rennet-matherw/agricopilot",
      live: "https://agricopilot.demo.com"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Football Player Recommendation System",
      description: "Analyzes gameplay footage to rate football players and recommend personalized improvement strategies based on position-specific skill evaluation.",
      highlights: [
        "Frame-based skill extraction",
        "Player ranking & suggestions using ML",
        "Role-aware performance insights"
      ],
      tech: ["Python", "OpenCV", "Scikit-learn", "Machine Learning", "Computer Vision"],
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderGradient: "from-blue-500/30 to-indigo-500/30",
      github: "https://github.com/rennet-matherw/football-player-recommendation",
      live: "https://football-recommendation.demo.com"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Expense Sharing App (GUVI AI/ML Project)",
      description: "Tool to split group expenses fairly using cost analysis and visualization. Built as part of GUVI's AI/ML program.",
      highlights: [
        "Expense processing with Pandas",
        "Graphs with Matplotlib",
        "Cost balance algorithm for fairness"
      ],
      tech: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Algorithms"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      github: "https://github.com/rennet-matherw/expense-sharing-app",
      live: "https://expense-sharing.demo.com"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Gaussian Mixture Clustering Demo",
      description: "Demonstrates clustering using Gaussian Mixture Models on synthetic data with visual comparison to traditional clustering methods.",
      highlights: [
        "GMM vs K-Means comparison",
        "Probabilistic cluster boundaries",
        "Visual explanation of results"
      ],
      tech: ["Python", "Scikit-learn", "Matplotlib", "Machine Learning", "Clustering"],
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500/30 to-red-500/30",
      github: "https://github.com/rennet-matherw/gaussian-mixture-clustering",
      live: "https://gmm-clustering.demo.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              AI/ML Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className="text-xl text-white/80 mb-16 font-serif">
              A showcase of my machine learning and AI projects demonstrating real-world applications
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br backdrop-blur-sm border rounded-xl p-8 group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${project.gradient} border-gradient-to-r ${project.borderGradient}`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="text-white/90 mb-4 group-hover:text-white transition-colors duration-300">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-6 font-serif">
                        {project.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-white/70 font-serif">
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
                          className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-black/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 font-serif">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm font-medium"
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