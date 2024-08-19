import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>

  );
}