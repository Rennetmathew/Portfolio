import React from 'react';
import { Sprout, Users, PieChart, BarChart3, Github, ExternalLink, Award, TrendingUp } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  useScrollAnimation();

  const projects = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "AgriCopilot – Smart Crop Planner",
      description: "AI-powered agricultural assistant that helps farmers make data-driven decisions for crop planning and optimization using machine learning models.",
      highlights: [
        "Deployed ML models for crop yield prediction with 92% accuracy",
        "Integrated weather data and soil analysis for personalized recommendations",
        "Built FastAPI backend with real-time inference capabilities",
        "Achieved 40% improvement in crop planning efficiency for 100+ farmers"
      ],
      tech: ["Python", "FastAPI", "Scikit-learn", "Pandas", "Docker", "AWS", "Streamlit"],
      tags: ["#Deployment", "#MLOps", "#Agriculture"],
      metrics: "92% Accuracy • 100+ Users • Real-time Inference",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30",
      github: "https://github.com/yourusername/agricopilot",
      live: "https://agricopilot.streamlit.app"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Football Player Recommender System",
      description: "Comprehensive recommendation system for football players using live performance tracking, statistical analysis, and machine learning algorithms.",
      highlights: [
        "Implemented collaborative filtering with 87% recommendation accuracy",
        "Real-time player performance tracking and ranking system",
        "Built interactive dashboard with live statistics and trends",
        "Processed 50,000+ player records with advanced feature engineering"
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Streamlit", "Football API"],
      tags: ["#Recommendation", "#Analytics", "#Sports"],
      metrics: "87% Accuracy • 50k+ Records • Live Tracking",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      github: "https://github.com/yourusername/football-recommender",
      live: "https://football-recommender.streamlit.app"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Expense Split App",
      description: "Practical expense management application with intelligent categorization and automated splitting algorithms for group expenses.",
      highlights: [
        "Automated expense categorization using NLP techniques",
        "Smart splitting algorithms for fair expense distribution",
        "Interactive visualizations for expense tracking and analysis",
        "Integrated with 200+ users for real-world testing and feedback"
      ],
      tech: ["Python", "React", "NLP", "Pandas", "Chart.js", "FastAPI", "PostgreSQL"],
      tags: ["#NLP", "#FullStack", "#Practical"],
      metrics: "200+ Users • Auto-categorization • Real-world App",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      github: "https://github.com/yourusername/expense-split",
      live: "https://expense-split.demo.com"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "GMM Clustering Visualizer",
      description: "Interactive machine learning tool for experimenting with Gaussian Mixture Models, featuring dynamic parameter tuning and real-time visualization.",
      highlights: [
        "Interactive parameter tuning with real-time model updates",
        "Advanced visualization techniques for high-dimensional data",
        "Comprehensive model evaluation metrics and comparison tools",
        "Educational tool used by 500+ students for ML learning"
      ],
      tech: ["Python", "Scikit-learn", "Matplotlib", "Plotly", "Streamlit", "NumPy"],
      tags: ["#Modeling", "#Visualization", "#Educational"],
      metrics: "500+ Students • Interactive Learning • Real-time Viz",
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500/30 to-red-500/30",
      github: "https://github.com/yourusername/gmm-visualizer",
      live: "https://gmm-visualizer.streamlit.app"
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
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className="text-xl text-white/80 mb-16 font-serif">
              End-to-end AI/ML projects showcasing practical applications and deployment expertise
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
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                          {project.icon}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/80 mb-6 font-serif">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-white/70 font-serif">
                              <TrendingUp className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <BarChart3 className="w-4 h-4" />
                          <span className="font-medium">Project Metrics</span>
                        </div>
                        <p className="text-white/70 text-sm">{project.metrics}</p>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300 font-medium"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <div className="bg-black/30 rounded-lg p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4 font-serif">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-colors duration-300"
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