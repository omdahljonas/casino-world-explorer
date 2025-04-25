
import React, { useEffect, useState } from 'react';
import { casinoData } from '@/utils/helpers';

const Gallery = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Create a flat array of all gallery images with their casino names
  const allImages = casinoData.flatMap(casino => 
    casino.gallery.map(image => ({
      src: image,
      casinoName: casino.name,
      casinoLocation: casino.location
    }))
  );
  
  // Shuffle the images and take the first 7
  const shuffledImages = [...allImages]
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Swiper when component mounts
      const swiperElement = document.querySelector('.swiper');
      if (swiperElement) {
        // @ts-ignore
        const swiperInstance = new window.Swiper('.swiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          on: {
            slideChange: (s: any) => {
              setActiveIndex(s.realIndex);
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
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };
  
  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % shuffledImages.length);
  };
  
  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-casino-dark-blue to-casino-deep-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Visual Showcase</h2>
        <p className="section-subtitle">
          Immerse yourself in the stunning architecture, opulent interiors, and captivating atmospheres of the world's premier casino destinations.
        </p>
        
        <div className="mt-12 relative">
          <div className="swiper">
            <div className="swiper-wrapper">
              {shuffledImages.map((image, index) => (
                <div key={index} className="swiper-slide">
                  <div 
                    className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image.src} 
                      alt={`${image.casinoName} casino`}
                      className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-lg font-bold">{image.casinoName}</h3>
                      <p className="text-sm text-gray-300">{image.casinoLocation}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-casino-gold text-casino-dark-blue px-2 py-1 rounded-md text-sm font-medium">
                        <i className="fas fa-search-plus mr-1"></i> View
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="swiper-pagination mt-6"></div>
            
            <div className="swiper-button-prev text-casino-gold"></div>
            <div className="swiper-button-next text-casino-gold"></div>
          </div>
          
          <div className="flex justify-center mt-8">
            {shuffledImages.map((_, index) => (
              <button
                key={index}
                className={`w-16 h-12 mx-1 rounded overflow-hidden ${
                  activeIndex === index ? 'ring-2 ring-casino-gold' : 'opacity-50'
                }`}
                onClick={() => swiper?.slideTo(index)}
              >
                <img 
                  src={shuffledImages[index].src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-casino-gold"
            onClick={closeLightbox}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <button
            className="absolute left-4 md:left-8 text-white text-4xl hover:text-casino-gold"
            onClick={prevLightboxImage}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="max-w-4xl max-h-[80vh] w-full mx-4">
            <img 
              src={shuffledImages[lightboxIndex].src}
              alt={shuffledImages[lightboxIndex].casinoName}
              className="w-full h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold">{shuffledImages[lightboxIndex].casinoName}</h3>
              <p className="text-gray-300">{shuffledImages[lightboxIndex].casinoLocation}</p>
            </div>
          </div>
          
          <button
            className="absolute right-4 md:right-8 text-white text-4xl hover:text-casino-gold"
            onClick={nextLightboxImage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
