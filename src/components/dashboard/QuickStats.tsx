import { FaFileAlt, FaUsers, FaBell } from "react-icons/fa";

export const QuickStats = () => {
  const stats = [
    { 
      name: "Documents", 
      value: 120, 
      icon: <FaFileAlt className="text-xl" />,
      color: "bg-blue-100 text-blue-600"
    },
    { 
      name: "Teams", 
      value: 5, 
      icon: <FaUsers className="text-xl" />,
      color: "bg-green-100 text-green-600"
    },
    { 
      name: "Notifications", 
      value: 3, 
      icon: <FaBell className="text-xl" />,
      color: "bg-amber-100 text-amber-600"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow duration-200"
        >
          <div className={`p-3 rounded-lg flex items-center justify-center ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
