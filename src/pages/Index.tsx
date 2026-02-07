import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MarqueeBanner from "@/components/home/MarqueeBanner";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ProductsSection from "@/components/home/ProductsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import WhatsAppButton from "@/components/home/WhatsAppButton";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MarqueeBanner />
        <HowItWorksSection />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
