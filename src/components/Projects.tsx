import React from 'react';
import { Code2, ShoppingCart, Brain, Github, ExternalLink } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  useScrollAnimation();

  const projects = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "1% Funding Platform",
      description: "A stock market simulation platform for Indian options traders with funding features.",
      highlights: [
        "Integrated authentication and challenge flow with 100+ successful completions",
        "Enhanced UI/UX, reducing user support requests by 20%"
      ],
      tech: ["Java", "Spring Boot", "React.js", "MongoDB", "Firebase", "Tailwind CSS"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      github: "https://github.com/yourusername/funding-platform",
      live: "https://funding-platform.demo.com"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Application",
      description: "Built a scalable ecommerce platform supporting 200+ users and secure transactions.",
      highlights: [
        "Improved mobile responsiveness, boosting user satisfaction by 25%",
        "Implemented secure JWT-based login and role-based access control"
      ],
      tech: ["Java", "Spring Boot", "React.js", "MongoDB", "JWT", "REST APIs"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://ecommerce.demo.com"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Career Navigator",
      description: "Designed a platform to suggest personalized career paths using ML and job data.",
      highlights: [
        "Used OpenAI API to deliver dynamic career guidance; adopted by 50+ users",
        "Built responsive UI for better accessibility across devices"
      ],
      tech: ["React.js", "Node.js", "Python", "Express.js", "MongoDB", "ML", "OpenAI API"],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30",
      github: "https://github.com/yourusername/career-navigator",
      live: "https://career-navigator.demo.com"
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
              A showcase of my technical projects and achievements
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