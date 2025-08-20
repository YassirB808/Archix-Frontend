// components/dashboard/DashboardLayout.tsx
import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { AppHeader } from "../app/AppHeader";
import { AppFooter } from "../app/AppFooter";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* App Header */}
      <AppHeader />

      <div className="flex flex-1 overflow-hidden mt-1">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          className="sticky top-0 h-screen flex-shrink-0"
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300">
          <main className="flex-1 min-h-[calc(100vh-128px)] overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>

      {/* App Footer */}
      <AppFooter />
    </div>
  );
};
