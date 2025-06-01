import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin } from 'lucide-react';
import resumeData from '../../data/resumeData';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-container bg-[#0a0a14] scan-lines">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-heading neon-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3 
              className="text-xl font-[Orbitron] text-white mb-6 border-l-2 border-[#00f0ff] pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience
            </motion.h3>
            
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-6 pb-6 border-l border-[#1a1a2e] group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="absolute top-0 left-0 w-3 h-3 -ml-[7px] rounded-full bg-[#1a1a2e] border-2 border-[#00f0ff] z-10 transition-all duration-300 group-hover:bg-[#00f0ff]"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 -ml-[7px] rounded-full bg-[#00f0ff] opacity-40 z-0 animate-ping"></div>
                  
                  <h4 className="text-lg font-bold text-white">{exp.position}</h4>
                  <p className="text-[#00f0ff]">{exp.company}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400 my-2">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="mt-2 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-[#00f0ff] mr-2 mt-1.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-[Orbitron] text-white mb-6 border-l-2 border-[#ff00aa] pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Education
            </motion.h3>
            
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-6 pb-6 border-l border-[#1a1a2e] group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="absolute top-0 left-0 w-3 h-3 -ml-[7px] rounded-full bg-[#1a1a2e] border-2 border-[#ff00aa] z-10 transition-all duration-300 group-hover:bg-[#ff00aa]"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 -ml-[7px] rounded-full bg-[#ff00aa] opacity-40 z-0 animate-ping"></div>
                  
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-[#ff00aa]">{edu.institution}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400 my-2">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{edu.Location}</span>
                    </div>
                  </div>
                  
                  {edu.description && (
                    <p className="mt-2 text-gray-300 text-sm">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* <a 
                href="#"
                className="cyberpunk-button flex items-center"
                download="resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  // In a real implementation, this would download a resume file
                  alert('In a real implementation, this would download your resume.');
                }}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a> */}
              <a 
  href="src\components\Resume\Sanjjith_Resume.pdf" 
  className="cyberpunk-button flex items-center"
  download="resume.pdf"
>
  <Download size={18} className="mr-2" />
  Download Resume
</a>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;