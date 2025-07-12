import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Certifications: React.FC = () => {
  useScrollAnimation();

  const certifications = [
    {
      title: "NPTEL Data Mining",
      provider: "IIT Kharagpur",
      date: "2024",
      status: "Completed",
      description: "Comprehensive course on data mining techniques and algorithms",
      skills: ["Data Mining", "Machine Learning", "Pattern Recognition"],
      link: "#",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/30 to-cyan-500/30"
    },
    {
      title: "GUVI AI/ML Program",
      provider: "GUVI",
      date: "2024 - Present",
      status: "In Progress",
      description: "Intensive AI/ML program covering end-to-end machine learning pipeline",
      skills: ["Python", "TensorFlow", "MLOps", "Deep Learning"],
      link: "#",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30"
    },
    {
      title: "Machine Learning Fundamentals",
      provider: "Online Platform",
      date: "2024",
      status: "Completed",
      description: "Foundational concepts in supervised and unsupervised learning",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link: "#",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30"
    },
    {
      title: "Python for Data Science",
      provider: "Certification Authority",
      date: "2023",
      status: "Completed",
      description: "Advanced Python programming for data analysis and visualization",
      skills: ["Python", "Jupyter", "Data Analysis", "Statistics"],
      link: "#",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderGradient: "from-indigo-500/30 to-purple-500/30"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              Certifications
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className="text-xl text-white/80 mb-16 font-serif">
              My journey in AI/ML through structured learning and certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br backdrop-blur-sm border rounded-xl p-6 h-full group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${cert.gradient} border-gradient-to-r ${cert.borderGradient}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {cert.status === 'Completed' ? (
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                        ) : (
                          <Calendar className="w-4 h-4 inline mr-1" />
                        )}
                        {cert.status}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-serif">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-400 font-medium">{cert.provider}</span>
                    <span className="text-white/60">•</span>
                    <span className="text-white/60">{cert.date}</span>
                  </div>

                  <p className="text-white/80 mb-6 font-serif">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/10 rounded-full text-white/90 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;