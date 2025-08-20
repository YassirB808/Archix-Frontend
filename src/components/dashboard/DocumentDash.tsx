import { DocumentsTable } from "./DocumentsTable";

export const DocumentDash = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          + New Document
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="flex gap-2">
          <button className="px-3 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            Sort
          </button>
          <button className="px-3 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            Filter
          </button>
        </div>
      </div>

      {/* Documents Table */}
      <div className="overflow-x-auto">
        <DocumentsTable />
      </div>
    </div>
  );
};
