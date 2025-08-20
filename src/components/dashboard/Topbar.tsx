import { FaSearch, FaPlus, FaShare } from "react-icons/fa";

export const Topbar = () => {
  return (
    <header className="flex items-center bg-white px-6 py-3 border-b border-gray-200 shadow-sm">
      
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="Search documents, templates, or users..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>
      
      {/* Right side actions */}
      <div className="flex items-center gap-3 ml-6">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-colors shadow-sm">
          <FaPlus className="text-gray-600 text-base" />
          <span>New Document</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 rounded-xl transition-colors shadow-sm">
          <FaShare className="text-white text-base" />
          <span>Share</span>
        </button>
      </div>
    </header>
  );
};
