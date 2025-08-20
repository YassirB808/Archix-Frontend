  // src/components/app/AppHeader.tsx
  import { useState, useRef, useEffect } from 'react';
  import { BellIcon, ChartBarIcon, UserGroupIcon, FolderIcon, SparklesIcon } from '@heroicons/react/24/outline';
  import { FaSignInAlt, FaUserPlus, FaCrown, FaSearch } from 'react-icons/fa';
  import { motion, AnimatePresence } from 'framer-motion';

  interface AppHeaderProps { className?: string; }
  interface Notification { id: number; message: string; time: string; }

  const headerIcons = [
    { href: '/dashboard', icon: ChartBarIcon, label: 'Dashboard', color: 'text-green-600 hover:text-green-700' },
    { href: '/teams', icon: UserGroupIcon, label: 'Teams' },
    { href: '/documents', icon: FolderIcon, label: 'Documents' },
    { href: '#', icon: BellIcon, label: 'Notifications', badge: true },
  ];

  const sampleNotifications: Notification[] = [
    { id: 1, message: 'New comment on your document', time: '2m ago' },
    { id: 2, message: 'Team member joined your project', time: '10m ago' },
  ];

  export const AppHeader = ({ className = '' }: AppHeaderProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
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

    return (
      <header className={`bg-white shadow ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
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
                          className="p-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-transform transform hover:scale-105"
                          aria-label={item.label}
                          aria-expanded={notificationsOpen}
                        >
                          <Icon className={`h-5 w-5 text-gray-600 ${item.color || ''}`} />
                          {item.badge && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-pulseScale" aria-hidden="true" />}
                        </button>

                        <AnimatePresence>
                          {notificationsOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                              className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50"
                              role="menu"
                            >
                              <div className="px-4 py-2 flex justify-between items-center border-b border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                                <button className="text-xs text-red-600 hover:text-red-700" onClick={() => setNotificationsOpen(false)}>Mark all as read</button>
                              </div>
                              <div className="max-h-64 overflow-y-auto">
                                {sampleNotifications.map(n => (
                                  <motion.div 
                                    key={n.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="px-4 py-3 hover:bg-red-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 rounded-md"
                                    role="menuitem"
                                  >
                                    <p className="text-sm text-gray-700">{n.message}</p>
                                    <div className="flex justify-between items-center mt-1">
                                      <span className="text-xs text-gray-400">{n.time}</span>
                                      <button className="text-xs text-gray-400 hover:text-red-600" aria-label={`Dismiss ${n.message} notification`}>×</button>
                                    </div>
                                  </motion.div>
                                ))}
                                {sampleNotifications.length === 0 && <div className="px-4 py-4 text-center text-gray-400 text-sm">No new notifications</div>}
                              </div>
                              <div className="px-4 py-2 border-t border-gray-100">
                                <a href="/notifications" className="text-xs text-red-600 hover:text-red-700 font-medium">View all notifications</a>
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
