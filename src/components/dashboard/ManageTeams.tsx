import { FaCog, FaPlus, FaUserFriends } from "react-icons/fa";

export const ManageTeams = () => {
  const teams = [
    { 
      name: "Design Team", 
      members: 8, 
      role: "Admin",
      color: "bg-purple-500"
    },
    { 
      name: "Development", 
      members: 15, 
      role: "Member",
      color: "bg-blue-500"
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Teams</h3>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <FaPlus className="text-sm" />
        </button>
      </div>

      <div className="space-y-3">
        {teams.map((team) => (
          <div 
            key={team.name} 
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${team.color}`}>
                <FaUserFriends className="text-xs" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{team.name}</h4>
                <p className="text-xs text-gray-500">{team.members} members • {team.role}</p>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
              <FaCog className="text-sm" />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full text-center text-xs text-blue-600 hover:text-blue-800 font-medium py-2 mt-3 hover:bg-blue-50 rounded-md transition-colors">
        View all teams
      </button>
    </div>
  );
};
