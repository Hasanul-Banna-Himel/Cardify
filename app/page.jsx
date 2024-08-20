'use client'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Founders from '@/components/Founders';
import Card from '@/components/Card'
import React, {useState} from 'react';

export default function HomePage() {

  const [isCardVisible, setCardVisible] = useState(false);

  const handleHeroButtonClick = () => {
    setCardVisible(!isCardVisible);
  }

  return (
    <>
      <Navbar />
      <Hero onButtonClick={handleHeroButtonClick} />
      {isCardVisible && <Card />}
      <Features />
      <Founders />
      <FAQ />
      <Footer />
    </>
  );
}
