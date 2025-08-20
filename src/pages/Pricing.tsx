import { AppHeader } from '../components/app/AppHeader';
import { AppFooter } from '../components/app/AppFooter';
import { PricingFrame } from '../components/pricing/PricingFrame';

export const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <PricingFrame />
      </main>
      <AppFooter />
    </div>
  );
};
