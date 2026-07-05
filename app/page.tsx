import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import FeaturesGrid from "@/components/FeaturesGrid";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import SecuritySection from "@/components/SecuritySection"
import SatisfactionSection from "@/components/SatisfactionSection";
import CinematicTimelineSection from "@/components/CinematicTimelineSection";
import MainFooter from "@/components/MainFooter";
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

         {/* Social Proof */}
        <section className="bg-[#f8f9fa]">
          <CustomerTestimonials />
        </section>


        {/* Trust & Security: Critical for Fintech */}
        <section className="bg-white">
          <SecuritySection />
        </section>

         {/* Customer Success */}
        <section className="bg-white">
          <SatisfactionSection />
        </section>

         {/* Brand Story / Visual Timeline */}
        <section className="relative overflow-hidden">
          <CinematicTimelineSection />
        </section>
        </main>
        <MainFooter />
    </>
  );
}
