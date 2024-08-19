import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Founders from '@/components/Founders';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Founders />
      <FAQ />
      <Footer />
    </>
  );
}
