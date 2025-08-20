import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { SettingDash } from "../components/dashboard/SettingDash";    

export const SettingView = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <div className="lg:col-span-12">
          <SettingDash />
        </div>
      </div>
    </DashboardLayout>
  );
};