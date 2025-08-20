import { FaFileAlt, FaUsers, FaBell } from "react-icons/fa";

export const QuickStats = () => {
  const stats = [
    { 
      name: "Documents", 
      value: 120, 
      icon: <FaFileAlt className="text-lg" />,
      color: "text-blue-600"
    },
    { 
      name: "Teams", 
      value: 5, 
      icon: <FaUsers className="text-lg" />,
      color: "text-green-600"
    },
    { 
      name: "Notifications", 
      value: 3, 
      icon: <FaBell className="text-lg" />,
      color: "text-amber-600"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white p-4 rounded-lg border border-gray-200 flex items-center space-x-4 hover:shadow-sm transition-shadow duration-150"
        >
          <div className={`p-2 rounded-md bg-gray-50 ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};