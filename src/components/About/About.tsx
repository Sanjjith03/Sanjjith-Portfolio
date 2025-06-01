import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import resumeData from '../../data/resumeData';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container scan-lines">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-heading neon-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              {resumeData.summary}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="cyberpunk-card p-4">
                <div className="text-sm text-gray-400">Name:</div>
                <div className="text-white">{resumeData.name}</div>
              </div>
              <div className="cyberpunk-card p-4">
                <div className="text-sm text-gray-400">Role:</div>
                <div className="text-white">{resumeData.title}</div>
              </div>
              <div className="cyberpunk-card p-4">
                <div className="text-sm text-gray-400">Email:</div>
                <div className="text-white truncate">{resumeData.contact.email}</div>
              </div>
              <div className="cyberpunk-card p-4">
                <div className="text-sm text-gray-400">Phone:</div>
                <div className="text-white">{resumeData.contact.phone}</div>
              </div>
            </div>
            
            <a 
              href="#contact"
              className="cyberpunk-button mt-4 inline-block"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="cyberpunk-card p-6 holographic">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-[#00f0ff] mr-3" />
                <h3 className="text-xl font-[Orbitron] text-white">Coding</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Passionate about creating clean, efficient code and building exceptional user experiences with modern web technologies.
              </p>
            </div>
            
            {/* <div className="cyberpunk-card p-6 holographic">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-[#ff00aa] mr-3" />
                <h3 className="text-xl font-[Orbitron] text-white">Experience</h3>
              </div>
              <p className="text-gray-300 text-sm">
                {resumeData.experience.length}+ years working with leading companies and delivering impactful digital solutions.
              </p>
            </div> */}
            
            <div className="cyberpunk-card p-6 holographic">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-[#ffcc00] mr-3" />
                <h3 className="text-xl font-[Orbitron] text-white">Education</h3>
              </div>
              <p className="text-gray-300 text-sm">
                {resumeData.education[0].degree} from {resumeData.education[0].institution}.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;