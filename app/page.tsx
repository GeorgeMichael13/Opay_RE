import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import FeaturesGrid from "@/components/FeaturesGrid";
export default function Home() {
  return (
    <>
     <Header />
      <main className="flex flex-col min-h-screen bg-white">
        {/* Hero: Priority LCP component */}
        <Hero />

        {/* Core Services: High visibility */}
        <section className="relative z-10 bg-white">
          <ServicesSection />
        </section>

        {/* Feature Highlights */}
        <section className="bg-white">
          <FeaturesGrid />
        </section>
        </main>
    </>
  );
}
