import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-primary text-primary-content py-16">
        <Features />
      </section>
      <section className="bg-accent text-accent-content py-16">
        <FAQ />
      </section>
    </>
  );
}
