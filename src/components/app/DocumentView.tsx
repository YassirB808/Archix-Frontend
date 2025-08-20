// src/components/app/DocumentView.tsx

import { DocumentIcon } from '@heroicons/react/24/outline';

export const DocumentView = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Documents</h2>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
          Upload New
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Document Cards */}
        {[1, 2, 3].map((doc) => (
          <div key={doc} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <DocumentIcon className="h-10 w-10 text-red-600" />
              <div>
                <h3 className="font-medium">Document_{doc}.pdf</h3>
                <p className="text-sm text-gray-500">Last edited 2 days ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};