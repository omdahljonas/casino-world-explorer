
import React, { useState } from 'react';
import { casinoData, simulateApiCall } from '@/utils/helpers';

const TopCasinos = () => {
  const [visibleCasinos, setVisibleCasinos] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [selectedCasino, setSelectedCasino] = useState<typeof casinoData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    
    // Simulate API call delay
    await simulateApiCall(null, 1500);
    
    // Show more casinos
    setVisibleCasinos(Math.min(visibleCasinos + 2, casinoData.length));
    setIsLoadingMore(false);
  };
  
  const openCasinoModal = (casino: typeof casinoData[0]) => {
    setSelectedCasino(casino);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeCasinoModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fa-star ${i < Math.floor(rating) ? 'fas text-casino-gold' : 'far text-gray-400'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section id="top-casinos" className="bg-gradient-to-b from-casino-deep-blue to-casino-dark-blue py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">World's Top Hotel Casinos</h2>
        <p className="section-subtitle">
          Discover the most prestigious gaming destinations that combine exceptional service, stunning architecture, and world-class entertainment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {casinoData.slice(0, visibleCasinos).map((casino) => (
            <div 
              key={casino.id}
              className="bg-casino-medium-blue rounded-lg overflow-hidden shadow-lg card-effect"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={casino.image} 
                  alt={casino.name}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">{casino.name}</h3>
                <p className="text-gray-400 mb-2">{casino.location}</p>
                
                <div className="flex items-center mb-3">
                  {renderStars(casino.rating)}
                  <span className="ml-2 text-gray-300 text-sm">{casino.rating.toFixed(1)}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{casino.description}</p>
                
                <button 
                  className="w-full py-2 bg-casino-gold text-casino-dark-blue font-medium rounded hover:bg-yellow-500 transition-colors"
                  onClick={() => openCasinoModal(casino)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {visibleCasinos < casinoData.length && (
          <div className="mt-10 text-center">
            <button 
              className="btn-secondary px-8 py-3"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i> Loading...
                </>
              ) : (
                <>
                  Load More <i className="fas fa-chevron-down ml-2"></i>
                </>
              )}
            </button>
          </div>
        )}
      </div>
      
      {/* Casino Detail Modal */}
      {isModalOpen && selectedCasino && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={closeCasinoModal}
          ></div>
          
          <div className="relative bg-casino-dark-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={closeCasinoModal}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedCasino.gallery[0]} 
                alt={selectedCasino.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-casino-dark-blue to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-white">{selectedCasino.name}</h3>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-gray-400 mr-2"><i className="fas fa-map-marker-alt"></i></span>
                <span className="text-gray-300">{selectedCasino.location}</span>
                <div className="ml-auto flex items-center">
                  {renderStars(selectedCasino.rating)}
                  <span className="ml-2 text-casino-gold font-bold">{selectedCasino.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="prose text-gray-300 max-w-none mb-8">
                <p className="text-lg">{selectedCasino.fullDescription}</p>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">Gallery</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedCasino.gallery.map((image, index) => (
                  <div key={index} className="h-40 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${selectedCasino.name} - View ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TopCasinos;
