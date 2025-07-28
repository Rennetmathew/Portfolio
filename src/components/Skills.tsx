import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';

const Skills: React.FC = () => {
  useScrollAnimation();
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Core machine learning and artificial intelligence technologies',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 75 },
        { name: 'OpenAI API', level: 80 }
      ]
    },
    {
      title: 'Data Science & Analytics',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Data analysis, visualization, and statistical modeling tools',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Data Mining', level: 80 },
        { name: 'Statistical Analysis', level: 75 }
      ]
    },
    {
      title: 'Programming & Development',
      gradient: 'from-green-500 to-teal-500',
      description: 'Programming languages and development technologies',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'Computer Science Fundamentals',
      gradient: 'from-orange-500 to-red-500',
      description: 'Core computer science concepts and tools',
      skills: [
        { name: 'Data Structures', level: 90 },
        { name: 'Algorithms', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className={`min-h-screen relative overflow-hidden py-20 transition-colors duration-300 ${
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
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className={`text-5xl font-bold mb-6 font-serif tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Skills
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className={`text-xl mb-12 font-serif max-w-2xl mx-auto ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}>
              A comprehensive overview of my technical expertise in machine learning, data science, and AI development,
              with strong foundations in programming and computer science fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-on-scroll"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className={`backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-black/60 to-gray-900/30 border-gray-500/20'
                    : 'bg-gradient-to-br from-white/95 to-blue-100/80 border-blue-200/40'
                }`}>
                  <h3 className={`text-2xl font-bold mb-3 font-serif ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`mb-6 font-serif ${
                    isDarkMode ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={`${categoryIndex}-${skillIndex}`} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span className={`text-lg font-serif ${
                            isDarkMode ? 'text-white/90' : 'text-gray-800'
                          }`}>{skill.name}</span>
                          <span className={`font-mono ${
                            isDarkMode ? 'text-white/60' : 'text-gray-600'
                          }`}>{skill.level}%</span>
                        </div>
                        <div className={`h-3 rounded-full overflow-hidden ${
                          isDarkMode ? 'bg-gray-700/30' : 'bg-gray-200/50'
                        }`}>
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