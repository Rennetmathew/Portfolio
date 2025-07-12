import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  useScrollAnimation();

  const skillCategories = [
    {
      title: 'Programming Languages',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Core programming languages for AI/ML and data science',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'ML Libraries & Frameworks',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Machine learning libraries and frameworks I use for building AI models',
      skills: [
        { name: 'Scikit-learn', level: 80 },
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 75 }
      ]
    },
    {
      title: 'AI/ML Tools & Platforms',
      gradient: 'from-green-500 to-teal-500',
      description: 'Development tools and platforms I use for AI/ML projects',
      skills: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Google Colab', level: 85 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      title: 'Machine Learning Concepts',
      gradient: 'from-orange-500 to-red-500',
      description: 'Core ML concepts and techniques I\'ve mastered',
      skills: [
        { name: 'Supervised Learning', level: 85 },
        { name: 'Unsupervised Learning', level: 80 },
        { name: 'Model Evaluation', level: 85 },
        { name: 'EDA', level: 90 },
        { name: 'Data Preprocessing', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              AI/ML Skills
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/80 mb-12 font-serif max-w-2xl mx-auto">
              A comprehensive overview of my AI/ML expertise across different domains of machine learning,
              data science, and artificial intelligence technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                  <h3 className="text-2xl font-bold text-white mb-3 font-serif">
                    {category.title}
                  </h3>
                  <p className="text-white/70 mb-6 font-serif">
                    {category.description}
                  </p>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={`${categoryIndex}-${skillIndex}`} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-lg text-white/90 font-serif">{skill.name}</span>
                          <span className="text-white/60 font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-700/30 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out transform origin-left`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default Skills;