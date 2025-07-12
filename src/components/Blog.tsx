import React from 'react';
import { BookOpen, ExternalLink, Calendar, User } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Blog: React.FC = () => {
  useScrollAnimation();

  const blogPosts = [
    {
      title: "Understanding K-Fold Cross Validation",
      description: "A comprehensive guide to K-Fold Cross Validation, its importance in machine learning model evaluation, and practical implementation with Python.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Machine Learning",
      link: "https://medium.com/@rennet-matherw/understanding-k-fold-cross-validation",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderGradient: "from-blue-500/30 to-indigo-500/30"
    },
    {
      title: "How I Built an AI Crop Assistant for Indian Farmers",
      description: "The journey of creating AgriCopilot, an intelligent assistant that helps farmers make data-driven crop planning decisions using machine learning.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "AI Projects",
      link: "https://medium.com/@rennet-matherw/building-ai-crop-assistant-for-indian-farmers",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30"
    },
    {
      title: "My Journey with GUVI's AI/ML Program",
      description: "Sharing my experience and key learnings from GUVI's comprehensive AI/ML program, including practical projects and skill development.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Learning Journey",
      link: "https://medium.com/@rennet-matherw/my-journey-with-guvi-ai-ml-program",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30"
    }
  ];

  return (
    <section id="blog" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif tracking-tight">
              AI/ML Insights
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
            <p className="text-xl text-white/80 mb-16 font-serif">
              Sharing my learning journey and insights in AI/ML development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br backdrop-blur-sm border rounded-xl p-6 group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col ${post.gradient} border-gradient-to-r ${post.borderGradient}`}>
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-sm text-blue-300 font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-blue-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 font-serif flex-1">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300 self-start"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GUVI Progress Section */}
          <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <div className="bg-gradient-to-br from-black/60 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                GUVI AI/ML Program Progress
              </h3>
              <div className="mb-6">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-white/90">Course Completion</span>
                  <span className="text-white/60">75%</span>
                </div>
                <div className="h-3 bg-gray-700/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000 ease-out"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              <p className="text-white/80 font-serif">
                Actively learning and implementing AI/ML concepts through hands-on projects and real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;