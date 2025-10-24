import React, { useState, useEffect } from "react";

const Navigation = ({ handleWorkScroll, handleAboutScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, (scrollTop / docHeight) * 100);
      setScrollProgress(progress);
      
      // Determine active section based on scroll position
      const sections = ['home', 'projects', 'services', 'about'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial call to set initial state
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio', action: () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }},
    { id: 'projects', label: 'Proyectos', action: handleWorkScroll },
    { id: 'services', label: 'Servicios', action: () => {
      if (typeof document !== 'undefined') {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    }},
    { id: 'about', label: 'Acerca de', action: handleAboutScroll },
  ];

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg rounded-full' : 'bg-transparent'
      }`}>
        <div className="flex items-center space-x-1 p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile menu button */}
      <button className="fixed top-4 right-4 z-50 lg:hidden p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg">
        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
};

export default Navigation;