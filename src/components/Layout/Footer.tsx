import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import resumeData from '../../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a14] border-t border-[#1a1a2e] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-[Orbitron] text-white mb-4">
              <span className="text-[#00f0ff]">{resumeData.name}</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              {resumeData.summary.substring(0, 120)}...
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-[Orbitron] text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00f0ff] transition duration-300 flex items-center"
                  >
                    <span className="text-[#00f0ff] mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-[Orbitron] text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {resumeData.contact.github && (
                <a 
                  href={`https://${resumeData.contact.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-2 rounded-full transition duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              
              {resumeData.contact.linkedin && (
                <a 
                  href={`https://${resumeData.contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-2 rounded-full transition duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              
              {resumeData.contact.twitter && (
                <a 
                  href={`https://${resumeData.contact.twitter}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-2 rounded-full transition duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
              
              <a 
                href={`mailto:${resumeData.contact.email}`}
                className="bg-[#1a1a2e] hover:bg-[#00f0ff] hover:text-[#0f0f17] text-white p-2 rounded-full transition duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              {resumeData.contact.email}<br />
              {resumeData.contact.phone}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#1a1a2e] text-center text-gray-400 text-sm">
          <p>© {currentYear} {resumeData.name}. All rights reserved.</p>
          <p className="mt-2">
            <span className="inline-block cyberpunk-border px-2 py-1 text-xs rounded">
              <span className="text-[#00f0ff]">&lt;</span> Made with React & TailwindCSS <span className="text-[#00f0ff]">/&gt;</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;