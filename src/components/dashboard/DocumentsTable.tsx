import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaFilePdf, FaDownload, FaShare, FaEllipsisV } from "react-icons/fa";

export const DocumentsTable = () => {
  const documents = [
    { 
      name: "Project Plan.docx", 
      team: "Team Alpha", 
      uploaded: "2 days ago",
      type: "doc",
      size: "2.4 MB",
      status: "Approved"
    },
    { 
      name: "Budget Forecast.xlsx", 
      team: "Team Beta", 
      uploaded: "5 days ago",
      type: "xls",
      size: "1.8 MB",
      status: "Pending"
    },
    { 
      name: "Quarterly Review.pptx", 
      team: "Team Alpha", 
      uploaded: "1 week ago",
      type: "ppt",
      size: "5.2 MB",
      status: "Reviewed"
    },
    { 
      name: "Requirements.pdf", 
      team: "Team Gamma", 
      uploaded: "3 days ago",
      type: "pdf",
      size: "3.1 MB",
      status: "Rejected"
    },
  ];

  const getFileIcon = (type: string) => {
    switch(type) {
      case "doc": return <FaFileWord className="text-blue-600 text-lg" />;
      case "xls": return <FaFileExcel className="text-green-600 text-lg" />;
      case "ppt": return <FaFilePowerpoint className="text-orange-600 text-lg" />;
      case "pdf": return <FaFilePdf className="text-red-600 text-lg" />;
      default: return <FaFileWord className="text-gray-600 text-lg" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      Approved: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Reviewed: "bg-blue-100 text-blue-800",
      Rejected: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800"}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-800 text-lg">Recent Documents</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all →
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 rounded-lg">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((doc) => (
              <tr key={doc.name} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getFileIcon(doc.type)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{doc.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-md">{doc.team}</span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{doc.size}</td>
                <td className="py-3 px-4">
                  {getStatusBadge(doc.status)}
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">{doc.uploaded}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <FaDownload className="text-sm" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                      <FaShare className="text-sm" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                      <FaEllipsisV className="text-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
