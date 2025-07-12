import React from 'react';
import { Code, Database, Wrench, Brain, Server, GitBranch } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  useScrollAnimation();

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Languages",
      skills: ["Python", "SQL", "JavaScript", "TypeScript"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/30 to-cyan-500/30"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ML Libraries",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow", "PyTorch"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: ["Git", "Jupyter", "VSCode", "Docker", "AWS", "Google Colab"],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ML Concepts",
      skills: ["Regression", "Classification", "Clustering", "Neural Networks", "Deep Learning", "Feature Engineering"],
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500/30 to-red-500/30"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Deployment & MLOps",
      skills: ["FastAPI", "Streamlit", "Flask", "Docker", "Model Deployment", "CI/CD"],
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderGradient: "from-indigo-500/30 to-blue-500/30"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Specializations",
      skills: ["NLP", "Computer Vision", "Time Series", "Recommender Systems", "EDA", "Data Visualization"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderGradient: "from-teal-500/30 to-cyan-500/30"
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              Skills & Technologies
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className="text-xl text-white/80 mb-16 font-serif">
              My toolkit for building intelligent AI/ML solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br backdrop-blur-sm border rounded-xl p-6 h-full group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${category.gradient} border-gradient-to-r ${category.borderGradient}`}>
                  <div className="text-white/90 mb-4 group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Progress Section */}
          <div className="mt-20 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-serif">
                Currently Learning
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-white/80">Advanced Deep Learning with PyTorch</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-white/80">MLOps and Model Deployment</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white/80">Large Language Models (LLMs)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-white/80">Computer Vision Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;