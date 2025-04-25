
import React, { useState } from 'react';
import { blogData, formatDate } from '@/utils/helpers';

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof blogData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Take only the first 3 articles
  const displayedArticles = blogData.slice(0, 3);
  
  const openArticleModal = (article: typeof blogData[0]) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeArticleModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-casino-deep-blue to-casino-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest Casino Insights</h2>
        <p className="section-subtitle">
          Explore the latest trends, features, and stories from the world of premier casino destinations.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-casino-medium-blue rounded-lg overflow-hidden shadow-lg card-effect h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-casino-gold mb-3 flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> {formatDate(article.date)}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow line-clamp-3">{article.excerpt}</p>
                
                <button 
                  className="text-casino-gold font-medium hover:text-yellow-400 transition-colors flex items-center"
                  onClick={() => openArticleModal(article)}
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Article Modal */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={closeArticleModal}
          ></div>
          
          <div className="relative bg-casino-dark-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={closeArticleModal}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-casino-dark-blue to-transparent"></div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="text-sm text-casino-gold mb-3 flex items-center">
                <i className="fas fa-calendar-alt mr-2"></i> {formatDate(selectedArticle.date)}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{selectedArticle.title}</h2>
              
              <div className="prose text-gray-300 max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-bold mb-3">Share This Article</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-casino-gold">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-casino-gold">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-casino-gold">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-casino-gold">
                    <i className="fab fa-pinterest text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
