import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading neon-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <p className="text-gray-300 max-w-3xl mb-12">
          Explore a selection of my most significant projects, showcasing my skills and experience in developing innovative digital solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href={resumeData.contact.github ? `https://${resumeData.contact.github}` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="cyberpunk-button"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;