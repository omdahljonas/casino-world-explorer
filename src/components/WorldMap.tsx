
import React, { useState } from 'react';
import { scrollToElement, casinoData } from '@/utils/helpers';

const WorldMap = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  
  // Define casino pin locations (approximate map coordinates)
  const locationPins = [
    { id: 1, name: 'Bellagio Las Vegas', x: 18, y: 38, casinoId: 1 },
    { id: 2, name: 'Marina Bay Sands', x: 75, y: 55, casinoId: 2 },
    { id: 3, name: 'Wynn Macau', x: 78, y: 45, casinoId: 3 },
    { id: 4, name: 'The Venetian Macao', x: 77, y: 46, casinoId: 4 },
    { id: 5, name: 'Casino de Monte-Carlo', x: 48, y: 35, casinoId: 5 },
    { id: 6, name: 'Sun City Resort', x: 55, y: 65, casinoId: 6 },
    { id: 7, name: 'Caesars Palace', x: 17, y: 39, casinoId: 7 },
    { id: 8, name: 'The Atlantis Bahamas', x: 25, y: 45, casinoId: 8 }
  ];
  
  const handlePinHover = (id: number) => {
    setActiveLocation(id);
  };
  
  const handlePinLeave = () => {
    setActiveLocation(null);
  };
  
  const handleLearnMore = () => {
    scrollToElement('top-casinos');
  };

  return (
    <section id="world-map" className="py-16 md:py-24 bg-gradient-to-b from-casino-dark-blue to-casino-deep-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Explore Global Gaming Destinations</h2>
        <p className="section-subtitle">
          Discover where the world's most prestigious hotel casinos are located across the globe.
        </p>
        
        <div className="mt-12 max-w-5xl mx-auto relative">
          {/* World map SVG */}
          <div className="relative">
            {/* Simple world map outline */}
            <svg 
              viewBox="0 0 100 70" 
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0px 0px 10px rgba(212, 175, 55, 0.3))' }}
            >
              <path 
                d="M89.5,14.5c-1.5-0.7-3.2-1.1-5-1.1c-2.2,0-4.3,0.7-6,1.8c-0.8-1.5-2.4-2.5-4.3-2.5c-1.1,0-2.2,0.4-3,1
                c-0.8-1.5-2.4-2.5-4.3-2.5c-2.6,0-4.7,2-4.7,4.5c0,0.3,0,0.5,0.1,0.8c-0.9-0.5-1.9-0.8-3.1-0.8c-3.2,0-5.7,2.5-5.7,5.5
                c0,1.7,0.8,3.2,2.1,4.2c-0.6-0.2-1.3-0.3-1.9-0.3c-3.2,0-5.7,2.5-5.7,5.5c0,3,2.6,5.5,5.7,5.5c0.8,0,1.6-0.2,2.3-0.4
                c-0.8,1-1.3,2.3-1.3,3.7c0,3.4,2.9,6.1,6.5,6.1c1.4,0,2.7-0.4,3.8-1.2c0.8,2.5,3.2,4.2,6,4.2c1.6,0,3.1-0.6,4.2-1.6
                c0.9,1,2.1,1.6,3.5,1.6c2.1,0,3.8-1.4,4.4-3.3c1.1,0.6,2.3,1,3.7,1c3.8,0,6.9-3,6.9-6.6c0-1.6-0.6-3.1-1.6-4.3
                c3.3-0.9,5.7-3.8,5.7-7.3c0-4.2-3.5-7.5-7.8-7.5c-0.5,0-1,0-1.5,0.1c0-0.2,0-0.4,0-0.6C93.8,18.2,92,15.6,89.5,14.5z"
                fill="#1E293B"
                stroke="#D4AF37"
                strokeWidth="0.2"
              />
              <path 
                d="M61.5,26.5c-1.1,0-2.2,0.2-3.2,0.5c-0.3-3.3-3.1-5.9-6.6-5.9c-1.1,0-2.2,0.3-3.1,0.8c-1.3-2.8-4.2-4.8-7.6-4.8
                c-4,0-7.4,2.8-8.2,6.5c-0.7-0.2-1.5-0.3-2.2-0.3c-4.3,0-7.9,3.4-7.9,7.7c0,2.4,1.1,4.5,2.9,6c-2.9,1.2-4.9,4-4.9,7.2
                c0,4.3,3.6,7.8,8.1,7.8c2.5,0,4.8-1.1,6.3-2.9c1,2.4,3.4,4.1,6.2,4.1c2.2,0,4.1-1,5.3-2.6c1.1,0.8,2.4,1.2,3.9,1.2
                c3.7,0,6.7-2.9,6.7-6.6c0-0.5-0.1-1-0.2-1.5c3.7-0.3,6.6-3.4,6.6-7.1C64,28.3,62.1,26.5,61.5,26.5z"
                fill="#1E293B"
                stroke="#D4AF37"
                strokeWidth="0.2"
              />
              <path
                d="M39.5,43.5c-1-0.6-2.1-0.9-3.3-0.9c-3,0-5.4,1.9-6.2,4.5c-0.5-0.2-1.1-0.2-1.7-0.2c-3.2,0-5.8,2.5-5.8,5.5
                c0,3,2.6,5.5,5.8,5.5c0.5,0,1-0.1,1.5-0.2c0.9,2.5,3.3,4.2,6.2,4.2c2.5,0,4.6-1.3,5.6-3.3c0.7,0.3,1.5,0.5,2.4,0.5
                c3.2,0,5.8-2.5,5.8-5.5c0-3-2.6-5.5-5.8-5.5c-0.5,0-1,0.1-1.5,0.2C42,46.3,40.9,44.6,39.5,43.5z"
                fill="#1E293B"
                stroke="#D4AF37"
                strokeWidth="0.2"
              />
              <path
                d="M28.5,36.5c-1.1-0.8-2.5-1.4-3.9-1.4c-3.1,0-5.7,2.3-6.2,5.3c-0.6-0.3-1.3-0.4-2-0.4c-3.2,0-5.8,2.5-5.8,5.5
                c0,3,2.6,5.5,5.8,5.5c0.9,0,1.7-0.2,2.4-0.5c1.3,2.6,4,4.4,7.1,4.4c4.4,0,7.9-3.5,7.9-7.9C33.8,42.5,31.6,38.5,28.5,36.5z"
                fill="#1E293B"
                stroke="#D4AF37"
                strokeWidth="0.2"
              />
              <path
                d="M14.5,26.5c-1-0.6-2.2-0.9-3.5-0.9c-4,0-7.2,3.2-7.2,7.2c0,2.6,1.4,4.9,3.5,6.1c-0.3,0.6-0.4,1.2-0.4,1.9
                c0,2.6,2.2,4.8,4.8,4.8c1.8,0,3.3-1,4.2-2.4c0.7,0.4,1.5,0.7,2.4,0.7c2.6,0,4.8-2.2,4.8-4.8c0-2.6-2.2-4.8-4.8-4.8
                c-0.3,0-0.5,0-0.8,0.1C17.3,31.8,16.3,28.8,14.5,26.5z"
                fill="#1E293B"
                stroke="#D4AF37"
                strokeWidth="0.2"
              />
            </svg>
            
            {/* Location pins */}
            {locationPins.map((pin) => (
              <div
                key={pin.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                onMouseEnter={() => handlePinHover(pin.id)}
                onMouseLeave={handlePinLeave}
              >
                <div 
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                    activeLocation === pin.id 
                      ? 'bg-casino-gold shadow-lg shadow-casino-gold/50 scale-125' 
                      : 'bg-casino-gold'
                  } transition-all duration-300 group-hover:animate-pulse-light`}
                />
                
                {activeLocation === pin.id && (
                  <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-casino-dark-blue border border-casino-gold rounded-md p-3 min-w-[200px] shadow-lg animate-fade-in">
                    <div className="absolute inset-x-0 bottom-0 h-2 flex justify-center transform translate-y-full">
                      <div className="border-8 border-transparent border-t-casino-gold"></div>
                    </div>
                    <h4 className="text-white font-bold mb-1">{pin.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {casinoData.find(casino => casino.id === pin.casinoId)?.location}
                    </p>
                    <button 
                      onClick={handleLearnMore}
                      className="text-casino-gold text-sm hover:underline flex items-center"
                    >
                      Learn More <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">Interactive map showcasing the locations of the world's most prestigious casino hotels.</p>
            <p className="text-gray-400 text-sm mt-2">Hover over pins to see details about each destination.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
