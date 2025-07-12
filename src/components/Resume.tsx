import React, { useEffect } from 'react';
import { Download, BookOpen, Calendar, Award, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  // Add animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: "St. Joseph's Institute of Technology, Chennai, India",
      period: 'Nov 2022 - Jun 2026',
      description: 'Currently pursuing B.Tech with a CGPA of 7.6/10. Focusing on machine learning, data analysis, and AI development.',
    },
    {
      degree: 'GUVI AI/ML Program',
      institution: 'GUVI (Google for Education Partner)',
      period: '2024 - Present',
      description: 'Comprehensive AI/ML program covering Python, machine learning algorithms, data science, and real-world project development.',
    },
    {
      degree: 'Higher Secondary Certificate (Computer Science)',
      institution: 'Jayamatha Matriculation School, Nithravilai, Tamil Nadu',
      period: 'Jun 2021 - May 2022',
      description: 'Completed Higher Secondary education with focus on Computer Science.',
    },
  ];

  const experience = [
    {
      position: 'AI/ML Student Developer',
      company: 'GUVI Program',
      period: '2024 - Present',
      description: 'Developing AI/ML projects including AgriCopilot (Smart Crop Planning Assistant) and Football Player Recommendation System. Building expertise in Python, scikit-learn, and machine learning model development.',
    },
    {
      position: 'Data Science Intern',
      company: 'Shrishti Innovative, Trivandrum, Kerala',
      period: 'Jun 2024',
      description: 'Analyzed real-world datasets using Python and pandas, extracting actionable insights. Built and evaluated ML models, increasing prediction accuracy by 10%. Automated preprocessing workflows, reducing manual effort by 20%.',
    },
    {
      position: 'Member, College Coding Club',
      company: 'St. Joseph\'s Institute of Technology',
      period: '2023 - Present',
      description: 'Engaged in hackathons and collaborative coding projects. Actively exploring AI/ML applications and participating in data science competitions.',
    },
  ];

  const certifications = [
    {
      name: 'GUVI AI/ML Program (In Progress)',
      issuer: 'GUVI (Google for Education Partner)',
      date: '2024 - Present',
      link: '#',
    },
    {
      name: 'Data Mining (NPTEL)',
      issuer: 'IIT Kharagpur',
      date: 'March 2025',
      link: '#',
    },
    {
      name: 'Python for Data Science',
      issuer: 'NPTEL',
      date: 'August 2024',
      link: '#',
    },
  ];

  return (
    <section id="resume" className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
            Resume
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 mb-10 font-serif">
            AI/ML Enthusiast | Python Developer | Data-Driven Problem Solver
          </p>
          
          <a 
            href="/resume.pdf" 
            download="Rennet_Matherw_AI_ML_Resume.pdf"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download AI/ML Resume
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <div className="flex items-center mb-10">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm rounded-xl border border-blue-500/20 shadow-inner shadow-blue-500/10">
                <BookOpen className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-5 font-serif tracking-wide">
                Education
              </h3>
            </div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-10 pb-12 border-l-2 border-blue-500/30 last:border-transparent last:pb-0 group"
                >
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute left-[-5px] top-5 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/0"></div>
                  
                  <div className="inline-block px-4 py-1.5 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/20 mb-3 backdrop-blur-sm font-mono">
                    {item.period}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 font-serif group-hover:text-blue-300 transition-colors duration-300">
                    {item.degree}
                  </h4>
                  <p className="text-white/90 mb-3 font-serif">
                    {item.institution}
                  </p>
                  <p className="text-white/70 font-serif">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-300">
            <div className="flex items-center mb-10">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm rounded-xl border border-purple-500/20 shadow-inner shadow-purple-500/10">
                <Calendar className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-5 font-serif tracking-wide">
                Experience
              </h3>
            </div>
            
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-10 pb-12 border-l-2 border-purple-500/30 last:border-transparent last:pb-0 group"
                >
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute left-[-5px] top-5 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-500/0"></div>
                  
                  <div className="inline-block px-4 py-1.5 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/20 mb-3 backdrop-blur-sm font-mono">
                    {item.period}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 font-serif group-hover:text-purple-300 transition-colors duration-300">
                    {item.position}
                  </h4>
                  <p className="text-white/90 mb-3 font-serif">
                    {item.company}
                  </p>
                  <p className="text-white/70 font-serif">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-20 max-w-3xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-500">
          <div className="flex items-center justify-center mb-10">
            <div className="p-4 bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 backdrop-blur-sm rounded-xl border border-indigo-500/20 shadow-inner shadow-indigo-500/10">
              <Award className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white ml-5 font-serif tracking-wide">
              Certifications
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-black/60 to-indigo-900/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <h4 className="text-lg font-semibold text-white mb-2 font-serif group-hover:text-indigo-300 transition-colors duration-300 flex items-center">
                  {cert.name}
                  <a href={cert.link} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-indigo-400" />
                  </a>
                </h4>
                <p className="text-white/90 mb-1 font-serif">
                  {cert.issuer}
                </p>
                <p className="text-sm text-white/70 font-serif">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;