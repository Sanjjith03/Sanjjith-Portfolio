import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../data/resumeData';

interface SkillBarProps {
  skill: Skill;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, color = '#00f0ff' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-semibold">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ 
            backgroundColor: color,
            boxShadow: isHovered ? `0 0 10px ${color}` : 'none',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Glitch effect on hover */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{ 
                backgroundColor: color,
                mixBlendMode: 'exclusion',
              }}
              initial={{ width: 0 }}
              animate={{ 
                width: [`${skill.level - 5}%`, `${skill.level + 2}%`, `${skill.level}%`],
                x: [-2, 2, 0],
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SkillBar;