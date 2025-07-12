import React from 'react';
import { Download, BookOpen, Award, Briefcase, User, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Resume: React.FC = () => {
  useScrollAnimation();

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: "St. Joseph's Institute of Technology, Chennai, India",
      period: 'Nov 2022 - Jun 2026',
      cgpa: '7.6/10',
      description: 'Specializing in machine learning, neural networks, and data analytics'
    },
    {
      degree: 'GUVI AI/ML Program',
      institution: 'GUVI - IIT Madras & IIM Ahmedabad',
      period: '2024 - Present',
      description: 'Comprehensive program covering Python, TensorFlow, MLOps, and deployment'
    }
  ];

  const experience = [
    {
      position: 'ML Developer (Intern)',
      company: 'GUVI',
      period: 'Jun 2024 - Present',
      description: 'Developing end-to-end ML solutions, working on AgriCopilot project with 92% accuracy in crop prediction. Implementing MLOps practices and model deployment using FastAPI and Docker.'
    },
    {
      position: 'Data Science Intern',
      company: 'Shrishti Innovative, Trivandrum',
      period: 'Jun 2024',
      description: 'Analyzed real-world datasets using Python and pandas, built ML models increasing prediction accuracy by 10%. Automated preprocessing workflows reducing manual effort by 20%.'
    },
    {
      position: 'Member, College Coding Club',
      company: 'St. Joseph\'s Institute of Technology',
      period: '2023 - Present',
      description: 'Leading AI/ML workshops, participating in hackathons, and mentoring junior students in data science projects.'
    }
  ];

  const certifications = [
    {
      name: 'NPTEL Data Mining',
      issuer: 'IIT Kharagpur',
      date: 'March 2025',
      status: 'Completed'
    },
    {
      name: 'GUVI AI/ML Certification',
      issuer: 'GUVI - IIT Madras',
      date: 'Dec 2024',
      status: 'In Progress'
    },
    {
      name: 'Python for Data Science',
      issuer: 'NPTEL',
      date: 'August 2024',
      status: 'Completed'
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'Online Platform',
      date: 'July 2024',
      status: 'Completed'
    }
  ];

  return (
    <section id="resume" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              Resume
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className="text-xl text-white/80 mb-8 font-serif">
              AI/ML Enthusiast | Python Developer | Data Science Student
            </p>
          </div>

          {/* Professional Summary */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-serif">Professional Summary</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Passionate AI/ML enthusiast with hands-on experience in machine learning model development, deployment, and optimization. 
                Currently pursuing B.Tech in AI & Data Science with a focus on practical applications through the GUVI AI/ML program. 
                Skilled in Python, TensorFlow, and MLOps practices with proven track record of delivering end-to-end ML solutions.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-300">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center text-white/80">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <span>rennet.mathew@example.com</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-white/80">
                    <Github className="w-5 h-5 text-blue-400 mr-3" />
                    <span>github.com/rennetmathew</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Linkedin className="w-5 h-5 text-blue-400 mr-3" />
                    <span>linkedin.com/in/rennetmathew</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-400">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-serif">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500/30 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                      <span className="text-blue-400 text-sm">{item.period}</span>
                    </div>
                    <p className="text-white/90 mb-2">{item.institution}</p>
                    {item.cgpa && (
                      <p className="text-white/70 text-sm mb-2">CGPA: {item.cgpa}</p>
                    )}
                    <p className="text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-500">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-serif">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="border-l-4 border-purple-500/30 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{item.position}</h4>
                      <span className="text-purple-400 text-sm">{item.period}</span>
                    </div>
                    <p className="text-white/90 mb-2">{item.company}</p>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-600">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-serif">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-500/20 rounded-lg p-4 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-white/70 text-sm">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-700">
            <a 
              href="/resume.pdf" 
              download
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;