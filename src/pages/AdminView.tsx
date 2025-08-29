import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { AdminDocumentApproval } from "../components/dashboard/AdminDocumentApproval";    

export const AdminView = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <div className="lg:col-span-12">
          <AdminDocumentApproval />
        </div>
      </div>
    </DashboardLayout>
  );
};