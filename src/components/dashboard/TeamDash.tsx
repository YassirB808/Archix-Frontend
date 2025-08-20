// src/components/dashboard/TeamDash.tsx
import { useState } from "react";
import { FaUsers, FaPlus, FaSort, FaFilter, FaSearch, FaUserPlus, FaEdit, FaEye } from "react-icons/fa";

// Define a type for our team objects
type Team = {
  id: number;
  name: string;
  members: number;
  color: string;
  textColor: string;
};

export const TeamDash = () => {
  const [teams] = useState<Team[]>([
    { id: 1, name: "Development Team", members: 12, color: "bg-blue-100", textColor: "text-blue-800" },
    { id: 2, name: "Design Team", members: 6, color: "bg-purple-100", textColor: "text-purple-800" },
    { id: 3, name: "Marketing Team", members: 9, color: "bg-pink-100", textColor: "text-pink-800" },
    { id: 4, name: "Sales Team", members: 7, color: "bg-green-100", textColor: "text-green-800" },
    { id: 5, name: "Support Team", members: 8, color: "bg-amber-100", textColor: "text-amber-800" },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Team | null; direction: 'ascending' | 'descending' }>({ 
    key: null, 
    direction: 'ascending' 
  });

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTeams = [...filteredTeams].sort((a, b) => {
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

  // Properly type the key parameter
  const requestSort = (key: keyof Team) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FaUsers className="text-blue-600 text-xl" />
            </div>
            Teams
          </h2>
          <p className="text-gray-500 mt-1">Manage your teams and members</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 active:scale-95 transition-all duration-200">
          <FaPlus className="text-sm" />
          New Team
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-2/5">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-700 transition-colors"
          />
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => requestSort('name')}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <FaSort />
            Sort
          </button>
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <FaFilter />
            Filter
          </button>
        </div>
      </div>

      {/* Team List */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-sm font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Team Name</th>
              <th className="px-6 py-4">Members</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedTeams.length > 0 ? (
              sortedTeams.map((team) => (
                <tr
                  key={team.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${team.color}`}>
                        <FaUsers className={`${team.textColor}`} />
                      </div>
                      <span className="font-semibold text-gray-900">{team.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700">{team.members} members</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" title="View">
                        <FaEye />
                      </button>
                      <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" title="Edit">
                        <FaEdit />
                      </button>
                      <button className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors" title="Add Member">
                        <FaUserPlus />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                  No teams found. Try a different search term or create a new team.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <div className="text-blue-600 font-semibold">Total Teams</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{teams.length}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
          <div className="text-purple-600 font-semibold">Total Members</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">
            {teams.reduce((acc, team) => acc + team.members, 0)}
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
          <div className="text-amber-600 font-semibold">Avg. per Team</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">
            {Math.round(teams.reduce((acc, team) => acc + team.members, 0) / teams.length)}
          </div>
        </div>
      </div>
    </div>
  );
};