
import React, { useState } from 'react';
import { isValidEmail, simulateApiCall, showToast } from '@/utils/helpers';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !isValidEmail(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    setIsSubscribing(true);
    
    try {
      // Simulate API call
      await simulateApiCall(null, 1500);
      
      showToast('Thank you for subscribing to our newsletter!', 'success');
      setEmail('');
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-casino-dark-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Casino World Explorer</h3>
            <p className="text-gray-400 mb-6">
              Your guide to the world's premier hotel casinos and gaming destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero"
                  className="text-gray-400 hover:text-casino-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#top-casinos"
                  className="text-gray-400 hover:text-casino-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('top-casinos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Top Casinos
                </a>
              </li>
              <li>
                <a 
                  href="#gallery"
                  className="text-gray-400 hover:text-casino-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#events"
                  className="text-gray-400 hover:text-casino-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Upcoming Events
                </a>
              </li>
              <li>
                <a 
                  href="#vip-club"
                  className="text-gray-400 hover:text-casino-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('vip-club')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  VIP Club
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Casino Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                  Mega Resorts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                  Historic Casinos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                  Asian Gaming Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                  European Casino Hotels
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-casino-gold transition-colors">
                  Island Casino Resorts
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new casino destinations and gaming events.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email"
                placeholder="Your email address"
                className="bg-casino-medium-blue text-white p-3 rounded-l-md flex-grow border-2 border-r-0 border-casino-medium-blue focus:outline-none focus:border-casino-gold transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-casino-gold hover:bg-yellow-500 text-casino-dark-blue font-medium p-3 rounded-r-md transition-colors"
              >
                {isSubscribing ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Casino World Explorer. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <p className="text-gray-600 text-xs text-center mt-6">
            Casino World Explorer is an informational site showcasing the world's best hotel casinos. This site does not offer gambling services and is not affiliated with any casino operator.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
