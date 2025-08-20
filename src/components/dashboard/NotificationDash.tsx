// src/components/dashboard/NotificationDash.tsx
import { useState } from "react";
import { 
  FaBell, 
  FaFilter, 
  FaCheck, 
  FaTrash, 
  FaEnvelope, 
  FaExclamationTriangle, 
  FaInfoCircle,
  FaCog,
  FaCheckCircle,
} from "react-icons/fa";

export const NotificationDash = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message from Alex",
      description: "Hey, could you review the latest design files?",
      time: "10 min ago",
      read: false,
      type: "message",
      icon: <FaEnvelope className="text-blue-500" />
    },
    {
      id: 2,
      title: "Server downtime warning",
      description: "Scheduled maintenance tomorrow at 2:00 AM",
      time: "30 min ago",
      read: false,
      type: "alert",
      icon: <FaExclamationTriangle className="text-amber-500" />
    },
    {
      id: 3,
      title: "Project update completed",
      description: "Your team has completed the weekly milestones",
      time: "2 hours ago",
      read: true,
      type: "success",
      icon: <FaCheckCircle className="text-green-500" />
    },
    {
      id: 4,
      title: "Payment processed",
      description: "Your invoice #INV-2023-089 has been paid",
      time: "5 hours ago",
      read: true,
      type: "info",
      icon: <FaInfoCircle className="text-indigo-500" />
    },
    {
      id: 5,
      title: "Login from new device",
      description: "New sign-in from Windows device in Mountain View, CA",
      time: "Yesterday",
      read: true,
      type: "security",
      icon: <FaExclamationTriangle className="text-red-500" />
    },
    {
      id: 6,
      title: "Meeting reminder",
      description: "Team sync meeting starts in 15 minutes",
      time: "Yesterday",
      read: true,
      type: "reminder",
      icon: <FaBell className="text-purple-500" />
    }
  ]);

  const filters = [
    { id: "all", label: "All" },
    { id: "unread", label: "Unread" },
    { id: "message", label: "Messages" },
    { id: "alert", label: "Alerts" }
  ];

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !notification.read;
    return notification.type === activeFilter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FaBell className="text-blue-600 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            <p className="text-gray-500 text-sm">{unreadCount} unread notifications</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
          >
            <FaCheck className="text-sm" />
            Mark all as read
          </button>
          <button 
            onClick={clearAll}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
          >
            <FaTrash className="text-sm" />
            Clear all
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mt-6 pb-4 border-b border-gray-100 overflow-x-auto">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-colors ${activeFilter === filter.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="mt-4 overflow-y-auto flex-grow">
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`p-4 rounded-xl border transition-all ${notification.read ? 'border-gray-100 bg-gray-50' : 'border-blue-100 bg-blue-50'}`}
              >
                <div className="flex gap-3">
                  <div className="mt-1">
                    {notification.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className={`font-semibold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                        {notification.title}
                      </h3>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{notification.description}</p>
                  </div>
                </div>
                {!notification.read && (
                  <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-gray-100">
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white text-gray-600 border border-gray-200 text-xs font-medium hover:bg-gray-50"
                    >
                      <FaCheck className="text-xs" />
                      Mark as read
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <FaBell className="text-gray-400 text-2xl" />
            </div>
            <h3 className="font-medium text-gray-700">No notifications</h3>
            <p className="text-gray-500 text-sm mt-1">
              {activeFilter === "all" 
                ? "You're all caught up!" 
                : `No ${activeFilter} notifications`}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-6 mt-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
          <FaCog />
          Notification settings
        </button>
      </div>
    </div>
  );
};