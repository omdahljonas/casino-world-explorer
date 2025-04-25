
import React, { useState } from 'react';
import { featureData } from '@/utils/helpers';

const Features = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  
  const toggleFeature = (id: number) => {
    if (expandedFeature === id) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(id);
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-casino-medium-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Exceptional Features & Amenities</h2>
        <p className="section-subtitle">
          The world's premier casino hotels offer much more than just gaming. Discover the extraordinary amenities that make these destinations truly special.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featureData.map((feature) => (
            <div 
              key={feature.id} 
              className={`bg-casino-dark-blue rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                expandedFeature === feature.id ? 'ring-2 ring-casino-gold' : ''
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center text-casino-dark-blue">
                  <i className={`fas ${feature.icon} text-xl`}></i>
                </div>
                <h3 className="text-white text-xl font-bold ml-4">{feature.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{feature.description}</p>
              
              <div className="flex justify-between items-center">
                <button 
                  className="text-casino-gold hover:text-yellow-400 transition-colors flex items-center text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFeature(feature.id);
                  }}
                >
                  {expandedFeature === feature.id ? 'Read Less' : 'Read More'}
                  <i className={`fas fa-chevron-${expandedFeature === feature.id ? 'up' : 'down'} ml-1`}></i>
                </button>
              </div>
              
              {expandedFeature === feature.id && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fade-in">
                  <p className="text-gray-300 text-sm">
                    {feature.title === "Casino Floors" && (
                      "The world's best casino floors are engineering marvels designed to maximize gaming pleasure. Featuring thousands of slot machines with the latest technology, hundreds of table games led by professional dealers, and exclusive high-limit areas with private rooms for VIP guests. The attention to detail extends from custom carpeting that complements hours of standing to precisely calculated lighting that enhances game visibility without eye fatigue. Expert layouts balance energy and atmosphere across various gaming zones."
                    )}
                    {feature.title === "Gourmet Dining" && (
                      "Premier casino hotels have revolutionized hospitality by bringing Michelin-starred chefs and innovative concepts under one roof. These culinary destinations feature restaurants ranging from elegant fine dining to casual eateries, often showcasing different international cuisines. Many venues offer spectacular views of gaming floors, city skylines, or water features. Exclusive chef's tables, tasting menus, and wine pairings create memorable dining experiences that complement the gaming offerings."
                    )}
                    {feature.title === "Live Entertainment" && (
                      "Entertainment is central to the casino hotel experience, with custom-built theaters hosting everything from resident Cirque du Soleil productions to headline concerts and comedy shows. Many properties feature multiple venues ranging from intimate lounges with jazz performers to massive arenas that seat thousands. Production values rival Broadway with state-of-the-art sound systems, lighting, and stage mechanics that create immersive experiences unmatched elsewhere in entertainment."
                    )}
                    {feature.title === "VIP Tables" && (
                      "For high-stakes players, private gaming salons offer an unparalleled level of exclusivity and personalization. These invitation-only areas feature higher betting limits, dedicated staff, premium complimentary services, and often distinctive décor that differs from the main casino floor. Private gaming rooms allow players to enjoy their preferred games away from public view, with dedicated hosts who arrange everything from dining reservations to entertainment and transportation."
                    )}
                    {feature.title === "Slot Arcades" && (
                      "Modern slot arcades have evolved dramatically beyond the mechanical machines of the past. Today's casino floors feature immersive video slots with surround sound, vibrating chairs, and stunning graphics running on sophisticated random number generators. Progressive jackpots link machines across multiple properties, creating life-changing prize pools. Gaming manufacturers continuously develop new themes based on popular media franchises, while skill-based elements increasingly complement traditional chance-based play."
                    )}
                    {feature.title === "Premium Amenities" && (
                      "Beyond gaming and entertainment, the world's best casino hotels offer exceptional amenities that enhance every aspect of the guest experience. Stunning swimming pools range from relaxing retreats to lively party scenes. Shopping arcades house luxury brands and boutiques rivaling famous shopping districts. Fitness centers feature the latest equipment and personal trainers, while specially designed public spaces showcase museum-quality art collections and architectural features worthy of their own tours."
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
