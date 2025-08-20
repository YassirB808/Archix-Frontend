// src/pages/HomePage.tsx
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeatuersSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CtaSection } from '../components/home/CtaSection';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};