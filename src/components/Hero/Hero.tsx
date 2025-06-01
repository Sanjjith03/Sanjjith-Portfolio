import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import resumeData from '../../data/resumeData';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-background"></div>
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#00f0ff",
            },
            links: {
              color: "#00f0ff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[Orbitron] text-white">
            <span className="neon-text glitch-effect" data-text={resumeData.name}>{resumeData.name}</span>
          </h1>
          
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#00f0ff] to-transparent mb-6"></div>
          
          <h2 className="text-2xl md:text-3xl font-[Orbitron] mb-8 text-gray-300">
            <span className="neon-text-secondary">{resumeData.title}</span>
          </h2>
          
          <p className={`max-w-2xl mx-auto text-xl text-gray-300 mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {resumeData.summary.substring(0, 150)}...
          </p>
          
          <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="#projects" 
              className="cyberpunk-button"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="cyberpunk-button"
              style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="text-white hover:text-[#00f0ff] transition duration-300"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0f0f17] to-transparent"></div>
    </section>
  );
};

export default Hero;