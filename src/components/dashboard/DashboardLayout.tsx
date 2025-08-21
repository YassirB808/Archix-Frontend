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
      {/* App Header (sticky) */}
      <div className="sticky top-0 z-50">
        <AppHeader />
      </div>

      <div className="flex flex-1 mt-0">
        {/* Sidebar (sticky below header) */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          className="sticky top-16 self-start h-[calc(100vh-64px)] overflow-y-auto" 
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col transition-all duration-300">
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>

      {/* App Footer */}
      <AppFooter />
    </div>
  );
};
