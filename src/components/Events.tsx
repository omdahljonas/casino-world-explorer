
import React, { useState, useEffect } from 'react';
import { eventData, formatDate } from '@/utils/helpers';

const Events = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof eventData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventCountdowns, setEventCountdowns] = useState<{[key: number]: {days: number, hours: number, minutes: number}}>(
    eventData.reduce((acc, event) => ({
      ...acc,
      [event.id]: {days: 0, hours: 0, minutes: 0}
    }), {})
  );
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Swiper when component mounts
      const swiperElement = document.querySelector('.events-swiper');
      if (swiperElement) {
        // @ts-ignore
        const swiperInstance = new window.Swiper('.events-swiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
          loop: false,
          pagination: {
            el: '.events-swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.events-swiper-button-next',
            prevEl: '.events-swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
        setSwiper(swiperInstance);
      }
    }
    
    // Calculate countdowns
    const calculateCountdowns = () => {
      const now = new Date();
      const newCountdowns = {...eventCountdowns};
      
      eventData.forEach(event => {
        const difference = event.date.getTime() - now.getTime();
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          
          newCountdowns[event.id] = { days, hours, minutes };
        }
      });
      
      setEventCountdowns(newCountdowns);
    };
    
    calculateCountdowns();
    const interval = setInterval(calculateCountdowns, 60000); // Update every minute
    
    return () => {
      if (swiper) {
        swiper.destroy();
      }
      clearInterval(interval);
    };
  }, []);
  
  const openEventModal = (event: typeof eventData[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeEventModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-casino-medium-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Upcoming Events & Tournaments</h2>
        <p className="section-subtitle">
          Mark your calendar for these exclusive gaming events at the world's premier casino destinations.
        </p>
        
        <div className="mt-12 relative">
          <div className="events-swiper">
            <div className="swiper-wrapper">
              {eventData.map((event) => (
                <div key={event.id} className="swiper-slide">
                  <div className="bg-casino-dark-blue rounded-lg overflow-hidden shadow-lg h-full flex flex-col card-effect">
                    <div className="h-48 relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="text-casino-gold font-bold flex items-center">
                          <i className="fas fa-calendar-alt mr-1"></i> {formatDate(event.date)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                      <div className="text-gray-400 mb-3 flex items-center">
                        <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                      </div>
                      <p className="text-gray-300 mb-4 flex-grow">{event.description}</p>
                      
                      <div className="bg-casino-light-blue bg-opacity-30 p-3 rounded-md mb-4">
                        <div className="text-sm text-gray-300 mb-2">Countdown:</div>
                        <div className="flex justify-around">
                          <div className="text-center">
                            <div className="text-casino-gold font-bold text-xl">{eventCountdowns[event.id]?.days || 0}</div>
                            <div className="text-xs text-gray-400">Days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-casino-gold font-bold text-xl">{eventCountdowns[event.id]?.hours || 0}</div>
                            <div className="text-xs text-gray-400">Hours</div>
                          </div>
                          <div className="text-center">
                            <div className="text-casino-gold font-bold text-xl">{eventCountdowns[event.id]?.minutes || 0}</div>
                            <div className="text-xs text-gray-400">Mins</div>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className="w-full py-2 bg-casino-gold text-casino-dark-blue font-medium rounded hover:bg-yellow-500 transition-colors"
                        onClick={() => openEventModal(event)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="events-swiper-pagination mt-6"></div>
            
            <div className="events-swiper-button-prev text-casino-gold absolute top-1/2 -left-4 z-10 transform -translate-y-1/2"></div>
            <div className="events-swiper-button-next text-casino-gold absolute top-1/2 -right-4 z-10 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      {/* Event Detail Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={closeEventModal}
          ></div>
          
          <div className="relative bg-casino-dark-blue rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={closeEventModal}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-casino-dark-blue to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-white">{selectedEvent.title}</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-casino-gold rounded-full flex items-center justify-center text-casino-dark-blue">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">Date</div>
                    <div className="text-white font-medium">{formatDate(selectedEvent.date)}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-casino-gold rounded-full flex items-center justify-center text-casino-dark-blue">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">{selectedEvent.location}</div>
                  </div>
                </div>
              </div>
              
              <div className="prose text-gray-300 max-w-none">
                <p className="text-lg">{selectedEvent.description}</p>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-white mb-4">Event Details</h4>
                  <p>
                    {selectedEvent.title.includes("Poker") && (
                      "This prestigious poker tournament will feature multiple rounds of intense competition spread across several days. Players from around the world will compete in various poker variants including No-Limit Hold'em, Pot-Limit Omaha, and Seven-Card Stud. The tournament structure includes blinds that increase every 60 minutes, professional dealers, automated shufflers, and RFID-embedded tables for live streaming. Spectators can enjoy the action from dedicated viewing areas with screens showing hole cards and real-time statistics."
                    )}
                    {selectedEvent.title.includes("Expo") && (
                      "The International Casino Expo brings together industry leaders, innovators, and professionals from across the global gaming ecosystem. Attendees will have access to demonstration areas showcasing next-generation slot machines, table games with enhanced features, cashless payment systems, player tracking technologies, and advanced security solutions. The event includes keynote presentations from casino executives, regulatory panels discussing legislative changes, and networking events designed to foster business connections and knowledge exchange among industry professionals."
                    )}
                    {selectedEvent.title.includes("Baccarat") && (
                      "This exclusive baccarat championship represents the pinnacle of high-stakes gaming, with participants including some of Asia's most respected high-rollers and professional players. The tournament features multiple elimination rounds using both traditional and VIP baccarat rules. Tables are equipped with advanced shuffling technology and specialty cards, while dedicated hosts provide personalized service throughout the event. Private gaming salons offer a refined atmosphere with custom furniture, specialized lighting, and premium refreshments for participants."
                    )}
                    {selectedEvent.title.includes("Classic") && (
                      "The Monte Carlo Casino Classic celebrates the rich European tradition of sophisticated gaming in one of the world's most historic casino venues. This invitation-only tournament showcases European roulette played according to traditional rules on meticulously maintained tables. Participants enjoy the elegant Belle Époque surroundings featuring ornate moldings, crystal chandeliers, and artistic ceiling frescoes that have defined casino elegance for over 150 years. The event includes a formal dinner and opportunities to explore the casino's historic gaming rooms normally reserved for select clientele."
                    )}
                    {selectedEvent.title.includes("Slots") && (
                      "The Global Slots Championship transforms the casino floor into a competitive arena where participants play on specially programmed machines with identical random number generator seeds to ensure fair competition. The tournament features multiple qualifying rounds followed by semifinals and finals, with real-time leaderboards displaying current standings. Participants rotate between machine banks featuring different game themes while accumulating points based on winnings relative to spins taken. The championship atmosphere includes dramatic lighting, enhanced audio, and live commentary broadcast throughout the tournament area."
                    )}
                  </p>
                </div>
                
                <div className="mt-6 bg-casino-light-blue bg-opacity-30 p-4 rounded-md">
                  <h4 className="text-lg font-bold text-white mb-2">Registration Information</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Registration opens: {formatDate(new Date(selectedEvent.date.getTime() - 90*24*60*60*1000))}</li>
                    <li>Entry requirements: Varies based on event type and exclusivity level</li>
                    <li>Spectator access: Limited seating available for non-participants</li>
                    <li>For detailed information, contact the host casino directly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
