// src/components/app/AppHeader.tsx
import { useState, useRef, useEffect } from 'react';
import { BellIcon, ChartBarIcon, UserGroupIcon, FolderIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { FaSignInAlt, FaUserPlus, FaCrown, FaSearch, FaCheck, FaTrash, FaEnvelope, FaExclamationTriangle, FaInfoCircle, FaCheckCircle, FaCog } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface AppHeaderProps { className?: string; }
interface Notification { 
  id: number; 
  title: string;
  description: string; 
  time: string; 
  read: boolean;
  type: string;
  icon: JSX.Element;
}

const headerIcons = [
  { href: '/dashboard', icon: ChartBarIcon, label: 'Dashboard', color: 'text-green-600 hover:text-green-700' },
  { href: '/dashboard/teams', icon: UserGroupIcon, label: 'Teams' },
  { href: '/dashboard/documents', icon: FolderIcon, label: 'Documents' },
  { href: '#', icon: BellIcon, label: 'Notifications', badge: true },
];

const sampleNotifications: Notification[] = [
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
  }
];

export const AppHeader = ({ className = '' }: AppHeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setDropdownOpen(false);
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) setNotificationsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchClick = () => searchInputRef.current?.focus();

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

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className={`bg-white shadow sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="/home" className="flex items-center gap-2">
            <img src="/logos/archixCopy.png" alt="Archix Docs Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-900">Archix Docs</span>
          </a>

          {/* Navigation & Actions */}
          <nav className="flex items-center space-x-4">

            {/* Search */}
            <div className="relative">
              <button 
                type="button"
                onClick={handleSearchClick}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm focus:outline-none"
                aria-label="Focus search input"
              >
                <FaSearch />
              </button>
              <input 
                type="text" 
                placeholder="Search..."
                ref={searchInputRef}
                className="pl-9 pr-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm w-48 transition-all"
              />
            </div>

            {/* Icons */}
            <ul className="flex items-center space-x-2">
              {headerIcons.map((item, idx) => {
                const Icon = item.icon;
                if (item.label === 'Notifications') {
                  return (
                    <li key={idx} className="relative" ref={notificationsRef}>
                      <button 
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                        className="p-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-transform transform hover:scale-105 relative"
                        aria-label={item.label}
                        aria-expanded={notificationsOpen}
                      >
                        <Icon className={`h-5 w-5 text-gray-600 ${item.color || ''}`} />
                        {unreadCount > 0 && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center ">
                            {unreadCount}
                          </span>
                        )}
                      </button>

                      <AnimatePresence>
                        {notificationsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-50"
                            role="menu"
                          >
                            {/* Header */}
                            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100 bg-white rounded-t-xl">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-blue-100 rounded-lg">
                                  <BellIcon className="h-4 w-4 text-blue-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                                {unreadCount > 0 && (
                                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                                    {unreadCount} unread
                                  </span>
                                )}
                              </div>
                              <div className="flex gap-1">
                                <button 
                                  onClick={markAllAsRead}
                                  className="p-1.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                  title="Mark all as read"
                                >
                                  <FaCheck className="text-xs" />
                                </button>
                                <button 
                                  onClick={() => setNotifications([])}
                                  className="p-1.5 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                                  title="Clear all"
                                >
                                  <FaTrash className="text-xs" />
                                </button>
                              </div>
                            </div>

                            {/* Notifications List */}
                            <div className="max-h-96 overflow-y-auto">
                              {notifications.length > 0 ? (
                                <div className="p-2">
                                  {notifications.map(notification => (
                                    <motion.div 
                                      key={notification.id}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 }}
                                      className={`p-3 rounded-xl mb-2 transition-all ${notification.read ? 'bg-gray-50 border border-gray-100' : 'bg-blue-50 border border-blue-100'}`}
                                      role="menuitem"
                                    >
                                      <div className="flex gap-3">
                                        <div className="mt-0.5">
                                          {notification.icon}
                                        </div>
                                        <div className="flex-grow">
                                          <div className="flex justify-between items-start">
                                            <h4 className={`text-sm font-semibold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                                              {notification.title}
                                            </h4>
                                            <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                                          </div>
                                          <p className="text-gray-600 text-xs mt-1">{notification.description}</p>
                                        </div>
                                      </div>
                                      {!notification.read && (
                                        <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-gray-100">
                                          <button 
                                            onClick={() => markAsRead(notification.id)}
                                            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white text-gray-600 border border-gray-200 text-xs font-medium hover:bg-gray-50"
                                          >
                                            <FaCheck className="text-xs" />
                                            Mark read
                                          </button>
                                        </div>
                                      )}
                                    </motion.div>
                                  ))}
                                </div>
                              ) : (
                                <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                                  <div className="p-2 bg-gray-100 rounded-full mb-3">
                                    <BellIcon className="h-5 w-5 text-gray-400" />
                                  </div>
                                  <h4 className="text-sm font-medium text-gray-700">No notifications</h4>
                                  <p className="text-gray-500 text-xs mt-1">You're all caught up!</p>
                                </div>
                              )}
                            </div>
                            {/* Footer */}
                            <div className="px-4 py-2 border-t border-gray-100 bg-white rounded-b-xl">
                              <a
                                href="/dashboard/notifications"
                                className="w-full block text-center text-sm text-gray-600 hover:text-red-600 transition-colors"
                              >
                                View all
                              </a>
                            </div>

                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={idx} className="relative group">
                    <a href={item.href} className="p-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-transform transform hover:scale-105" aria-label={item.label}>
                      <Icon className={`h-5 w-5 text-gray-600 ${item.color || ''}`} />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Upgrade button */}
            <a 
              href="/pricing"
              className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              aria-label="Upgrade to premium"
            >
              <FaCrown className="h-4 w-4" />
              <span>Upgrade</span>
              <SparklesIcon className="h-4 w-4" />
            </a>

            {/* Auth buttons */}
            <div className="flex items-center space-x-2">
              <a href="/login" className="p-2 rounded-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-red-600 flex items-center justify-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500">
                <FaSignInAlt className="h-4 w-4" />
              </a>
              <a href="/register" className="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500">
                <FaUserPlus className="h-4 w-4" />
              </a>
            </div>

            {/* Profile dropdown */}
            <div className="relative" ref={profileRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="rounded-full flex items-center justify-center w-9 h-9 focus:outline-none transition-transform transform hover:scale-105" aria-label="User menu" aria-expanded={dropdownOpen}>
                <img src="/logos/archixCopy.png" alt="User profile" className={`rounded-full object-cover w-full h-full border-2 border-red-500 transition-all duration-150 ${dropdownOpen ? 'ring-2 ring-red-500' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50"
                    role="menu"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Yassir Bouita</p>
                      <p className="text-xs text-gray-500 truncate">yassir@example.com</p>
                    </div>
                    <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm font-medium transition-colors">Your Profile</a>
                    <a href="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm font-medium transition-colors">Manage Subscription</a>
                    <a href="/account-settings" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm font-medium transition-colors">Account Settings</a>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <a href="/logout" className="block w-full text-left text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm font-medium transition-colors">Sign out</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
};