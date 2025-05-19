import React, { useState } from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Instagram, Code2 } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  useScrollAnimation();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-7xl font-bold text-white mb-12 font-serif tracking-tight">
              CONTACT
            </h2>
            <p className="text-2xl text-white/80 mb-16 font-serif max-w-2xl mx-auto">
              Like what you see? Don't hesitate to reach out. Whether it's a tech question, a project idea, or just a hello, I'd love to hear from you! Fill out the form, or connect on GitHub and LinkedIn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-white/90 group">
                  <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <a href="mailto:rennetmathew29@gmail.com" className="text-lg hover:text-blue-400 transition-colors duration-300">
                    rennetmathew29@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-white/90 group">
                  <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <a href="tel:+919790465247" className="text-lg hover:text-blue-400 transition-colors duration-300">
                    +91 979 046 5247
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-white/90 group">
                  <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <a href="https://rennetportfolio.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors duration-300">
                    rennetportfolio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    required
                    className="w-full px-6 py-4 bg-black/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    required
                    className="w-full px-6 py-4 bg-black/30 border border-gray-500/30 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 transition-colors duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {responseMessage && (
                  <p className={`text-center mt-4 ${responseMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Rennetmathew" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/rennet-mathew-468513258" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/rennet.m" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:-translate-y-1">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/rennet_m" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:-translate-y-1">
              <Code2 className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-white/60 mt-6 font-serif">
            © {new Date().getFullYear()} Rennet Mathew. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
