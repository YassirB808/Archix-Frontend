import { FaUpload, FaCheckCircle, FaComment, FaUserPlus, FaBell, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const NotificationsPanel = () => {
  const navigate = useNavigate();
  
  const notifications = [
    { 
      text: "Team Alpha uploaded a new document", 
      time: "2 hours ago", 
      icon: <FaUpload className="text-blue-500" />,
      type: "upload",
      read: false
    },
    { 
      text: "Your document 'Budget Forecast.xlsx' was approved", 
      time: "1 day ago", 
      icon: <FaCheckCircle className="text-green-500" />,
      type: "approval",
      read: true
    },
    { 
      text: "Sarah commented on your presentation", 
      time: "2 days ago", 
      icon: <FaComment className="text-purple-500" />,
      type: "comment",
      read: false
    },
    { 
      text: "You were added to Team Gamma", 
      time: "3 days ago", 
      icon: <FaUserPlus className="text-amber-500" />,
      type: "team",
      read: true
    },
  ];

  const getNotificationStyle = (type: string, read: boolean) => {
    const baseStyles = "p-3 rounded-lg border-l-4 transition-all duration-200";
    const readStyle = read ? "bg-white" : "bg-red-50";
    
    const typeBorders = {
      upload: "border-l-blue-400",
      approval: "border-l-green-400",
      comment: "border-l-purple-400",
      team: "border-l-amber-400",
      default: "border-l-gray-400"
    };

    return `${baseStyles} ${readStyle} ${typeBorders[type as keyof typeof typeBorders] || typeBorders.default}`;
  };

  const handleViewAll = () => {
    navigate('./notifications');
  };

  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <FaBell className="text-gray-600" />
          <h3 className="font-semibold text-gray-800 text-lg">Notifications</h3>
        </div>
        <span className="bg-corporate-red text-white text-xs font-medium px-2 py-1 rounded-full">
          3 new
        </span>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div 
            key={index} 
            className={getNotificationStyle(notification.type, notification.read)}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-full shadow-sm mt-0.5">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${notification.read ? 'text-gray-700' : 'text-gray-900 font-medium'}`}>
                  {notification.text}
                </p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 bg-corporate-red rounded-full flex-shrink-0 mt-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <button 
          onClick={handleViewAll}
          className="w-full flex items-center justify-center gap-2 text-sm text-corporate-red hover:text-red-700 font-medium py-2 hover:bg-red-50 rounded-lg transition-colors"
        >
          View all notifications
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};