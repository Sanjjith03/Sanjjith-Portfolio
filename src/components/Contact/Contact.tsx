import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import resumeData from '../../data/resumeData';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [terminalText, setTerminalText] = useState('{'>'} Awaiting message transmission...');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTerminalText('{'>'} Initializing message transmission...');
    
    // Simulate form submission
    setTimeout(() => {
      setTerminalText('{'>'} Encrypting data...');
      
      setTimeout(() => {
        setTerminalText('{'>'} Establishing secure connection...');
        
        setTimeout(() => {
          setTerminalText('{'>'} Message transmitted successfully!');
          setIsSubmitting(false);
          setSubmitted(true);
        }, 800);
      }, 800);
    }, 800);
  };
  
  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading neon-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-8">
              Interested in working together? Have a question? Feel free to reach out through any of the following channels or by using the contact form.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#1a1a2e] p-3 rounded-full mr-4">
                  <Mail size={20} className="text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href={`mailto:${resumeData.contact.email}`} className="text-gray-300 hover:text-[#00f0ff] transition duration-300">
                    {resumeData.contact.email}
                  </a>
                </div>
              </div>
              
              {resumeData.contact.phone && (
                <div className="flex items-start">
                  <div className="bg-[#1a1a2e] p-3 rounded-full mr-4">
                    <Phone size={20} className="text-[#00f0ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <a href={`tel:${resumeData.contact.phone}`} className="text-gray-300 hover:text-[#00f0ff] transition duration-300">
                      {resumeData.contact.phone}
                    </a>
                  </div>
                </div>
              )}
              
              <div className="flex items-start">
                <div className="bg-[#1a1a2e] p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">
                    {resumeData.education[0].Location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {resumeData.contact.linkedin && (
                <a 
                  href={`https://${resumeData.contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-3 rounded-full transition duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              
              {resumeData.contact.github && (
                <a 
                  href={`https://${resumeData.contact.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-3 rounded-full transition duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              
              {resumeData.contact.twitter && (
                <a 
                  href={`https://${resumeData.contact.twitter}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-3 rounded-full transition duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="cyberpunk-card p-6 scan-lines">
              <div className="mb-4 bg-[#0a0a14] p-3 font-mono text-sm text-[#00f0ff] border-b border-[#1a1a2e]">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <span className="ml-4 text-gray-400">contact_terminal.exe</span>
                </div>
              </div>
              
              {submitted ? (
                <div className="bg-[#0a0a14] p-4 font-mono text-sm text-[#00f0ff] h-80 overflow-auto">
                  <p>{'>'} Message received from: {formState.name}</p>
                  <p>{'>'} Email: {formState.email}</p>
                  <p>{'>'} Subject: {formState.subject}</p>
                  <p>{'>'} Message: {formState.message}</p>
                  <p className="mt-4 text-[#27c93f]">{'>'} Transmission complete. I'll respond shortly.</p>
                  <p className="mt-4 text-white">
                    {'>'} <span className="animate-pulse">_</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-[#0a0a14] p-4 font-mono text-sm text-[#00f0ff] mb-4">
                    <p>{terminalText}</p>
                    <p className="text-white">
                      {'>'} <span className="animate-pulse">_</span>
                    </p>
                  </div>
                  
                  <div>
                    <input 
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a2e] text-white border border-[#2a2a3e] rounded p-3 focus:outline-none focus:border-[#00f0ff] transition duration-300"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a2e] text-white border border-[#2a2a3e] rounded p-3 focus:outline-none focus:border-[#00f0ff] transition duration-300"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a2e] text-white border border-[#2a2a3e] rounded p-3 focus:outline-none focus:border-[#00f0ff] transition duration-300"
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-[#1a1a2e] text-white border border-[#2a2a3e] rounded p-3 focus:outline-none focus:border-[#00f0ff] transition duration-300"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="cyberpunk-button w-full flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        Processing
                        <span className="ml-2 flex">
                          <span className="h-1.5 w-1.5 bg-[#00f0ff] rounded-full animate-bounce mr-0.5\" style={{ animationDelay: '0ms' }}></span>
                          <span className="h-1.5 w-1.5 bg-[#00f0ff] rounded-full animate-bounce mr-0.5" style={{ animationDelay: '150ms' }}></span>
                          <span className="h-1.5 w-1.5 bg-[#00f0ff] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </span>
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;