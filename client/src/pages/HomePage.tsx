import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { WhySection } from "@/components/sections/WhySection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CaseStudiesSection />
      <MetricsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
