import { CursorEffect } from "@/components/cursor-effect";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FAQSection } from "@/components/faq-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <main className="relative overflow-hidden noise-overlay">
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <WhyChooseUsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
