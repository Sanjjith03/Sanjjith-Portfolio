import React from 'react';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/resumeData';

interface ProjectCardProps {
  project: Project;
}

const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Tilt options={defaultTiltOptions} className="h-full">
      <div className="cyberpunk-card h-full flex flex-col overflow-hidden group">
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17] to-transparent z-10"></div>
          
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-[#00f0ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
          
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold text-white font-[Orbitron]">{project.title}</h3>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col justify-between bg-[#16162a]">
          <div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs font-semibold px-2 py-1 rounded bg-[#1a1a2e] text-[#00f0ff] border border-[#00f0ff33]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-[#00f0ff] transition duration-300"
                aria-label="View project"
              >
                <ExternalLink size={16} className="mr-1" /> 
                <span>Demo</span>
              </a>
            )}
            
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-[#00f0ff] transition duration-300"
                aria-label="View source code"
              >
                <Github size={16} className="mr-1" /> 
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Holographic corner effect */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#00f0ff33] to-transparent transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;