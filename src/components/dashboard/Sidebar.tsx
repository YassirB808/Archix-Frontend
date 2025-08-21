import { 
  FaUsers, 
  FaFileAlt, 
  FaBell, 
  FaCog, 
  FaHome, 
  FaBars, 
  FaChevronLeft,
  FaSignOutAlt 
} from "react-icons/fa";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  className?: string;
}

export const Sidebar = ({ isCollapsed, toggleSidebar, className = "" }: SidebarProps) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  const navItems = [
    { name: "Dashboard", icon: <FaHome />, href: "/dashboard" },
    { name: "Documents", icon: <FaFileAlt />, href: "/dashboard/documents" },
    { name: "Teams", icon: <FaUsers />, href: "/dashboard/teams" },
    { name: "Notifications", icon: <FaBell />, href: "/dashboard/notifications", badge: 3 },
    { name: "Settings", icon: <FaCog />, href: "/dashboard/settings" },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 shadow-sm flex flex-col p-3 transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-16" : "w-60"} rounded-tr-xl rounded-br-xl ${className}`}
    >
      {/* Top section */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center justify-between w-full mb-4">
          {!isCollapsed && (
            <div className="text-lg font-bold text-gray-800">Archix</div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <FaBars className="text-dark-gray text-lg" />
            ) : (
              <FaChevronLeft className="text-dark-gray text-lg" />
            )}
          </button>
        </div>

        {/* User profile */}
        {!isCollapsed && (
          <div className="flex items-center gap-3 w-full p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-lg">
              JD
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 text-sm">John Doe</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200
                ${isCollapsed ? "justify-center" : "justify-start"}
                ${isActive
                  ? "bg-gray-100 text-gray-900 shadow-inner"
                  : "text-gray-700 hover:bg-gray-50 hover:shadow-sm"}`}
              title={isCollapsed ? item.name : ""}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center relative text-base">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </span>
              {!isCollapsed && (
                <span className="text-sm">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-auto pt-3 border-t border-gray-200">
        <Link
          to="/logout"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:shadow-sm transition-colors font-medium
            ${isCollapsed ? "justify-center" : "justify-start"}`}
          title={isCollapsed ? "Logout" : ""}
        >
          <FaSignOutAlt className="text-base" />
          {!isCollapsed && <span className="text-sm">Logout</span>}
        </Link>
      </div>
    </aside>
  );
};
