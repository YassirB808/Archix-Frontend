// src/components/home/CtaSection.tsx
export const CtaSection = () => {
  return (
    <section className="relative py-9 bg-corporate-red text-cream-white overflow-hidden">
      {/* Subtle background elements (kept but refined) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-golden-beige opacity-20 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-floatSlow"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Tightened spacing, better typography */}
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 leading-snug">
          Ready to Transform Your Document Management?
        </h2>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Join thousands of organizations streamlining workflows with our secure, enterprise-ready solution.
        </p>

        {/* Buttons with better proportions + hover states */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-professional-black hover:bg-gray-900 text-cream-white font-semibold py-3.5 px-9 rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95">
            Request Demo
          </button>
          <button className="border-2 border-cream-white hover:bg-cream-white hover:text-professional-black font-semibold py-3.5 px-9 rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95">
            Contact Sales
          </button>
        </div>

        {/* Optional trust badge (minimalist) */}
        <p className="mt-8 text-sm opacity-80">
          Trusted by regulated industries worldwide
        </p>
      </div>
    </section>
  );
};