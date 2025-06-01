import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData';
import SkillBar from './SkillBar';

const Skills: React.FC = () => {
  // Group skills by category
  const technicalSkills = resumeData.skills.filter(skill => skill.category === 'technical');
  const toolSkills = resumeData.skills.filter(skill => skill.category === 'tool');
  const softSkills = resumeData.skills.filter(skill => skill.category === 'soft');
  
  return (
    <section id="skills" className="section-container bg-[#0a0a14]">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-heading neon-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="mb-16">
          <motion.h3 
            className="text-xl font-[Orbitron] text-white mb-6 border-l-2 border-[#00f0ff] pl-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <SkillBar skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <motion.h3 
            className="text-xl font-[Orbitron] text-white mb-6 border-l-2 border-[#ff00aa] pl-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tools & Technologies
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {toolSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <SkillBar skill={skill} color="#ff00aa" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3 
            className="text-xl font-[Orbitron] text-white mb-6 border-l-2 border-[#ffcc00] pl-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soft Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <SkillBar skill={skill} color="#ffcc00" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;