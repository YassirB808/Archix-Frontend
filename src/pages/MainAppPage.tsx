// src/pages/MainAppPage.tsx
import { AppHeader } from '../components/app/AppHeader';
import { AppFooter } from '../components/app/AppFooter';
import { Welcome } from '../components/app/Welcome';

export const MainAppPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fixed at top */}
      <AppHeader className="fixed top-0 left-0 right-0 w-full z-50" />

      {/* Main content */}
      <main className="flex-grow pt-10 pb-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <Welcome />
        </div>
      </main>

      {/* Footer */}
      <AppFooter className="w-full" />
    </div>
  );
};
