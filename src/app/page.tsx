import HeroSection from "@/components/sections/HeroSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import InspirationGallery from "@/components/sections/InspirationGallery";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AiCtaSection from "@/components/sections/AiCtaSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BeforeAfterSection />
      <InspirationGallery />
      <HowItWorksSection />
      <AiCtaSection />
      <ContactSection />
    </>
  );
}
