import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { TeamDash } from "../components/dashboard/TeamDash";    

export const TeamsView = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <div className="lg:col-span-12">
          <TeamDash />
        </div>
      </div>
    </DashboardLayout>
  );
};