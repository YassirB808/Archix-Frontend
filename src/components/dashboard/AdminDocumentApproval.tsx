import { useState } from "react";
import { FaSearch, FaSort, FaCheck, FaTimes, FaEye, FaUsers, FaFileAlt } from "react-icons/fa";

type DocumentRequest = {
  id: number;
  documentName: string;
  teamMember: string;
  teamName: string;
  applicationDate: string;
  status: "pending" | "approved" | "rejected";
  fileType: string;
  fileSize: string;
};

export const AdminDocumentApproval = () => {
  const [requests, setRequests] = useState<DocumentRequest[]>([
    { id: 1, documentName: "Q3 Financial Report", teamMember: "John Doe", teamName: "Finance Team", applicationDate: "2024-01-15", status: "pending", fileType: "PDF", fileSize: "2.4 MB" },
    { id: 2, documentName: "Marketing Strategy", teamMember: "Jane Smith", teamName: "Marketing Team", applicationDate: "2024-01-14", status: "pending", fileType: "DOCX", fileSize: "1.8 MB" },
    { id: 3, documentName: "Product Roadmap", teamMember: "Mike Johnson", teamName: "Development Team", applicationDate: "2024-01-13", status: "approved", fileType: "PDF", fileSize: "3.2 MB" },
    { id: 4, documentName: "Sales Forecast", teamMember: "Sarah Wilson", teamName: "Sales Team", applicationDate: "2024-01-12", status: "rejected", fileType: "XLSX", fileSize: "4.1 MB" },
    { id: 5, documentName: "User Research Findings", teamMember: "Alex Chen", teamName: "Research Team", applicationDate: "2024-01-11", status: "pending", fileType: "PDF", fileSize: "5.7 MB" },
    { id: 6, documentName: "Budget Proposal", teamMember: "Emily Davis", teamName: "Finance Team", applicationDate: "2024-01-10", status: "pending", fileType: "XLSX", fileSize: "2.9 MB" },
    { id: 7, documentName: "Design System", teamMember: "David Kim", teamName: "Design Team", applicationDate: "2024-01-09", status: "approved", fileType: "PDF", fileSize: "8.3 MB" },
    { id: 8, documentName: "Technical Documentation", teamMember: "Lisa Brown", teamName: "Development Team", applicationDate: "2024-01-08", status: "pending", fileType: "DOCX", fileSize: "3.5 MB" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortConfig, setSortConfig] = useState<{ key: keyof DocumentRequest | null; direction: 'ascending' | 'descending' }>({ 
    key: null, 
    direction: 'ascending' 
  });

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.documentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.teamMember.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.teamName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sortedRequests = [...filteredRequests].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key: keyof DocumentRequest) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleApprove = (id: number) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: "approved" } : request
    ));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: "rejected" } : request
    ));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-amber-100 text-amber-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const pendingCount = requests.filter(r => r.status === "pending").length;
  const approvedCount = requests.filter(r => r.status === "approved").length;
  const rejectedCount = requests.filter(r => r.status === "rejected").length;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full min-h-[800px] flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <FaFileAlt className="text-corporate-red text-xl" />
            </div>
            Document Approval
          </h2>
          <p className="text-gray-500 mt-1">Review and manage document submissions from team members</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-red-50 p-5 rounded-xl border border-red-100">
          <div className="text-corporate-red font-semibold">Pending Approval</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{pendingCount}</div>
        </div>
        <div className="bg-green-50 p-5 rounded-xl border border-green-100">
          <div className="text-green-600 font-semibold">Approved</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{approvedCount}</div>
        </div>
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
          <div className="text-amber-600 font-semibold">Rejected</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{rejectedCount}</div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
        <div className="relative w-full md:w-2/5">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents, team members, or teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-corporate-red focus:border-corporate-red focus:outline-none text-gray-700 transition-colors"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium focus:ring-2 focus:ring-corporate-red focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <button 
            onClick={() => requestSort('applicationDate')}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <FaSort />
            Sort
          </button>
        </div>
      </div>

      {/* Requests Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mt-6 flex-1">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-sm font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Document Name</th>
              <th className="px-6 py-4">Team Member</th>
              <th className="px-6 py-4">Team</th>
              <th className="px-6 py-4">Date Applied</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedRequests.length > 0 ? (
              sortedRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <FaFileAlt className="text-corporate-red" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{request.documentName}</div>
                        <div className="text-sm text-gray-500">{request.fileType} • {request.fileSize}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <FaUsers className="text-gray-600 text-sm" />
                      </div>
                      <span className="font-medium text-gray-700">{request.teamMember}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="bg-red-100 text-corporate-red px-3 py-1 rounded-full text-sm font-medium">
                      {request.teamName}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-gray-600">
                    {new Date(request.applicationDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-5">
                    {getStatusBadge(request.status)}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg bg-cream-white text-corporate-red hover:bg-red-50 transition-colors" title="View Document">
                        <FaEye />
                      </button>
                      {request.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleApprove(request.id)}
                            className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                            title="Approve"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={() => handleReject(request.id)}
                            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                            title="Reject"
                          >
                            <FaTimes />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  No document requests found. Try adjusting your search or filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Showing {sortedRequests.length} of {requests.length} document requests
        </p>
      </div>
    </div>
  );
};