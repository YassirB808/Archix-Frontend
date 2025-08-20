import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { NotificationDash } from "../components/dashboard/NotificationDash";    

export const NotificationsView = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <div className="lg:col-span-12">
          <NotificationDash />
        </div>
      </div>
    </DashboardLayout>
  );
};