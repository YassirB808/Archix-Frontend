import { DocumentsTable } from "./DocumentsTable";
import { useState } from "react";

export const DocumentDash = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Here you would typically handle the file upload to your backend
      console.log("Selected file:", file.name);
      
      // Simulate upload completion
      setTimeout(() => {
        setShowUploadModal(false);
        setSelectedFile(null);
        // Refresh documents list or add the new document to state
      }, 1500);
    }
  };

  const handleAddDocument = () => {
    setShowUploadModal(true);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 h-full min-h-[800px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">All Documents</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and organize all your documents</p>
        </div>
        <button 
          onClick={handleAddDocument}
          className="px-6 py-3 bg-corporate-red text-white rounded-lg shadow hover:bg-red-700 transition flex items-center gap-2 font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Document
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-cream-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Documents</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-cream-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Storage Used</p>
              <p className="text-2xl font-bold text-gray-900">2.8 GB</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-cream-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Shared Documents</p>
              <p className="text-2xl font-bold text-gray-900">184</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search all documents..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none focus:border-corporate-red"
        />
        <div className="flex gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-corporate-red focus:outline-none">
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
            <option>Sort by: Name A-Z</option>
            <option>Sort by: Name Z-A</option>
            <option>Sort by: Size</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-corporate-red focus:outline-none">
            <option>All Types</option>
            <option>PDF</option>
            <option>Word</option>
            <option>Excel</option>
            <option>Image</option>
            <option>Other</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
            </svg>
            More Filters
          </button>
        </div>
      </div>

      {/* Documents Table - Expanded area */}
      <div className="flex-1 overflow-x-auto">
        <DocumentsTable />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">Showing 1-20 of 1,247 documents</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Previous
          </button>
          <button className="px-4 py-2 bg-corporate-red text-white rounded-lg hover:bg-red-700">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            3
          </button>
          <span className="px-3 py-2 text-gray-600">...</span>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            62
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Document</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX, XLS, XLSX, JPG, PNG</p>
              </label>
            </div>
            {selectedFile && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700">Uploading: {selectedFile.name}</p>
                <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full animate-pulse w-3/4"></div>
                </div>
              </div>
            )}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <label
                htmlFor="file-upload"
                className="flex-1 px-4 py-2 bg-corporate-red text-white rounded-lg hover:bg-red-700 text-center cursor-pointer"
              >
                Choose File
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};