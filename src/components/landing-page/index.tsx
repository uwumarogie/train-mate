import React from "react";
import { LandingPageNavbar } from "./navbar";
import { LandingPageFooter } from "./footer";
import { HeroSection } from "./sections/hero";
import { StatsSection } from "./sections/stats";
import { FeaturesSection } from "./sections/features";
import { HowItWorksSection } from "./sections/how-it-works";
import { AppPreviewSection } from "./sections/app-preview";
import { TestimonialsSection } from "./sections/testimonials";
import { CTASection } from "./sections/cta";

export function LandingPage() {
  return (
    <>
      <LandingPageNavbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <LandingPageFooter />
    </>
  );
}
