import { FaCog, FaPlus, FaUserFriends, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ManageTeams = () => {
  const navigate = useNavigate();

  const teams = [
    { 
      name: "Design Team", 
      members: 8, 
      role: "Admin",
      color: "bg-red-500"
    },
    { 
      name: "Development", 
      members: 15, 
      role: "Member",
      color: "bg-red-400"
    },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-red-100 rounded-lg">
            <FaUsers className="text-corporate-red text-lg" />
          </div>
          <h3 className="font-semibold text-gray-800 text-lg">Teams</h3>
        </div>
        <button className="p-2 text-corporate-red hover:text-red-700 hover:bg-red-50 rounded-full transition-colors">
          <FaPlus className="text-sm" />
        </button>
      </div>

      {/* Teams List */}
      <div className="space-y-3">
        {teams.map((team) => (
          <div 
            key={team.name} 
            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm ${team.color}`}>
                <FaUserFriends className="text-sm" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{team.name}</h4>
                <p className="text-xs text-gray-500">{team.members} members • {team.role}</p>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-corporate-red hover:bg-red-100 rounded-full transition-colors">
              <FaCog className="text-sm" />
            </button>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <button
        onClick={() => navigate("./teams")}
        className="w-full flex items-center justify-center gap-2 text-sm text-white bg-corporate-red hover:bg-red-700 font-medium py-2.5 mt-4 rounded-lg transition-colors"
      >
        <FaUsers className="text-sm" />
        Manage Teams
      </button>
    </div>
  );
};