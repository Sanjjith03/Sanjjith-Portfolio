import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import resumeData from '../../data/resumeData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isScrolled = scrollPosition > 20;
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f0f17e6] backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <div className={`text-lg md:text-xl font-bold font-[Orbitron] ${isScrolled ? 'text-[#00f0ff]' : 'text-white'}`}>
              <span className="glitch-effect" data-text={resumeData.name}>{resumeData.name}</span>
              <span className="text-[#ff00aa]">_</span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-[Orbitron] text-sm uppercase tracking-wider">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`group relative transition duration-300 hover:text-[#00f0ff]`}
                  >
                    <span className="inline-block">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2 hover:text-[#00f0ff] transition duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-[#16162a] transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <nav className="px-4 py-2">
          <ul className="font-[Orbitron] text-sm uppercase tracking-wider">
            {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
              <li key={item} className="my-4">
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center py-2 px-3 hover:bg-[#1a1a2e] hover:text-[#00f0ff] rounded transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ChevronRight size={16} className="mr-2 text-[#00f0ff]" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;