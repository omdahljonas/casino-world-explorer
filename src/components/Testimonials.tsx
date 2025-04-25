
import React, { useEffect, useState } from 'react';
import { testimonialData } from '@/utils/helpers';

const Testimonials = () => {
  const [swiper, setSwiper] = useState<any>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Swiper when component mounts
      const swiperElement = document.querySelector('.testimonials-swiper');
      if (swiperElement) {
        // @ts-ignore
        const swiperInstance = new window.Swiper('.testimonials-swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.testimonials-swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
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
    
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);
  
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
    <section id="testimonials" className="py-16 md:py-24 bg-casino-medium-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Player Experiences</h2>
        <p className="section-subtitle">
          Hear what visitors have to say about their experiences at the world's most exceptional casino hotels.
        </p>
        
        <div className="mt-12 relative">
          <div className="testimonials-swiper">
            <div className="swiper-wrapper">
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <div className="bg-casino-dark-blue rounded-lg p-6 h-full shadow-lg flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-bold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex-grow">
                      <div className="text-casino-gold text-4xl mb-2">"</div>
                      <p className="text-gray-300 italic">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonials-swiper-pagination mt-8"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-casino-dark-blue rounded-lg p-6 md:p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Join Thousands of Casino Enthusiasts</h3>
            <p className="text-gray-300 mb-8">
              Discover more reviews, insights, and exclusive information by becoming part of our global community of casino hotel explorers.
            </p>
            <button 
              onClick={() => document.getElementById('vip-club')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Sign Up Now <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
