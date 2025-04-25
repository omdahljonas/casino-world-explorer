
import React, { useState, useEffect } from 'react';
import { scrollToElement, generateRandomDate, formatDate } from '@/utils/helpers';

const Hero = () => {
  const [countdown, setCountdown] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Generate a random date in 2025 for the event
  const [eventDate] = useState<Date>(() => generateRandomDate());
  
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference <= 0) return;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    };
    
    // Initial calculation
    calculateCountdown();
    
    // Update countdown every second
    const interval = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [eventDate]);
  
  const handleExploreClick = () => {
    scrollToElement('top-casinos');
  };
  
  const handleVIPClick = () => {
    scrollToElement('vip-club');
  };
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?q=80&w=1920" 
          alt="Casino luxury hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-casino-dark-blue/70 via-casino-dark-blue/50 to-casino-deep-blue"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 font-display">
          Discover the World's <span className="text-casino-gold">Finest Hotel Casinos</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          An exclusive guide to the most exceptional casino destinations across the globe, where gaming excellence meets extraordinary design.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            onClick={handleExploreClick}
            className="btn-primary"
          >
            Explore Casinos <i className="fa fa-search ml-2"></i>
          </button>
          <button 
            onClick={handleVIPClick}
            className="btn-secondary"
          >
            Join VIP Club <i className="fa fa-crown ml-2"></i>
          </button>
        </div>
        
        {/* Countdown */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-white text-xl mb-4">Next Big Casino Event: <span className="text-casino-gold">{formatDate(eventDate)}</span></h3>
          <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
            <div className="bg-casino-medium-blue bg-opacity-80 p-3 rounded-lg">
              <div className="text-2xl md:text-4xl font-bold text-casino-gold">{countdown.days}</div>
              <div className="text-xs md:text-sm text-gray-300">Days</div>
            </div>
            <div className="bg-casino-medium-blue bg-opacity-80 p-3 rounded-lg">
              <div className="text-2xl md:text-4xl font-bold text-casino-gold">{countdown.hours}</div>
              <div className="text-xs md:text-sm text-gray-300">Hours</div>
            </div>
            <div className="bg-casino-medium-blue bg-opacity-80 p-3 rounded-lg">
              <div className="text-2xl md:text-4xl font-bold text-casino-gold">{countdown.minutes}</div>
              <div className="text-xs md:text-sm text-gray-300">Minutes</div>
            </div>
            <div className="bg-casino-medium-blue bg-opacity-80 p-3 rounded-lg">
              <div className="text-2xl md:text-4xl font-bold text-casino-gold">{countdown.seconds}</div>
              <div className="text-xs md:text-sm text-gray-300">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
