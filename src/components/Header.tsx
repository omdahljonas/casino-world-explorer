
import React, { useState, useEffect } from 'react';
import { scrollToElement } from '@/utils/helpers';

interface HeaderLink {
  id: string;
  label: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerLinks, setHeaderLinks] = useState<HeaderLink[]>([]);
  
  useEffect(() => {
    // Initial links for navigation
    const links: HeaderLink[] = [
      { id: 'hero', label: 'Home' },
      { id: 'top-casinos', label: 'Top Casinos' },
      { id: 'features', label: 'Features' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'events', label: 'Events' },
      { id: 'vip-club', label: 'VIP Club' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'faq', label: 'FAQ' },
      { id: 'blog', label: 'Insights' },
    ];
    
    // Randomly shuffle and select 5-7 links
    const shuffled = [...links].sort(() => 0.5 - Math.random());
    setHeaderLinks(shuffled.slice(0, Math.floor(Math.random() * 3) + 5));
    
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };
  
  const handleNavLinkClick = (id: string) => {
    scrollToElement(id);
    if (isMenuOpen) {
      toggleMenu();
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-casino-dark-blue bg-opacity-90 py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white font-display text-2xl font-bold">
            <span className="text-casino-gold">Casino</span>World<span className="text-casino-gold">Explorer</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {headerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className="text-white hover:text-casino-gold transition-colors duration-300 font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-3/4 bg-casino-medium-blue z-50 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-16`}
      >
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2"
            aria-label="Close menu"
          >
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>
        
        <div className="flex flex-col space-y-4 p-6">
          {headerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className="text-white hover:text-casino-gold transition-colors duration-300 py-2 text-lg font-medium border-b border-gray-700"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
