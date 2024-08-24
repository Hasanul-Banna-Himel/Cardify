'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Founders from '@/components/Founders';
import FlashcardGenerator from '@/components/Card'; // Import the component
import React, { useState } from 'react';

export default function HomePage() {
  const [isFlashcardVisible, setFlashcardVisible] = useState(false); // Updated state variable

  const handleHeroButtonClick = () => {
    setFlashcardVisible(!isFlashcardVisible); // Toggle the visibility
  };

  return (
    <>
      <Navbar />
      <Hero onButtonClick={handleHeroButtonClick} />
      {isFlashcardVisible && <FlashcardGenerator />} {/* Show the FlashcardGenerator component */}
      <Features />
      <Founders />
      <FAQ />
      <Footer />
    </>
  );
}
