import React, { useState } from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Instagram, Code2 } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';

const Contact: React.FC = () => {
  useScrollAnimation();
  const { isDarkMode } = useTheme();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setResponseMessage('');

  try {
    const res = await fetch('https://portfolio-backend-vuhu.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = { message: 'Unexpected response format.' };
    }

    if (res.ok) {
      setResponseMessage('Message sent successfully!');
      setEmail('');
      setMessage('');
    } else {
      setResponseMessage(data.message || 'Something went wrong.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    setResponseMessage('Failed to send message. Please try again later.');
  }

  setLoading(false);
};



  return (
    <section id="contact" className={`min-h-screen flex items-center justify-center py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-white to-blue-50'
    }`} style={{ borderBottom: isDarkMode ? 'none' : '1px solid #e0e7ef', boxShadow: isDarkMode ? 'none' : '0 8px 32px 0 rgba(31, 38, 135, 0.07)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <div className={`backdrop-blur-sm border rounded-xl p-8 shadow-xl ${
            isDarkMode
              ? 'bg-gradient-to-br from-black/60 to-gray-900/30 border-gray-500/20'
              : 'bg-gradient-to-br from-white/95 to-blue-100/80 border-blue-200/40'
          }`}>
            <h2 className={`text-4xl font-bold mb-6 font-serif tracking-tight text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
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
                  <a href="https://http://portfolio-rennet-matherws-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors duration-300">
                    Rennet's-Portfolio
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
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-800/60 border-gray-600 text-white' : 'bg-white border-blue-200 text-gray-900'}`}
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-800/60 border-gray-600 text-white' : 'bg-white border-blue-200 text-gray-900'}`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' : 'bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-blue-500 hover:to-purple-600'}`}
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
      <footer className={`w-full ${isDarkMode ? 'bg-black' : 'bg-white shadow-lg'} border-t-0`} style={{ boxShadow: isDarkMode ? '0 -2px 16px 0 rgba(0,0,0,0.3)' : '0 -2px 16px 0 rgba(31, 38, 135, 0.07)', position: 'relative', bottom: 0, left: 0, right: 0, marginTop: 0 }}>
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-2">
            <a href="https://github.com/Rennetmathew" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'}`}><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com/in/rennet-mathew-468513258" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'}`}><Linkedin className="w-6 h-6" /></a>
            <a href="https://instagram.com/rennet.m" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'}`}><Instagram className="w-6 h-6" /></a>
          </div>
          <p className={`text-center font-serif text-xs ${isDarkMode ? 'text-white/60' : 'text-blue-900/70'}`}>
            &copy; {new Date().getFullYear()} Rennet Mathew. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
