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
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "Development Team", members: 12, color: "bg-red-100", textColor: "text-red-800" },
    { id: 2, name: "Design Team", members: 6, color: "bg-red-100", textColor: "text-red-800" },
    { id: 3, name: "Marketing Team", members: 9, color: "bg-red-100", textColor: "text-red-800" },
    { id: 4, name: "Sales Team", members: 7, color: "bg-red-100", textColor: "text-red-800" },
    { id: 5, name: "Support Team", members: 8, color: "bg-red-100", textColor: "text-red-800" },
    { id: 6, name: "QA Team", members: 5, color: "bg-red-100", textColor: "text-red-800" },
    { id: 7, name: "Operations Team", members: 10, color: "bg-red-100", textColor: "text-red-800" },
    { id: 8, name: "Research Team", members: 4, color: "bg-red-100", textColor: "text-red-800" },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Team | null; direction: 'ascending' | 'descending' }>({ 
    key: null, 
    direction: 'ascending' 
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");

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

  const requestSort = (key: keyof Team) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleCreateTeam = () => {
    if (newTeamName.trim()) {
      const newTeam: Team = {
        id: teams.length + 1,
        name: newTeamName.trim(),
        members: 0,
        color: "bg-red-100",
        textColor: "text-red-800"
      };
      setTeams([...teams, newTeam]);
      setNewTeamName("");
      setShowCreateModal(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full min-h-[800px] flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <FaUsers className="text-corporate-red text-xl" />
            </div>
            Teams
          </h2>
          <p className="text-gray-500 mt-1">Manage your teams and members</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-corporate-red text-white font-medium rounded-xl shadow hover:bg-red-700 active:scale-95 transition-all duration-200"
        >
          <FaPlus className="text-sm" />
          New Team
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
        <div className="relative w-full md:w-2/5">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-corporate-red focus:border-corporate-red focus:outline-none text-gray-700 transition-colors"
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
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mt-6 flex-1">
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
                      <button className="p-2 rounded-lg bg-cream-white text-corporate-red hover:bg-red-50 transition-colors" title="View">
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-red-50 p-5 rounded-xl border border-red-100">
          <div className="text-corporate-red font-semibold">Total Teams</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{teams.length}</div>
        </div>
        <div className="bg-red-50 p-5 rounded-xl border border-red-100">
          <div className="text-corporate-red font-semibold">Total Members</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">
            {teams.reduce((acc, team) => acc + team.members, 0)}
          </div>
        </div>
        <div className="bg-red-50 p-5 rounded-xl border border-red-100">
          <div className="text-corporate-red font-semibold">Avg. per Team</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">
            {Math.round(teams.reduce((acc, team) => acc + team.members, 0) / teams.length)}
          </div>
        </div>
      </div>

      {/* Create Team Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create New Team</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Name</label>
                <input
                  type="text"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  placeholder="Enter team name..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateTeam()}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTeam}
                className="flex-1 px-4 py-3 bg-corporate-red text-white rounded-xl hover:bg-red-700 transition-colors"
                disabled={!newTeamName.trim()}
              >
                Create Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};