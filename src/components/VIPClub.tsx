
import React, { useState } from 'react';
import { countryList, casinoData, isValidEmail, showToast, simulateApiCall } from '@/utils/helpers';

const VIPClub = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    favoriteCasino: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    country: '',
    favoriteCasino: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select your country';
      isValid = false;
    }
    
    if (!formData.favoriteCasino) {
      newErrors.favoriteCasino = 'Please select your favorite casino';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await simulateApiCall(null, 2000);
      
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        country: '',
        favoriteCasino: ''
      });
      
      showToast('Successfully joined the VIP Club!', 'success');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="vip-club" className="py-16 md:py-24 bg-gradient-to-b from-casino-deep-blue to-casino-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Join Our VIP Explorer Club</h2>
        <p className="section-subtitle">
          Get exclusive insights, early access to casino events, and personalized recommendations from the world's premier gaming destinations.
        </p>
        
        <div className="mt-12 bg-casino-medium-blue rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 lg:p-12 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-white mb-6">Sign Up for Exclusive Benefits</h3>
              
              {isSuccess ? (
                <div className="bg-casino-accent-green bg-opacity-20 text-green-400 p-4 rounded-md animate-fade-in">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    <span className="font-bold">Success!</span>
                  </div>
                  <p>Thank you for joining our VIP Explorer Club. You'll receive a confirmation email shortly with details about your membership benefits.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-casino-dark-blue border ${
                        errors.name ? 'border-casino-accent-red' : 'border-gray-700'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-casino-gold text-white`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-casino-accent-red">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-casino-dark-blue border ${
                        errors.email ? 'border-casino-accent-red' : 'border-gray-700'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-casino-gold text-white`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-casino-accent-red">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-white text-sm font-medium mb-2">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-casino-dark-blue border ${
                        errors.country ? 'border-casino-accent-red' : 'border-gray-700'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-casino-gold text-white`}
                    >
                      <option value="">Select your country</option>
                      {countryList.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && <p className="mt-1 text-sm text-casino-accent-red">{errors.country}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="favoriteCasino" className="block text-white text-sm font-medium mb-2">Favorite Hotel Casino</label>
                    <select
                      id="favoriteCasino"
                      name="favoriteCasino"
                      value={formData.favoriteCasino}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-casino-dark-blue border ${
                        errors.favoriteCasino ? 'border-casino-accent-red' : 'border-gray-700'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-casino-gold text-white`}
                    >
                      <option value="">Select your favorite casino</option>
                      {casinoData.map((casino) => (
                        <option key={casino.id} value={casino.name}>
                          {casino.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {errors.favoriteCasino && <p className="mt-1 text-sm text-casino-accent-red">{errors.favoriteCasino}</p>}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-casino-gold hover:bg-yellow-500 text-casino-dark-blue font-bold py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-casino-gold"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-spinner fa-spin mr-2"></i> Processing...
                        </span>
                      ) : (
                        'Join VIP Club'
                      )}
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-6 text-sm text-gray-400">
                <p>By joining, you agree to receive updates about casino hotels and gaming events. We respect your privacy and will never share your information with third parties.</p>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1587890285385-038b5c5f5d5e?q=80&w=1200" 
                alt="VIP Casino Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-casino-dark-blue to-transparent lg:from-transparent lg:to-casino-dark-blue"></div>
              
              <div className="absolute top-0 left-0 w-full h-full flex items-center p-6 lg:p-12">
                <div className="lg:ml-auto lg:max-w-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">VIP Benefits</h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start">
                      <i className="fas fa-check text-casino-gold mt-1 mr-2"></i>
                      <span>Exclusive event invitations and early access</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-casino-gold mt-1 mr-2"></i>
                      <span>Detailed guides to global casino destinations</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-casino-gold mt-1 mr-2"></i>
                      <span>Monthly newsletter with gaming trends and news</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-casino-gold mt-1 mr-2"></i>
                      <span>Community forum access for enthusiasts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPClub;
