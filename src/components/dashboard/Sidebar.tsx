import { 
  FaUsers, 
  FaFileAlt, 
  FaBell, 
  FaCog, 
  FaHome, 
  FaBars, 
  FaChevronLeft,
  FaSignOutAlt,
  FaUserShield 
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
  const [, setActiveItem] = useState("");

  const navItems = [
    { name: "Dashboard", icon: <FaHome />, href: "/dashboard" },
    { name: "Documents", icon: <FaFileAlt />, href: "/dashboard/documents" },
    { name: "Teams", icon: <FaUsers />, href: "/dashboard/teams" },
    { name: "Notifications", icon: <FaBell />, href: "/dashboard/notifications", badge: 2 },
    { name: "Admin", icon: <FaUserShield />, href: "/dashboard/admin" },
    { name: "Settings", icon: <FaCog />, href: "/dashboard/settings" },
  ];

  return (
    <aside
      className={`flex flex-col transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-16" : "w-64"} 
        bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-lg p-3 rounded-tr-xl rounded-br-xl ${className}`}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center justify-between w-full mb-4">
          {!isCollapsed && (
            <div className="text-xl font-extrabold text-gray-800 tracking-wide">Archix</div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <FaBars className="text-gray-800 text-lg" />
            ) : (
              <FaChevronLeft className="text-gray-800 text-lg" />
            )}
          </button>
        </div>

        {/* User Profile */}
        {!isCollapsed && (
          <div className="flex items-center gap-3 w-full p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-lg">
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
      <nav className="flex-1 flex flex-col space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                ${isCollapsed ? "justify-center" : "justify-start"}
                ${isActive
                  ? "bg-red-50 text-corporate-red shadow-inner"
                  : "text-gray-700 hover:bg-red-50 hover:text-corporate-red hover:shadow-sm"}`}
              title={isCollapsed ? item.name : ""}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg relative">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-corporate-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center shadow">
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
      <div className="mt-auto pt-4 border-t border-gray-200">
        <Link
          to="/logout"
          className={`flex items-center ${isCollapsed ? "justify-center px-0" : "justify-start px-4"} py-4 rounded-xl text-gray-700 hover:bg-red-50 hover:text-corporate-red hover:shadow-sm transition-all font-medium`}
          title={isCollapsed ? "Logout" : ""}
        >
          <FaSignOutAlt className={`${isCollapsed ? "text-1xl" : "text-base"}`} />
          {!isCollapsed && <span className="text-sm ml-3">Logout</span>}
        </Link>
      </div>
    </aside>
  );
};