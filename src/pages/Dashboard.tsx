import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { QuickStats } from "../components/dashboard/QuickStats";
import { DocumentsTable } from "../components/dashboard/DocumentsTable";
import { NotificationsPanel } from "../components/dashboard/NotificationsTable";
import { ManageTeams } from "@components/dashboard/ManageTeams";    

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        {/* Quick Stats - Top row spanning full width */}
        <div className="lg:col-span-12">
          <QuickStats />
        </div>
        
        {/* Documents Table - Left column (larger) */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 h-full">
            <DocumentsTable />
          </div>
        </div>
        
        {/* Right sidebar with two stacked widgets */}
        <div className="lg:col-span-4 space-y-4">
          {/* Notifications Panel */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <NotificationsPanel />
          </div>
          
          {/* Teams Widget */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <ManageTeams />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};