
import React, { useEffect, useState } from 'react';
import { shuffleArray, shouldIncludeSection } from '@/utils/helpers';

// Import all components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TopCasinos from '@/components/TopCasinos';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import VIPClub from '@/components/VIPClub';
import Testimonials from '@/components/Testimonials';
import WorldMap from '@/components/WorldMap';
import FAQ from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

// Define section components with their IDs
const sectionComponents = [
  { id: 'top-casinos', Component: TopCasinos, required: true },
  { id: 'features', Component: Features, required: false },
  { id: 'gallery', Component: Gallery, required: false },
  { id: 'events', Component: Events, required: false },
  { id: 'vip-club', Component: VIPClub, required: true },
  { id: 'testimonials', Component: Testimonials, required: false },
  { id: 'world-map', Component: WorldMap, required: false },
  { id: 'faq', Component: FAQ, required: false },
  { id: 'blog', Component: BlogSection, required: false },
];

const Index = () => {
  const [sections, setSections] = useState<typeof sectionComponents>([]);
  
  useEffect(() => {
    // Separate required and optional sections
    const requiredSections = sectionComponents.filter(section => section.required);
    const optionalSections = sectionComponents.filter(section => !section.required);
    
    // Randomly select some optional sections to include (excluding 0-2 sections)
    const numToExclude = Math.floor(Math.random() * Math.min(3, optionalSections.length));
    const shuffledOptionalSections = shuffleArray(optionalSections);
    const selectedOptionalSections = shuffledOptionalSections.slice(0, shuffledOptionalSections.length - numToExclude);
    
    // Combine required and selected optional sections, then shuffle
    const combinedSections = [...requiredSections, ...selectedOptionalSections];
    const randomizedSections = shuffleArray(combinedSections);
    
    setSections(randomizedSections);
  }, []);

  return (
    <div className="bg-casino-deep-blue text-white min-h-screen">
      {/* Header is always at the top */}
      <Header />
      
      {/* Hero is always first visible section */}
      <Hero />
      
      {/* Dynamically render other sections in random order */}
      {sections.map(({ id, Component }) => (
        <Component key={id} />
      ))}
      
      {/* Footer is always at the bottom */}
      <Footer />
    </div>
  );
};

export default Index;
